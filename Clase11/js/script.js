$(document).on("ready", listo);

function listo () {
	$('#box_1').draggable();
	$('#box_2').droppable({over: function(){
		$('#box_2').css('background', 'yellow');
	}});
	$('#box_3').resizable();

	$('#Ciudades').selectable();
	$('#Paises').sortable();

	$('#acordeon').accordion();

	var posibilidades = ['Juan', 'Pedro', 'Pepe', 'Sandra'];

	$('#nombres').autocomplete({source: posibilidades});

	$('.boton').button();

	$.datepicker.regional['es'] = {
                closeText: 'Cerrar',
                prevText: '&#x3c;Ant',
                nextText: 'Sig&#x3e;',
                currentText: 'Hoy',
                monthNames: ['Enero','Febrero','Marzo','Abril','Mayo','Junio',
                'Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'],
                monthNamesShort: ['Ene','Feb','Mar','Abr','May','Jun',
                'Jul','Ago','Sep','Oct','Nov','Dic'],
                dayNames: ['Domingo','Lunes','Martes','Mi&eacute;rcoles','Jueves','Viernes','S&aacute;bado'],
                dayNamesShort: ['Dom','Lun','Mar','Mi&eacute;','Juv','Vie','S&aacute;b'],
                dayNamesMin: ['Do','Lu','Ma','Mi','Ju','Vi','S&aacute;'],
                weekHeader: 'Sm',
                dateFormat: 'dd/mm/yy',
                firstDay: 1,
                isRTL: false,
                showMonthAfterYear: false,
                yearSuffix: ''};
        $.datepicker.setDefaults($.datepicker.regional['es']);

	$('#calendario').datepicker($.datepicker.regional['es']);

	$('#pestana').tabs();

	$('#Dialogo').dialog();

}