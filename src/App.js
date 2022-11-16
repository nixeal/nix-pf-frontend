import './App.css';
import {BrowserRouter,Routes, Route} from "react-router-dom";
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import NoPage from './pages/NoPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Login from './pages/Login';
import Writing from './pages/Writing';
import Project from './pages/Project';
import Admin from './pages/Admin';


function App() {
    return (
            <BrowserRouter>
                <div className='App bg-secondary'>
                <Navbar/>
                <Routes>
                        <Route exact path="/" element={<Home />} />
                            <Route exact path="about" element={<About />} />
                            <Route exact path="contact" element={<Contact />} />
                            <Route exact path='login' element={<Login />} />
                            <Route exact path='writing' element={<Writing />} />
                            <Route exact path='project' element={<Project />} />
                            <Route exact path='admin' element={<Admin />} />
                            <Route exact path="*" element={<NoPage />} />
                </Routes>
                <Footer/>
                </div>
            </BrowserRouter>
    );
}

export default App;

