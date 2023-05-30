import React, { createContext, useState, useEffect } from 'react';

const AuthContext = createContext();



 const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  useEffect(() => {
    const token = localStorage.getItem('token');
    if(token){
      console.log(token)
        setIsAuthenticated(()=>true)
    }
  }, []);
    // Add more state or authentication-related functions if needed
  
    return (
      <AuthContext.Provider value={{ isAuthenticated }}>
        {children}
      </AuthContext.Provider>
    );
  };
  export { AuthProvider, AuthContext };

  


