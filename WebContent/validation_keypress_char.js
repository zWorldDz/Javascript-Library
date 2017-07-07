//Avoid Character enter into input field
$(document).ready(function(){
    $("#name").keypress(function(e){
        if(e.charCode>60)
            {
                e.preventDefault();
            }
    });
});
	          <label for="roundedTwo"></label>
