import Footer from "./components/footer";
import React , {useState, useEffect} from 'react';
import Home from "./components/home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Skills from './components/skills';
import About from './components/about';
import Projects from './components/projects';
import Experience from './components/experince';
import Navbar from "./components/navbar";
import FlashScreen from './components/flashScreen';
import AOS from "aos";
import "aos/dist/aos.css";
function App() {
  const [loading, setLoading]=useState(false);
  useEffect(() => {
    
    setLoading(true)
    AOS.init();
    setTimeout(() => {
      setLoading(false)
    }, 8000);
  }, [])
  
  return (
    <>
    {
      loading ?
        <FlashScreen/>
      :
      <Router>
          <Navbar />
          <Routes>
            <Route exact path='/' element={<Home/>} />
            <Route  path='/Skills'element={<Skills/>} />
            <Route  path='/About' element={<About/>}/>
            <Route path='/Project' element={<Projects/>}/>
            <Route path='/Experience' element={<Experience/>}/>

          </Routes>
          <Footer />
        </Router>
    }
      
    
    </>
  );
}

export default App;
