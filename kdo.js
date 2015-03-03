window.onload = main;

var DOM_kdoframe;



function main()
{
	DOM_kdoframe = document.getElementById("kdoframe");

	// request = new XMLHttpRequest();
	// request.open("GET", "questions.html", false);
	// request.send();
	// txtKdo = request.responseText;

	// DOM_kdoframe.onload = function(){DOM_kdoframe.style.display = "block";};
	DOM_kdoframe.style.display = "block";
	DOM_kdoframe.src = "questions.html";

}