document.getElementById('formularioContacto').addEventListener('submit', function (e) {
    e.preventDefault();

    fetch('correo.php', {
        method: 'POST',
        body: new FormData(this)
    })
    .then(response => response.json())
    .then(data => {
        const respuesta = document.getElementById('respuesta');
        respuesta.style.display = 'block';
        
        if (data.success) {
            respuesta.textContent = 'Su mensaje fue enviado con éxito.';
            respuesta.style.color = 'green';
        } else {
            respuesta.textContent = 'Hubo un error al enviar el formulario. Por favor, inténtelo de nuevo más tarde.';
            respuesta.style.color = 'red';
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
});


