(function($){  
  
  $.fn.placeholder = function(){   
    
    function valueIsPlaceholder(input){
      return ($(input).val() == $(input).attr("placeholder"));
    }
    return this.each(function() {  
  
      $(this).find(":input").each(function(){
      
        if($(this).attr("type") == "password"){ 
          
          var new_field = $("<input type='text'>");
          new_field.attr("rel", $(this).attr("id"));
          new_field.attr("value", $(this).attr("placeholder"));
		  new_field.attr("class", $(this).attr("class"));
		  
          $(this).after(new_field);
          new_field.hide();
          
          function showPasswordPlaceHolder(input){
            if( $(input).val() == "" || valueIsPlaceholder(input) ){ 
              $(input).hide();
              $('input[rel=' + $(input).attr("id") + ']').show();
            };
          };
          
          new_field.focus(function(){
            $(this).hide();
            $('input#' + $(this).attr("rel")).show().focus();
          });

          $(this).blur(function(){
             showPasswordPlaceHolder(this);
          });

          showPasswordPlaceHolder(this); 
        
        }else{
          
          function showPlaceholder(input, reload){
            if( $(input).val() == "" || 
              ( reload && valueIsPlaceholder(input) ) ){ 
                $(input).val($(input).attr("placeholder"));
              }
          };
          
          $(this).focus(function(){
            if($(this).val() == $(this).attr("placeholder")){
              $(this).val("");
            };
          });

          $(this).blur(function(){
             showPlaceholder($(this), false)
          });
          
          showPlaceholder(this, true); 
        };
      });
      
      $(this).submit(function(){  
        $(this).find(":input").each(function(){
          if($(this).val() == $(this).attr("placeholder")){
            $(this).val("");
          }          
        });
      });
      
    });  
  };
  
})(jQuery); 