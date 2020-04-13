$(document).ready(() => {
    $('#borrar-btn').on('click', () => {
        var id = $('#id-cuestionario-input').val();
        deleteCuestionarioByID(id)
    })
});

function deleteCuestionarioByID(id){
    console.log("Deleting cuestionario.io:", id);
    
    data = {
        method: 'delete',
        body: id
    }
    fetch(`/profile/${id}`, data).then(response => {
        
        console.log("Deleted cuestionario.io:", id);

        /*
        if (response.status != 200) {
            Swal.fire({
                title: 'Error',
                text: 'Hubo un error al borrar tu Cuestionar.io',
                icon: 'error'
            });
        } else {
            console.log(`Response status: ${response.status}`);
        }
        */
    });
}