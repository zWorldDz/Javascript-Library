<!DOCTYPE HTML>
<html>
<head>
</head>
<body>
<a id="attribute-to-change"></a>
</body>
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
</html>