import React from 'react';
import './App.css';
import Home from "./components/Home.js";
import About from "./components/About.js"
import { Routes,Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import Header from "./components/Header.js";
import Error from "./components/Error.js"
function App()
{
    return(
        <>
        <div className='main'>
            
            <BrowserRouter>
            <Routes>
                
                <Route path="/" element={<><Header /><Home/></>}/>

                <Route path="/About" element={<><Header /><About/></>}/>
                <Route path='*' element={<Error/>}/>
        </Routes>
        </BrowserRouter>
        </div>
        </>
    
    )
}
export default App;