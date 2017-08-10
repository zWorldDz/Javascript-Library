/*
 * Check Empty Fields For All input fileds within the form(Batch Validation)
 */
$(document).ready(function(){
	$("").click(function(){ //Button ID
		
		var form =$("");             // Form ID
		var reqlength = $('').length;// Class name from inputs
		
	    var inputValue = $('').filter(function () { // Class name from inputs
	        return this.inputValue != '';
	    });
	    
	    if (inputValue.length>=0 && (inputValue.length !== reqlength)) { //Check the length for all inputs
	      alert("");
	      return false;
	    }else {
	      form.submit();
		  return true;
	    }
	});
});
//End Validation 