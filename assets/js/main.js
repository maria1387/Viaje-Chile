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

  $( "h2.movi" ).hover(function() {
	$( this ).fadeOut( 100 );
	$( this ).fadeIn( 500 );
  });

  $( ".card-text" ).on( "mouseover", function() {
	$( this ).css( "color", "yellow" );
  });

 

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


  var myModal = document.getElementById('myModal')
var myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', function () {
  myInput.focus()
})



});

$(document).ready(function(){
  $('[data-toggle="tooltip"]').tooltip();   
});