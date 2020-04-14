$(document).ready(() => {
    $('#borrar-btn').on('click', () => {
        var id = $('#id-cuestionario-input').val();
        console.log("#borrar-btn:   "+id);
        //deleteCuestionarioByID(id)
    })

    $('.borrar-btn').on('click', () => {
        alert(".borrar-btn:   "+this.id)
        var idCuestionario = this.id;
        console.log(idCuestionario);
        deleteCuestionarioByID(idCuestionario);
    })
});

function deleteCuestionarioByID(id){
    console.log("Deleting cuestionario.io:", id);
    
    let data = {
        method: 'delete'
    }
    fetch(`/profile/${id}`, data).then(response => {
        
        console.log("Deleted cuestionario.io:", id);
        //TODO: hacer swal para exito o fracaso en delete.




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