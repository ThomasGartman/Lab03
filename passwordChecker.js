function passwordChecker()
{
	if(document.getElementById("password").value.length < 8)	
	{
		alert("Password needs to be at least 8 characters long.")
	}
	else if(document.getElementById("password").value != document.getElementById("verifyPass").value) 
	{
		alert("Passwords do not match. Check and try again.");
	}
	else
	{
		alert("Password Verified.");
	}
}
