'use client'
import React, { useState } from 'react';
import { useName } from './context'; 
import '../../globals.css';

function TextSaver() {
  const { name, saveName, deleteName } = useName(); 
  const [text, setText] = useState(name || ''); 

  const handleSave = () => {
    saveName(text);
  };

  const handleDel = () => {
    deleteName();
    setText(''); 
  };

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div style={{ padding: '0', margin: '0 auto', fontFamily: 'Arial, sans-serif', textAlign: 'center', display: 'flex', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
     
      {!name && (
        <h1 style={{ position: 'fixed', left: '50%', transform: 'translate(-50%, -100%)', textWrap: 'nowrap' }}>Digite seu nome</h1>
      )}

      
      {!name ? (
        <>
          <input
            type="text"
            value={text}
            onChange={handleChange}
            placeholder="Digite Seu Nome aqui..."
            style={{ borderRadius: '6px', fontSize: 'small', marginTop: '6%', borderStyle: 'solid' }}
          />
          <button onClick={handleSave} className="buttons">
            Salvar
          </button>
        </>
      ) : (
        <div>
          <p>Olá, seja bem-vindo {name}!</p>
          <button onClick={handleDel} className="buttons" id="del">
            Deletar
          </button>
        </div>
      )}
    </div>
  );
}

export default TextSaver;
