//example

$(function(){

	function hasPlaceholderSupport() {
	
	  var i = document.createElement('input');
	  
	  return 'placeholder' in i;
	  
	}

	if(!hasPlaceholderSupport()){
	
	  $("#id").placeholder();
	  
	};
	
});

