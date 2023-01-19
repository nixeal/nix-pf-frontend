import './App.css';
import { useState, useEffect } from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import NoPage from './pages/NoPage';
import Navbar from './components/navbar-component/Navbar';
import Footer from './components/footer-component/Footer';
import Login from './pages/Login';
import Writing from './pages/Writing';
import Project from './pages/Project';
import Admin from './pages/Admin';
import WritingPage from './pages/sub-pages/WritingPage';
import store from './store';
import {Provider} from 'react-redux';
import { ThemeContext } from './utils/ThemeContext';
const darkTheme = {
    backgroundColor: '#232222',
    color: 'aqua',
    transition: "background-color 0.3s ease-in-out"
};

const lightTheme = {
    backgroundColor: '#f5ffff',
    color: '#3C2A21',
    transition: "background-color 0.3s ease-in-out"
};

//#333

function App() {
    const [theme, setTheme] = useState(lightTheme);
    const toggleTheme=()=>{
        setTheme(theme === darkTheme ? lightTheme : darkTheme);
    }
      
    return (
        <ThemeContext.Provider value={{theme:theme, toggleTheme:toggleTheme}} >
            <Provider store={store}>
            <BrowserRouter>
                <div className='App' style={theme}>
                    <Navbar/>
                    <Routes>
                        <Route path="/"
                            element={<Home/>}/>
                        <Route path="about"
                            element={<About/>}/>
                        <Route path="contact"
                            element={<Contact/>}/>
                        <Route path='login'
                            element={<Login/>}/>
                        <Route path='writing'>
                            <Route path=''
                                element={<Writing/>}></Route>
                            <Route path=':id'
                                element={<WritingPage/>}></Route>
                        </Route>
                        <Route path='project'
                            element={<Project/>}/>
                        <Route path='admin'
                            element={<Admin/>}/>
                        <Route path="*"
                            element={<NoPage/>}/>
                    </Routes>
                    <Footer/>
                </div>
            </BrowserRouter>
        </Provider>
        </ThemeContext.Provider>
    );
}

export default App;

