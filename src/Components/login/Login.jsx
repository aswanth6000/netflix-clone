import React, { useContext, useState } from 'react'
import { firebaseContext } from '../../store/FirebaseContext';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate()
  const [error, setError] = useState('')
  const {firebase} = useContext(firebaseContext)
  const auth = firebase.getAuth()
  const handleClick = (e) =>{
    e.preventDefault()
    firebase.signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
  })
  .then(()=>{
    navigate('/home')
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode);
    const errorMessageArray = errorMessage.split(' ');
    errorMessageArray.shift();
    const errorMessageOnly = errorMessageArray.join(' ');
    setError(errorMessageOnly)
  });
  }
  return (
    <div>
        <div className="absolute">
        <img className=" h-auto object-cover w-screen" src="https://res.cloudinary.com/dihrwghx2/image/upload/v1698161581/netflix/ixuvbjsfsg7fj6zbfqcu.jpg" alt='bg-img'/></div>
        <form className="w-full md:w-4/12 absolute p-12 bg-gray-900 my-14 mx-auto right-0 left-0 text-white bg-opacity-80" onSubmit={(event)=> event.preventDefault()}>
            <h1 className="font-bold text-3xl py-4"> Sign In</h1>
            <input type="text" className="p-4 my-4 w-full bg-gray-700 rounded-md" placeholder="Email address" value={email} onChange={(e)=>setEmail(e.target.value)} />
            <input type="password" className="p-4 my-4 w-full bg-gray-700 rounded-md border-none focus:border border-blue-700" value={password}  placeholder="Password" onChange={(e)=>setPassword(e.target.value)} />
            <p className="text-red-500 font-bold text-lg py-2"></p>
            <button className="p-4 my-6 bg-red-700 w-full rounded-md" onClick={handleClick} >Sign In</button>
            <p className="p-4 text-red-500" >{error ? error : ''}</p>
        </form>
        </div>
  )
}
