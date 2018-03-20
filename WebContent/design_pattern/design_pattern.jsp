<!DOCTYPE HTML>
<html>
<head>
</head>
<body>
<a id="attribute-to-change"></a>
</body>

<!--  Module Pattern  -->

<script type="text/javascript">
var HTMLChanger = (function() {
	  var contents = 'private'

	  var changeHTML = function() {
	    var element = document.getElementById('attribute-to-change');
	    element.innerHTML = contents;
	  }

	  return {
	    callChangeHTML: function() {
	      changeHTML();
	      console.log(contents);
	    }
	  };

	})();

	HTMLChanger.callChangeHTML();       // Outputs: 'contents'
	console.log(HTMLChanger.contents); 
</script>

<!-- Revealing Module Pattern  -->

<script type="text/javascript">
var Exp = (function() {
    var contents = '100'

    var publicOne = function() {
        console.log("inside public one");
    	privateOne();
    }
    
    var publicTwo = function() {
        console.log("inside public two");
      }
    
    var privateOne = function() {
        console.log("inside private one");
        contents++;
        console.log("contents"+contents);
      }
    
    return {
		first:publicOne,
		second:publicTwo
    };

  })();
Exp.first();
Exp.second();
</script>
</html>