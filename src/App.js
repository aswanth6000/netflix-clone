import './App.css';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import LandingPageWrapper from './Components/landingpage/LandingPageWrapper';
function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<LandingPageWrapper />}></Route>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
