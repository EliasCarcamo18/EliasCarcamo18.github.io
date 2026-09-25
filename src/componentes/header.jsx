import React from 'react';

export default function Header({ tema, setTema }) {
  return (
    <>
      <header className="header">
        <div className="header-content">
          <h1>Elias Carcamo</h1>
          <h2>Estudiante de Ingeniería en Informática | Backend & Fullstack Developer</h2>
          <p>Especializado en Arquitectura de Microservicios, Java, Spring y Entornos Cloud.</p>
          <div className="header-actions">
            <a href="/CV_Elias_Carcamo.pdf" download="CV_Elias_Carcamo.pdf" className="btn-download">
              Descargar CV (PDF)
            </a>
          </div>
        </div>
      </header>

      <nav className="navbar">
        <div className="nav-links">
          <a href="#perfil">Sobre Mí</a>
          <a href="#portafolio">Proyectos</a>
          <a href="#educacion">Educación</a>
          <a href="#cv">Experiencia y Habilidades</a>
          <a href="#contacto">Contacto</a>
          <a href="https://github.com/EliasCarcamo18" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>

        <div className="theme-selector">
          <label htmlFor="selector-tema">Tema:</label>
          <select 
            id="selector-tema" 
            value={tema} 
            onChange={(e) => setTema(e.target.value)}
          >
            <option value="auto">Automático</option>
            <option value="light">Claro</option>
            <option value="dark">Oscuro</option>
          </select>
        </div>
      </nav>
    </>
  );
}