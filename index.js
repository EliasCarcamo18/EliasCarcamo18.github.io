document.addEventListener('DOMContentLoaded', () => {

    // 1. GESTIÓN DE TEMA (CLARO / OSCURO / AUTOMÁTICO)
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


    // 2. VALIDACIÓN DE FORMULARIO DE CONTACTO
    const formulario = document.getElementById('form-contacto');

    formulario.addEventListener('submit', (e) => {
        e.preventDefault();

        const nombre = document.getElementById('nombre').value.trim();
        const correo = document.getElementById('correo').value.trim();
        const mensaje = document.getElementById('mensaje').value.trim();

        if (nombre === '' || correo === '' || mensaje === '') {
            alert('Por favor, completa todos los campos.');
            return;
        }

        if (!correo.includes('@') || !correo.includes('.')) {
            alert('Por favor, ingresa un correo electrónico válido.');
            return;
        }

        alert('¡Mensaje enviado correctamente!');
        formulario.reset();
    });

});