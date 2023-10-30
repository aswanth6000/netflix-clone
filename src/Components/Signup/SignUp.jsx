import React, { useContext, useState } from 'react'
import { firebaseContext } from '../../store/FirebaseContext';
import { useNavigate } from 'react-router-dom';
import { useForm } from '../../Hooks/useForm';

export default function SignUp() {

  const [value, handleChange] = useForm({
    name : '',
    email : '',
    password : ''
  })
  const navigate = useNavigate()
  const [error, setError] = useState('')
  const {firebase} = useContext(firebaseContext)
  const auth = firebase.getAuth()
  const handleClick = (e) =>{
    e.preventDefault()
    console.log(value.name,'', value.email,'', value.password );
    firebase.createUserWithEmailAndPassword(auth, value.email, value.password)
    .then((userCredential)=>{
      const user = userCredential.user;
      user.displayName = value.name;
      console.log(user);
    })
    .then(()=>navigate('/login'))
    .catch((error)=>{
      const errorCode = error.code;
      const errorMessage = error.message;
      const errorMessageArray = errorMessage.split(' ');
      errorMessageArray.shift();
      const errorMessageOnly = errorMessageArray.join(' ');
      setError(errorMessageOnly)
      console.log(errorCode,"Message:", errorMessage);
    })
  }
  return (
    <div>
        <div className="absolute">
        <img className=" h-auto object-cover w-screen" src="https://res.cloudinary.com/dihrwghx2/image/upload/v1698161581/netflix/ixuvbjsfsg7fj6zbfqcu.jpg" alt='bg-img'/></div>
        <form className="w-full md:w-4/12 absolute p-12 bg-gray-900 my-14 mx-auto right-0 left-0 text-white bg-opacity-80" onSubmit={(event)=> event.preventDefault()}>
            <h1 className="font-bold text-3xl py-4"> Sign Up</h1>
             <input type="text" className="p-4 my-4 w-full bg-gray-700 rounded-md"  placeholder="Full name" name='name' value={value.name} onChange={handleChange} /> 
            <input type="text" className="p-4 my-4 w-full bg-gray-700 rounded-md" placeholder="Email address" name='email' value={value.email} onChange={handleChange} />
            <input type="password" className="p-4 my-4 w-full bg-gray-700 rounded-md border-none focus:border border-blue-700" name='password' value={value.password}  placeholder="Password" onChange={handleChange} />
            <p className="text-red-500 font-bold text-lg py-2"></p>
            <button className="p-4 my-6 bg-red-700 w-full rounded-md" onClick={handleClick} >Sign Up</button>
            <p className="p-4 text-red-500" >{error ? error : ''}</p>
        </form>
        </div>
  )
}
