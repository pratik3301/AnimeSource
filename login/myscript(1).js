function validatelogin() 
{
		var username = document.getElementById("uname").value;
		var password = document.getElementById("password");
		var  pass=  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,20}$/;

     	if ( !(username.length>=5)){  
        	alert("Username length can't less than 5 ");
        	return false;
    	}

    	if (!pass.test(password.value)) 
    	{
    		alert('Password must contain one digit,one upper case and lower case alphabet and special character and lenth should between 8 to 20')
    		password.focus;
    		return false;
    	}
        if ( (username.length>=5) && (pass.test(password.value)) ) 
        {
          alert('Successfully Login !!!');
          true;  
        }
}


function validateregister()
{
	var email = document.getElementById('txtEmail');
	var eid = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

	var password = document.getElementById("passw");
    var  pass=  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,20}$/;

	var username = document.getElementById("usern").value;

	if ( !(username.length>=5)){  
        alert("Username length can't less than 5 ");  
        return false;
    	}

	if (!eid.test(email.value)) 
	    {
	    alert('Please provide a valid email address');
	    email.focus;
	    return false;
	 	}

	if (!pass.test(password.value)) 
    	{
    		alert('Password must contain digit,upper case and lower case alphabet and special character and lenth should between 8 to 20')
    		password.focus;
    		return false;
    	}

    if ( (username.length>=5) && (pass.test(password.value)) && (eid.test(email.value)) ) 
        {
           alert('Successfully Login !!!');
           return true;
        } 
}

