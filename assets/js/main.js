// Smooth Scrolling
$(function(){
	$("a").click(function(event) {
	if (this.hash !== "") {
	event.preventDefault();
	
	var gato = this.hash;
	
	$('html, body').animate({
	scrollTop: $(gato).offset().top
	}, 800, function(){
window.location.hash = gato;
});
} 
})

//hover en h2 
  $( "h2.movi" ).hover(function() {
	$( this ).fadeOut( 100 );
	$( this ).fadeIn( 500 );
  });
//mouseover en la card
  $( ".card-text" ).on( "mouseover", function() {
	$( this ).css( "color", "yellow" );
  });

 //dblclick 

  $('.fas').dblclick(function() {
    var theColorIs = $(this).css("background-color");
    theColorIs.split(" ").join('')
    console.log(theColorIs)
    if (theColorIs === 'rgb(25, 163, 184)') { 
        $(this).css('background-color', 'red')
    } 
    else { 
        $(this).css('background-color', '#19A3B8')
    }
});

//scroll en el menu 
$(window).scroll(function(){
  var scroll = jQuery(window).scrollTop();
  if (scroll >= 100) {
    $("#menuFijo").addClass("menu-color-fijo-scroll");
  }

  else{
    $("#menuFijo").removeClass("menu-color-fijo-scroll");  	
  }
});

// modal 
  var myModal = document.getElementById('myModal')
var myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', function () {
  myInput.focus()
})

});
//tooltip
$(document).ready(function(){
  $('[data-toggle="tooltip"]').tooltip();   
});