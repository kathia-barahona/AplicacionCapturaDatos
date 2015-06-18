$(document).ready(main);
var tour = 0;
var contador = 1;
/*if(tour === 0){
	
	tour = 1;
}*/
  $('nav').animate({
		left: '-100%'
  });
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


});

};