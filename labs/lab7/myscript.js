
function start()
{
	var button = document.getElementById("calculateButton");
	button.addEventListener("click",displayVolume,false);
}

function displayVolume()
{
	document.getElementById('myID').innerHTML = 'Welcome!';
}

window.addEventListener("load",start,false)