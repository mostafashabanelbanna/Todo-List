//check off specific Todos by clicking
$('li').on('click', function() {
	$(this).toggleClass('completed');
});
//click on X to delete Todo
$('span').on('click', function(e) {
	$(this).parent().fadeOut(500, function() {
		$(this).remove();
	});
	e.stopPropagation();
});
