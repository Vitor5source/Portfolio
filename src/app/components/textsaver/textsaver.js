'use client'
import React, { useState, useEffect } from 'react';

function TextSaver() {
  
    const [text, setText] = useState('');
    const [status, setStatus] = useState('');


    useEffect(() => {
        const savedText = localStorage.getItem('savedText');
        if (savedText) {
            setText(savedText);
            setStatus('Texto carregado do armazenamento local.');
        }
    }, []);

    const handleSave = () => {
        localStorage.setItem('savedText', text);
        setStatus('Texto salvo com sucesso!');
    };

    const handleDel = () => {
        localStorage.setItem('savedText', "");
        setStatus('Texto apagado com sucesso!');
    };
    const handleChange = (e) => {
        setText(e.target.value);
    };

    return (
        <div style={{ padding: '5px', fontFamily: 'Arial, sans-serif' }}>
            <h1>Your Name</h1>
            <textarea
                value={text}
                onChange={handleChange}
                placeholder="Digite algo aqui..."
                style={{ marginBottom: '10px', width: '100%' }}
            ></textarea>
            <br />
            <button onClick={handleSave} style={{ marginRight: '10px', color: '#000' }}>
                Salvar
            </button>
            <button onClick={handleDel} style={{ marginRight: '10px', color: '#000' }}>
                Deletar
            </button>
            <p>{status}</p>
        </div>
    );
}

export default TextSaver;
