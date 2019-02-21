//check off specific Todos by clicking
$('ul').on('click', 'li', function() {
	$(this).toggleClass('completed');
});
//click on X to delete Todo
$('ul').on('click', 'span', function(e) {
	$(this).parent().fadeOut(500, function() {
		$(this).remove();
	});
	e.stopPropagation();
});
//write a new Todo
$('input[type="text"').keypress(function(e) {
	if (e.which === 13) {
		//grab new Todo text from input
		var todoText = $(this).val();
		//earse input field
		$(this).val('');
		//create new li and add to ul
		if(todoText){
			$('ul').append('<li><span><i class="fa fa-trash">X</i></span> '+todoText+'</li>');
		}
	}
});
