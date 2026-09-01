document.addEventListener('DOMContentLoaded', () => {

    // 1. Control del Selector de Temas (Claro / Oscuro / Automático)
    const selectorTema = document.getElementById('selector-tema');
    const mediaQueryOscuro = window.matchMedia('(prefers-color-scheme: dark)');

    function aplicarTema(modo) {
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
    }

    selectorTema.addEventListener('change', (e) => {
        const opcion = e.target.value;
        aplicarTema(opcion);
        localStorage.setItem('temaPreferido', opcion);
    });

    mediaQueryOscuro.addEventListener('change', () => {
        if (selectorTema.value === 'auto') {
            aplicarTema('auto');
        }
    });

    const temaGuardado = localStorage.getItem('temaPreferido') || 'auto';
    selectorTema.value = temaGuardado;
    aplicarTema(temaGuardado);


    // 2. Envío de Formulario mediante API FormSubmit (A tu correo institucional)
    const formulario = document.getElementById('form-contacto');
    const btnEnviar = document.getElementById('btn-enviar');

    formulario.addEventListener('submit', async (e) => {
        e.preventDefault();

        const nombre = document.getElementById('nombre').value.trim();
        const correo = document.getElementById('correo').value.trim();
        const mensaje = document.getElementById('mensaje').value.trim();

        if (nombre === '' || correo === '' || mensaje === '') {
            alert('Por favor, completa todos los campos requeridos.');
            return;
        }

        // Cambiar el estado visual del botón mientras envía
        btnEnviar.textContent = 'Enviando...';
        btnEnviar.disabled = true;

        try {
            const respuesta = await fetch("https://formsubmit.co/ajax/el.carcamo@duocuc.cl", {
                method: "POST",
                headers: { 
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    Nombre: nombre,
                    Correo: correo,
                    Mensaje: mensaje
                })
            });

            if (respuesta.ok) {
                alert('¡Mensaje enviado con éxito! Te contactaré a la brevedad.');
                formulario.reset();
            } else {
                alert('Ocurrió un error al enviar el mensaje. Inténtalo de nuevo.');
            }
        } catch (error) {
            alert('Error de conexión. Inténtalo más tarde.');
        } finally {
            btnEnviar.textContent = 'Enviar Mensaje';
            btnEnviar.disabled = false;
        }
    });

});