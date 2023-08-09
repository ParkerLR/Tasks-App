$(document).ready(function () {

    console.log('HOLA'); // Mensaje de hola, manda un mensaje en consola que diga hola

    $('#search').keyup(function () { // Corrección: Agrega la apertura de llaves aquí
        let search = $('#search').val();

        $.ajax({
            // Utiliza el método ajax para no tener que refrescar la página.
            url: 'tasks-search.php', // Indica que este js usa el archivo tasks-search.php para hacer la búsqueda.
            type: 'POST',
            data: { search },
            success: function (response) {
                console.log(response);
            }
        });
    }); // Corrección: Agrega el cierre de llaves aquí

});