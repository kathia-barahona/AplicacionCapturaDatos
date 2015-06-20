$(document).ready(main);
var tour = 0;
var contador = 1;

function main(){
	if($(window).width()<= 800){
		$('.menu_bar').click(function(){
		    $('nav').show();
		     
			if(contador == 1){
		        
				$('nav').animate({
					left: '0'
			});
			contador = 0;
			} 
			else {
				contador = 1;
				$('nav').show();
				$('nav').animate({
				left: '-100%'
				});
				
			}
 		
	});
	
 }
}
$(document).ready(changeadmin);
function changeadmin(){
	$('#link_admin').click(function(){
           $('#cb_admin').trigger('click');
	});
}
$(document).ready(cambiarpregunta);
function cambiarpregunta(){
	if($('#cb_admin').is(':checked')){
		console.log("checked");
		$('#pregunta').text("This user will stop being admin. Are you sure?");
		$('#link_admin').attr('value',"Remove Admin");
	}else{
		console.log("unchecked");
		$('#pregunta').text("This user will become admin. Are you sure?");
		$('#link_admin').attr('value',"Make Admin");
	}
}


