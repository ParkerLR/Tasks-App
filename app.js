$(document).ready(function() {


    console.log('HOLA') \\ Mensaje de hola, manda un mensaje en consola que diaga hola

    $('#search').keyup(function() \\Solo indica que usa la variable $search (recuaro de busqueda) 
        let search = $('#search').val();
   
        $.ajax({											\\utiliza el metodo ajax para para bo tener que refrescar la paguina.														
            url: 'tasks-search.php',		\\indica que este js usa el archivo tasks-sear,php para hacer la busqueda 
            type: 'POST',
            data: { search },
             success: function(response){
                console.log(response);
                 
             }
             
        })
    }) 
    
});



