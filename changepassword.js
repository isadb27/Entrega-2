function cambiarContrasena() {
    var contrasenaActual = document.getElementById("contrasenaActual").value;
    var nuevaContrasena = document.getElementById("nuevaContrasena").value;
    var confirmarContrasena = document.getElementById("confirmarContrasena").value;

    
    var usuarioGuardado = JSON.parse(localStorage.getItem(document.getElementById("email").value));

    
    if (!usuarioGuardado || usuarioGuardado.password !== contrasenaActual) {
        alert("La contrasena actual es incorrecta.");
        return false; 
    }

    
    if (nuevaContrasena === contrasenaActual) {
        alert("La nueva contrasena no puede ser igual a la contrasena actual.");
        return false; 
    }

    
    if (nuevaContrasena !== confirmarContrasena) {
        alert("La nueva contrasena y la confirmacion no coinciden.");
        return false; 
    }

    
    usuarioGuardado.password = nuevaContrasena;
    localStorage.setItem(document.getElementById("email").value, JSON.stringify(usuarioGuardado));

    
    mostrarMensajeExito();
    return true; 
}

function mostrarMensajeExito() {
    const contenedor = document.createElement('div');
    contenedor.style.textAlign = 'center';
    contenedor.innerHTML = `
        <p>Contraseña cambiada exitosamente.</p>
        <p><a href="landing page.html" style="color: #f09300; text-decoration: underline;">Haz clic aquí para ir a la Pagina de Inicio</a></p>
    `;
    document.body.innerHTML = ''; 
    document.body.appendChild(contenedor); 
}
