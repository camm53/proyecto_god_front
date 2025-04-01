import React, { createContext, useState, useContext, useEffect } from 'react';
import api from '/api';

// Create the UserContext
const UserContext = createContext(null);

// UserProvider component
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Function to fetch user details
  const fetchUserDetails = async (userId) => {
    try {
      const response = await api.get(`/users/${userId}`);
      setUser(response.data);
      return response.data;
    } catch (error) {
      console.error('Error fetching user details:', error);
      return null;
    }
  };

  // Login function
  const login = async (username, password) => {
    try {
      const response = await api.post("/authenticate", { username, password });
      const token = response.data;
      
      // Store token 
      localStorage.setItem("token", token);

      return token;
    } catch (error) {
      console.error('Login error:', error);
      throw error;
    }
  };

  // Logout function
  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  // Check authentication on mount
  useEffect(() => {
    const checkAuth = async () => {
      const token = localStorage.getItem("token");

      if (token) {
        try {
          // Verify token or fetch user details if needed
          // This depends on your backend implementation
          setIsLoading(false);
        } catch (error) {
          localStorage.removeItem("token");
          setIsLoading(false);
        }
      } else {
        setIsLoading(false);
      }
    };

    checkAuth();
  }, []);

  return (
    <UserContext.Provider value={{ 
      user, 
      login, 
      logout, 
      isLoading,
      isAuthenticated: !!localStorage.getItem("token")
    }}>
      {children}
    </UserContext.Provider>
  );
};

// Custom hook to use the UserContext
export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};