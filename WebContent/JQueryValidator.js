	$("#formRegister").validate({
		rules: {
			  visitorName: "required",
		      visitorPassword : {
  		          required: true,
                  minlength : 8
              },
              confirmVisitorPassword : {
  		          required: true,
                  minlength : 8,
                  equalTo : "#visitorPassword"
              },
			  visitorEmail: {
			        required: true,
			        email: true
			  },
		      visitorEmailCode: "required"
		    },
		    // Specify validation error messages
		    messages: {
		      visitorName: "Please Enter User Name",
		      visitorPassword: "Please Enter at least 8 characters to the password ",
		      confirmVisitorPassword: "Confirm Password must same as Password",
		      visitorEmail: "Please Enter Valid Email Address",
		      visitorEmailCode: "Please Enter the code from registered Email"
		    },
		    submitHandler: function(form) {

				//formSubmit

		      }
	});
	