import React, { useState, useEffect } from 'react';
import Header from './componentes/header.jsx';
import Main from './componentes/Main.jsx';
import Footer from './componentes/footer.jsx';
import './app.css';

export default function App() {
  const [tema, setTema] = useState(() => localStorage.getItem('temaPreferido') || 'auto');

  useEffect(() => {
    const mediaQueryOscuro = window.matchMedia('(prefers-color-scheme: dark)');
    
    const aplicarTema = (modo) => {
      if (modo === 'auto') {
        if (mediaQueryOscuro.matches) {
          document.body.classList.add('dark-mode');
        } else {
          document.body.classList.remove('dark-mode');
        }
      } else if (modo === 'dark') {
        document.body.classList.add('dark-mode');
      } else if (modo === 'light') {
        document.body.classList.remove('dark-mode');
      }
    };

    aplicarTema(tema);
    localStorage.setItem('temaPreferido', tema);
  }, [tema]);

  return (
    <div>
      <Header tema={tema} setTema={setTema} />
      <Main />
      <Footer />
    </div>
  );
}