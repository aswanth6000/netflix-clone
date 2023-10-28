import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPageWrapper from './Components/landingpage/LandingPageWrapper';
import MainPageWrapper from './Components/mainpage/MainpageWrapper';
import SignUp from './Components/signup/SignUp';
import GptSearch from './Components/gpt/GptSearch';
import Login from './Components/login/Login';
function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<LandingPageWrapper />}></Route>
    <Route path='/home' element={<MainPageWrapper/>}></Route>
    <Route path='/login' element={<Login/>}></Route>
    <Route path='/search' element={<GptSearch/>}></Route>
    <Route path='/signup' element={<SignUp/>}></Route>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
