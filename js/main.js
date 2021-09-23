$('document').ready(function() {   
  /* handle form validation */  
  $("#register-form").validate({
      rules:
   {
	   firstName: {
			required: true,
			minlength: 3
	   },
	   lastName: {
		  required: true,
		   minlength: 3
	   },
	   password: {
		   required: true,
		   minlength: 8,
		   maxlength: 15
	   },
	   cpassword: {
			required: true,
			equalTo: '#password'
	   },
		email: {
            required: true,
            email: true
		},
		phoneNumber: {
            required: true,
            maxlength: 10
		},
	},
   
   messages:
    {
		firstName: { 
			required: "Please provide a First Name",
			minlength: "First Name at least have 3 characters"
		},
		lastName: { 
			required: "Please provide a Last Name",
			minlength: "Last Name at least have 3 characters"
		},
		password:{
			  required: "Please provide a Password",
			  minlength: "Password at least have 8 characters"
		 },
		email: "Please enter a valid email address",
		cpassword:{
			required: "Please retype your password",
			equalTo: "password doesn't match !"
		},
		phoneNumber:{
			required: "Please provide your Phone Number",
			
		}
       },
    submitHandler: submitForm 
       });  
    /* handle form submit */
    function submitForm() {  
    var data = $("#register-form").serialize();    
    $.ajax({    
    type : 'POST',
    url  : 'user_reg.php',
    data : data,
    beforeSend: function() { 
     $("#error").fadeOut();
     $("#btn-submit").html('<span class="glyphicon glyphicon-transfer"></span>   sending ...');
    },
    success :  function(response) {      

        if(response==1){         
			 $("#error").fadeIn(1000, function(){
			   $("#error").html('<div class="alert alert-danger"> <span class="glyphicon glyphicon-info-sign"></span> Sorry email already taken !</div>');   
			   $("#btn-submit").html('<span class="glyphicon glyphicon-log-in"></span>   Register');         
			 });                    
        } else if(response=="registered"){         
			 $("#register-form")[0].reset();    
			 $("#error").fadeIn();				 
			 $("#error").html('<div class="alert alert-success"> <span class="glyphicon glyphicon-info-sign"></span> User is registered successfully!</div>');   
			 $("#btn-submit").html('<span class="glyphicon glyphicon-log-in"></span>   Register');  
		} 
		}
	});
    return false;
  }
});