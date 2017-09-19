    function check(e,value){
        var unicode=e.charCode? e.charCode : e.keyCode;
        if (value.indexOf(".") != -1)
        	if( unicode == 46 )
        		return false;
        
        if (unicode!=8)
        	if((unicode<48||unicode>57)&&unicode!=46)
        		return false;
    }
    
    function checkLength(){
    var fieldLength = document.getElementById("").value.length;
    if(fieldLength <= 16){
        return true;
    }
    else
    {
        var str = document.getElementById("").value;
        str = str.substring(0, str.length - 1);
        document.getElementById("").value = str;
    }
    }