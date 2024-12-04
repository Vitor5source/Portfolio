'use client'
import React, { createContext, useState, useEffect, useContext } from 'react';


const NameContext = createContext();


export const NameProvider = ({ children }) => {
  const [name, setName] = useState('');

  useEffect(() => {
    const savedName = localStorage.getItem('savedText');
    if (savedName) {
      setName(savedName);
    }
  }, []);

  const saveName = (name) => {
    localStorage.setItem('savedText', name);
    setName(name);
  };

  const deleteName = () => {
    localStorage.removeItem('savedText');
    setName('');
  };

  return (
    <NameContext.Provider value={{ name, saveName, deleteName }}>
      {children}
    </NameContext.Provider>
  );
};


export const useName = () => {
  const context = useContext(NameContext);
  if (!context) {
    throw new Error('useName must be used within a NameProvider');
  }
  return context;
};
