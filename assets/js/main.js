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
$( ".fas" ).click(function() {
	$( ".pruebaimg" ).toggle( "slow", function() {
	  // Animation complete.
	});
  });


  var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
  var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
	return new bootstrap.Tooltip(tooltipTriggerEl)
  })
  
  var myModal = document.getElementById('myModal')
var myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', function () {
  myInput.focus()
})
});

