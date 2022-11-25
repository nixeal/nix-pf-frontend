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
import WritingPage from './pages/sub-pages/WritingPage';


function App() {
    return (
            <BrowserRouter>
                <div className='App bg-secondary'>
                <Navbar/>
                <Routes>
                        <Route path="/" element={<Home />} />
                            <Route path="about" element={<About />} />
                            <Route path="contact" element={<Contact />} />
                            <Route path='login' element={<Login />} />
                            <Route path='writing'>
                                <Route  path='' element={<Writing/>}></Route>
                                <Route  path=':id' element={<WritingPage/>}></Route>
                            </Route>
                            <Route path='project' element={<Project />} />
                            <Route path='admin' element={<Admin />} />
                            <Route path="*" element={<NoPage />} />
                </Routes>
                <Footer/>
                </div>
            </BrowserRouter>
    );
}

export default App;

