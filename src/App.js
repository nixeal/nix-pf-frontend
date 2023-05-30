import './App.css';
import { useState, useContext } from 'react';
import { Routes, Route, Navigate } from "react-router";
import { useNavigate, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import NoPage from './pages/NoPage';
import Navbar from './components/navbar-component/Navbar';
import Footer from './components/footer-component/Footer';
import Login from './pages/Login';
import Writing from './pages/Writing';
import Project from './pages/Project';
import Admin from './pages/Admin';
import WritingPage from './pages/sub-pages/WritingPage';
import { ThemeContext } from './utils/ThemeContext';
import { AuthContext } from './utils/AuthContext';



const darkTheme = {
    backgroundColor: '#232222',
    color: 'aqua',
    transition: "background-color 0.3s ease-in-out",

};

const lightTheme = {
    backgroundColor: '#f5ffff',
    color: '#3C2A21',
    transition: "background-color 0.3s ease-in-out"
};


function App() {
    const [theme, setTheme] = useState(lightTheme);
    const toggleTheme = () => {
        setTheme(theme === darkTheme ? lightTheme : darkTheme);
    }
    const ProtectedRoute = ({ element: Element }) => {
        const { isAuthenticated } = useContext(AuthContext);
        if (!isAuthenticated) {
            return <Navigate to="/login" />;
        }
        return <Element />;
    };
    return (
        <ThemeContext.Provider value={{ theme: theme, toggleTheme: toggleTheme }} >
            <BrowserRouter>
                <div className='App' style={theme}>
                    <Navbar />
                    <Routes>
                        <Route path="/"
                            element={<Home />} />
                        <Route path="about"
                            element={<About />} />
                        <Route path='login'
                            element={<Login />} />
                        <Route path='writing'>
                            <Route path=''
                                element={<Writing />}></Route>
                            <Route path=':id'
                                element={<WritingPage />}></Route>
                        </Route>
                        <Route path='project'
                            element={<Project />} />
                        <Route path="admin/*" element={<ProtectedRoute element={Admin} />} />
                        <Route path="*"
                            element={<NoPage />} />
                    </Routes>
                    <Footer />
                </div>
            </BrowserRouter>
        </ThemeContext.Provider>
    );
}

export default App;

