'use client'; 
import { useState, useEffect } from 'react';
import "./navbar.css";
import Sidebar from '../sidebar/sidebar'
const Navbar = () => {
  const [opacity, setOpacity] = useState(1);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const newOpacity = Math.max(1 - scrollPosition / 200, 0);
    setOpacity(newOpacity);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
  
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 50,
        height: '8%',
        backgroundColor: 'transparent',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        display: 'flex',
        justifyContent: 'space-between',
        padding: '8px 16px', // Diminuído o padding geral
        transition: 'opacity 0.3s ease',
        opacity: opacity,
        color: '#e5e7eb', // dark:text-gray-200
      }}
    >
    
    <Sidebar ></Sidebar>   
      

      <div
        style={{
          width: '100%',
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        

        <ul
          style={{
            display: 'flex',
            flexDirection: 'row', // Alinha os itens da esquerda para a direita
            alignItems: 'center', // Alinha os itens no centro verticalmente
            listStyle: 'none',
            margin: 0,
            padding: 0,
            backgroundColor: 'transparent',
            boxShadow: 'none',
            color: '#fff',
            flexWrap: 'wrap', // Permite que os itens se movam para a próxima linha em telas pequenas
            justifyContent: 'flex-start', // Alinha os itens à esquerda
          }}
        >
         
        </ul>
      
        <h1
          style={{
            fontSize: '1.25rem',
            fontWeight: 'bold',
            color: '#1f2937', // dark:text-gray-200
            cursor: 'pointer',
            position: 'absolute',
          }}
        >
          
        </h1>
        <a href="/." style={{ color: '#fff', textDecoration: 'none', marginTop: '4%'}}>
            Sincoo
          </a>
      </div>
      
    </nav>
    
    </>
  );
};

export default Navbar;
