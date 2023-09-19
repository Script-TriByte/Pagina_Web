document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault();

    fetch('correo.php', {
        method: 'POST',
        body: new FormData(this)
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            window.alert('Su mensaje fue enviado con éxito.');
        } else {
            window.alert('Hubo un error al enviar el formulario. Por favor, inténtelo de nuevo más tarde.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
});