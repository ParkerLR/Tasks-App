$(document).ready(function() {


    console.log('HOLA')

    $('#search').keyup(function() {
        let search = $('#search').val();
   
        $.ajax({
            url: 'tasks-search.php',
            type: 'POST',
            data: { search },
             success: function(response){
                console.log(response);
                 
             }
             
        })
    }) 
    
});

