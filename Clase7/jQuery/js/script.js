$(document).on('ready', cargado);

function cargado(){
	$('#boton1').on('click', clickBoton1);
	$('#boton2').on('click', clickBoton2);
	$('#boton3').on('click', clickBoton3);
	$('#boton4').on('click', clickBoton4);
	$('#boton5').on('click', clickBoton5);
	$('#boton6').on('click', clickBoton6);
	$('#boton7').on('click', clickBoton7);
	$('#boton8').on('click', clickBoton8);
	$('#boton9').on('click', clickBoton9);
	$('#boton10').on('click', clickBoton10);
	$('#boton11').on('click', clickBoton11);
	$('#boton12').on('click', clickBoton12);
	$('#boton13').on('click', clickBoton13);
}

function clickBoton1(){
	//console.log("Ups!! Click en el boton 1");
	var NuevoCSS = {
		'width' : '300px',
		'height' : '300px',
		'background' : 'red'
	};

	$('#box_1').css(NuevoCSS);
}
function clickBoton2(){
	var NuevoCSS = {
		'width' : '300px',
		'height' : '300px',
		'background' : 'blue'
	};

	$(".box_2").css(NuevoCSS);
}
function clickBoton3(){
	var NuevoCSS = {
		'font-size' : '24px',
		'color' : 'blue'
	};

	$("h1").css(NuevoCSS);
}
function clickBoton4(){
	var NuevoCSS = {
		'text-decoration' : 'none',
		'color' : 'red'
	};

	$("[href$='.png']").css(NuevoCSS);
}
function clickBoton5(){
	var x = $('#tablaNumeros').attr('border');
	alert(x);
}
function clickBoton6(){

	$('#tablaNumeros').attr('border', '2');
}
function clickBoton7(){

	$('#tablaNumeros').removeAttr('border');
}
function clickBoton8(){

	$('p').addClass('nuevaClase');
}
function clickBoton9(){

	$('p').removeClass('nuevaClase');
}
function clickBoton10(){

	var htmltext = '<ul><li>Opcion 1</li><li>Opcion 2</li></ul>'

	$('#nuevoHtml').html(htmltext);
}
function clickBoton11(){

	$('#Cadena').prepend("<b>HOla</b>");
	//	$('#Cadena').before("<b>HOla</b>");

}
function clickBoton12(){
	$('#Cadena').append("<b>HOla</b>");
		//	$('#Cadena').after("<b>HOla</b>");

}
function clickBoton13(){

	//$('#Cadena').html("<b>HOla</b>");
	$('#Cadena').text("HOla");

}



