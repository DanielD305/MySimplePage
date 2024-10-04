$(document).ready(function() {
    $('#login-form').submit(function(event) {
        event.preventDefault();
        var username = $('#username').val();
        var password = $('#password').val();

        // Aquí debes agregar la lógica para autenticar al usuario
        // Por ejemplo, puedes hacer una solicitud AJAX a un servidor para verificar las credenciales
        // En este ejemplo, asumiremos que el usuario y contraseña son válidos
        if (username !== '' && password !== '') {
            $('#login-response').html('¡Bienvenido!');
            $('#gif-container').show();
        } else {
            $('#login-response').html('Usuario o contraseña incorrectos');
        }
    });
});