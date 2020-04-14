$(document).ready(() => {
    $('.borrar-btn').click(function() {
        //console.log(".borrar-btn:   "+this.id)
        var idCuestionario = this.id;
        deleteCuestionarioByID(idCuestionario);
    })
    $('#btnCreateCuestionario').click(function() {
        fetch('/create')
    })
});

function deleteCuestionarioByID(id){
    console.log("Deleting cuestionario.io:", id);
    
    let data = {
        method: 'delete'
    }
    fetch(`/profile/${id}`, data).catch(e => console.log(e)).then(response => {
        
        //TODO: hacer swal para exito o fracaso en delete.
        if (response.status != 200) {
            Swal.fire({
                title: 'Error',
                text: 'Hubo un error al borrar tu Cuestionar.io',
                icon: 'error'
            });
        } else {
            console.log(`Response status: ${response.status}`);
        }
        
    }).catch(e => console.log(e));
} 