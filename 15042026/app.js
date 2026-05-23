const usuario = [];

// obtener los  datos del usuario
const form = document.getElementById('userform');
const salida = document.getElementById('salidaJSON');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const nombre = document.getElementById('nombre').value;
    const correo = document.getElementById('email').value;
    const contrasena = document.getElementById('password').value;

    const nuevoUsuario = {
        nombre: nombre,
        correo: correo,
        contrasena: contrasena
    };

    usuario.push(nuevoUsuario);
    salida.textContent = JSON.stringify(usuario, null, 2);
    form.reset();
});