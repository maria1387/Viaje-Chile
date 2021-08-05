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
});
$( ".card-title" ).click(function() {
	$( ".card-text" ).toggle( "slow", function() {
	  // Animation complete.
	});
  });


  var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
  var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
	return new bootstrap.Tooltip(tooltipTriggerEl)
  })
  
  $(".fas").click(function(){
    $("img").animate({
       height: 'toggle'
    });
  });
});

