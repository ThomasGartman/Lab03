function passwordChecker()
{
	if(document.getElementById("password") != document.getElementById("verifyPass")) 
	{
		document.appendChild("Passwords do not match. Check and try again.");
	}
}
