import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPageWrapper from './Components/landingpage/LandingPageWrapper';
import MainPageWrapper from './Components/mainpage/MainpageWrapper';
function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<LandingPageWrapper />}></Route>
    <Route path='/home' element={<MainPageWrapper/>}></Route>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
