$(document).on("ready", listo);

function listo () {
        $('#aplicar').on('click', aplicarEfecto);

}
function aplicarEfecto () {
        var x = $('#efectos').val();
        $('.boxes').effect(x, 5000); 
}