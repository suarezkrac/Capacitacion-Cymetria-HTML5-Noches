$(document).on('ready', cargado);

function cargado(){
	//$('#box_1').on('mouseover', mouseoverBox1);
	//$('#box_1').on('mouseout', mouseoutBox1);

	$('#box_1').hover(mouseoverBox1, mouseoutBox1);

	$('#box_2').on('mousemove', mousemoveBox2)

}
function mousemoveBox2(event){
	$('#x').text("Coord X = "+event.clientX);
	$('#y').text("Coord Y = "+event.clientY);
}
function mouseoverBox1(){
	$(this).css('background', 'blue');
}

function mouseoutBox1(){
	$(this).css('background', '#eee');
}


