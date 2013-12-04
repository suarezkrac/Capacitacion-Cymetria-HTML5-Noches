$(document).on('ready', cargado);

function cargado(){

	$('#boton_1').on('click', showBox);
	$('#boton_2').on('click', hideBox);
	$('#boton_3').on('click', fadeInBox);
	$('#boton_4').on('click', fadeOutBox);
	$('#boton_5').on('click', fadeToInBox);
	$('#boton_6').on('click', fadeToOutBox);
	$('#boton_7').on('click', slideUpBox);
	$('#boton_8').on('click', slideDownBox);
	$('#boton_9').on('click', slideToggleBox);
	$('#boton_10').on('click',toggleBox);
	$('#boton_11').on('click', animateBox);

	$('.redes .logo').on('mouseover', overlogo);
	$('.redes').on('mouseout', outlogo);

}
function overlogo(){
	var animate_in ={
		width : '100px'
	};
	
	$(this).parent().children(".logo_texto").animate(animate_in, "slow");
}

function outlogo(){
	var animate_in ={
		width : '0px'
	};
	
	$(this).children(".logo_texto").animate(animate_in, "slow");
}

function animateBox(){

	var miAnimacion = {
		width : "500px",
		height : "50px"
	};

	$('#box_7').animate(miAnimacion, 3000);
}
function toggleBox(){

	$('#box_6').toggle('slow');
}
function slideToggleBox(){

	$('#box_5').slideToggle('slow');
}
function slideUpBox(){

	$('#box_4').slideUp('slow');
}
function slideDownBox(){

	$('#box_4').slideDown('slow');
}
function showBox(){

	$('#box_1').show('slow');
}
function hideBox(){
	
	$('#box_1').hide('slow');
}
function fadeInBox(){

	$('#box_2').fadeIn('slow');
}
function fadeOutBox(){

	$('#box_2').fadeOut('slow');
}
function fadeToInBox(){
	
	$('#box_3').fadeTo('slow', 0.9);
}
function fadeToOutBox(){
	
	$('#box_3').fadeTo('slow', 0.1);
}
