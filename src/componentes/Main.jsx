import React, { useState } from 'react';

export default function Main() {
  const [formData, setFormData] = useState({ nombre: '', correo: '', mensaje: '' });
  const [enviando, setEnviando] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.nombre || !formData.correo || !formData.mensaje) {
      alert('Por favor, completa todos los campos.');
      return;
    }

    setEnviando(true);
    try {
      const res = await fetch("https://formsubmit.co/ajax/el.carcamo@duocuc.cl", {
        method: "POST",
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          Nombre: formData.nombre,
          Correo: formData.correo,
          Mensaje: formData.mensaje
        })
      });

      if (res.ok) {
        alert('¡Mensaje enviado con éxito! Te contactaré a la brevedad.');
        setFormData({ nombre: '', correo: '', mensaje: '' });
      } else {
        alert('Ocurrió un error al enviar el mensaje.');
      }
    } catch (error) {
      alert('Error de conexión. Inténtalo más tarde.');
    } finally {
      setEnviando(false);
    }
  };

  return (
    <main className="container">

      {/* Perfil Profesional */}
      <section id="perfil" className="card">
        <h2>Perfil Profesional</h2>
        <p>
          Estudiante de tercer año de Ingeniería en Informática en Duoc UC con sólida formación en desarrollo Fullstack y backend de microservicios. Experiencia práctica liderando y coordinando equipos de desarrollo en proyectos integrales semestrales. Competente en la construcción de arquitecturas escalables utilizando Java (Spring Boot, Spring Cloud Eureka, API Gateway), bases de datos relacionales y NoSQL, contenedores con Docker y despliegues en AWS Academy. Nivel de inglés intermedio en desarrollo.
        </p>
      </section>

      {/* Proyectos */}
      <section id="portafolio" className="card">
        <h2>Proyectos Destacados</h2>
        <div className="projects-grid">
          <article className="project-card">
            <h3>Proyecto Fullstack Web</h3>
            <p className="project-repo"><strong>Repositorio:</strong> <a href="https://github.com/Benja-ignacio/Proyecto-Fullstack.git" target="_blank" rel="noopener noreferrer">Benja-ignacio/Proyecto-Fullstack</a></p>
            <p>Aplicación web integral con arquitectura cliente-servidor. Implementa autenticación de usuarios, operaciones CRUD completas y conexión a bases de datos relacionales/NoSQL.</p>
            <div className="tags-container">
              <span className="tag">Java</span>
              <span className="tag">JavaScript</span>
              <span className="tag">HTML/CSS</span>
              <span className="tag">MySQL</span>
              <span className="tag">NoSQL</span>
              <span className="tag">Git</span>
            </div>
          </article>

          <article className="project-card">
            <h3>Innovatech - Arquitectura de Microservicios</h3>
            <p className="project-repo"><strong>Repositorio:</strong> <a href="https://github.com/EliasCarcamo18/Innovatech.git" target="_blank" rel="noopener noreferrer">EliasCarcamo18/Innovatech</a></p>
            <p>Solución tecnológica orientada a microservicios. Integra descubrimiento de servicios con Netflix Eureka, enrutamiento mediante API Gateway, pruebas con Postman y empaquetado en contenedores Docker sobre AWS Academy.</p>
            <div className="tags-container">
              <span className="tag">Spring Cloud</span>
              <span className="tag">Eureka</span>
              <span className="tag">API Gateway</span>
              <span className="tag">Docker</span>
              <span className="tag">AWS Academy</span>
              <span className="tag">Postman</span>
            </div>
          </article>
        </div>
      </section>

      {/* Educación */}
      <section id="educacion" className="card">
        <h2>Educación y Certificaciones</h2>
        <div className="timeline">
          <div className="timeline-item">
            <h3>Ingeniería en Informática</h3>
            <p className="timeline-sub">Duoc UC | 2024 - Presente (Cursando 3er Año)</p>
            <p>Formación enfocada en ingeniería de software, bases de datos, redes, desarrollo web y gestión de proyectos informáticos.</p>
          </div>
          <div className="timeline-item">
            <h3>Capacitación Cloud & Microservicios</h3>
            <p className="timeline-sub">AWS Academy / Formación Académica</p>
            <p>Uso de infraestructura en la nube, despliegue de contenedores Docker y diseño de arquitecturas distribuidas.</p>
          </div>
          <div className="timeline-item">
            <h3>Inglés Intermedio</h3>
            <p className="timeline-sub">En curso (B1-B2 Técnico)</p>
            <p>Comprensión lectora de documentación técnica, redacción de código y comunicación operacional.</p>
          </div>
        </div>
      </section>

      {/* CV e Información */}
      <section id="cv" className="card">
        <h2>Información Personal</h2>
        <ul className="info-list">
          <li><strong>Nombre:</strong> Elias Carcamo</li>
          <li><strong>Edad:</strong> 20 años</li>
          <li>
            <strong>Correo Electrónico:</strong> 
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=el.carcamo@duocuc.cl" target="_blank" rel="noopener noreferrer">el.carcamo@duocuc.cl</a>
          </li>
          <li>
            <strong>WhatsApp / Teléfono:</strong> 
            <a href="https://wa.me/56912345678" target="_blank" rel="noopener noreferrer">+56 9 1234 5678</a>
          </li>
        </ul>

        <h2>Experiencia Destacada</h2>
        <div className="timeline">
          <div className="timeline-item">
            <h3>Líder de Proyectos Académicos TI</h3>
            <p className="timeline-sub">Duoc UC | Proyectos Semestrales</p>
            <p>Coordinación de equipos de trabajo, asignación de tareas, control de versiones con Git/GitHub y aseguramiento de entregables técnicos bajo metodologías ágiles.</p>
          </div>
          <div className="timeline-item">
            <h3>Asistente de Operaciones</h3>
            <p className="timeline-sub">Sector QSR | 3 Años</p>
            <p>Gestión operativa, control de calidad e higiene, liderazgo de personal, capacitación y resolución de incidencias en entornos de alta demanda.</p>
          </div>
          <div className="timeline-item">
            <h3>Ayudante Técnico</h3>
            <p className="timeline-sub">Construcción</p>
            <p>Trabajo en equipo, ejecución técnica, resolución práctica de problemas y adaptabilidad.</p>
          </div>
        </div>

        <h2>Habilidades Técnicas (Stack)</h2>
        <div className="skills-container">
          <span className="skill-badge tech">Java / Spring Boot</span>
          <span className="skill-badge tech">Spring Cloud (Eureka / Gateway)</span>
          <span className="skill-badge tech">Python</span>
          <span className="skill-badge tech">JavaScript</span>
          <span className="skill-badge tech">Kotlin (En aprendizaje)</span>
          <span className="skill-badge tech">HTML5 / CSS3</span>
          <span className="skill-badge tech">MySQL / NoSQL</span>
          <span className="skill-badge tech">Docker</span>
          <span className="skill-badge tech">AWS Academy</span>
          <span className="skill-badge tech">Git / GitHub</span>
          <span className="skill-badge tech">Postman</span>
          <span className="skill-badge tech">Visual Studio / VS Code</span>
        </div>

        <h2 style={{ marginTop: '20px' }}>Habilidades Blandas y Liderazgo</h2>
        <div className="skills-container">
          <span className="skill-badge soft">Liderazgo de Equipos</span>
          <span className="skill-badge soft">Coordinación de Proyectos</span>
          <span className="skill-badge soft">Gestión Operativa</span>
          <span className="skill-badge soft">Resolución de Problemas</span>
          <span className="skill-badge soft">Trabajo Bajo Presión</span>
          <span className="skill-badge soft">Comunicación Efectiva</span>
        </div>
      </section>

      {/* Formulario Contacto */}
      <section id="contacto" className="card">
        <h2>Contacto Directo</h2>
        <p style={{ marginBottom: '15px' }}>
          Escríbeme por{' '}
          <a href="https://wa.me/56912345678" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-color)', fontWeight: 'bold' }}>WhatsApp (+56 9 1234 5678)</a>{' '}
          o completa el siguiente formulario para enviarme un correo directamente:
        </p>

        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="nombre">Nombre Completo:</label>
            <input 
              type="text" 
              id="nombre" 
              name="nombre" 
              value={formData.nombre} 
              onChange={handleChange} 
              placeholder="Ej: Juan Pérez" 
              required 
            />
          </div>

          <div className="form-group">
            <label htmlFor="correo">Correo Electrónico:</label>
            <input 
              type="email" 
              id="correo" 
              name="correo" 
              value={formData.correo} 
              onChange={handleChange} 
              placeholder="tu-correo@ejemplo.com" 
              required 
            />
          </div>

          <div className="form-group">
            <label htmlFor="mensaje">Mensaje:</label>
            <textarea 
              id="mensaje" 
              name="mensaje" 
              rows="4" 
              value={formData.mensaje} 
              onChange={handleChange} 
              placeholder="Escribe tu mensaje aquí..." 
              required 
            />
          </div>

          <button type="submit" className="btn-submit" disabled={enviando}>
            {enviando ? 'Enviando...' : 'Enviar Mensaje'}
          </button>
        </form>
      </section>

    </main>
  );
}