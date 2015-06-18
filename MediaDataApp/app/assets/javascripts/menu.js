$(document).ready(main);
var tour = 0;
var contador = 1;

function main(){
$('.menu_bar').click(function(){
// $('nav').toggle();
	 
	if(contador == 1){
		$('nav').animate({
			left: '0'
	});
	contador = 0;
	} 
	else {
		contador = 1;
		$('nav').animate({
		left: '-100%'
		});
	}
 
});


$(document).ready(changeadmin);
function changeadmin(){
	$('#link_admin').click(function(){
           $('#cb_admin').trigger('click');
	});
}

$(document).ready(cambiarpregunta);
function cambiarpregunta(){
	if($('#cb_admin').is(':checked')){
		$('#pregunta').text("This user will stop being admin. Are you sure?");
		$('#link_admin').attr('value',"Remove Admin");
	}else{
		$('#pregunta').text("This user will become admin. Are you sure?");
		$('#link_admin').attr('value',"Make Admin");
	}
}


