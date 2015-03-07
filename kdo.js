window.onload = main;

var DOM_kdoframe;
var DOM_kdopanel;

var DOM_from;
var DOM_to;
var DOM_question;
var DOM_confirm;
var DOM_answer;


var firstpage;
var nextpage;

var currentQuestion = 0;
var data;

function main()
{
	DOM_kdoframe = document.getElementById("kdoframe");
	DOM_kdopanel = document.getElementById("kdopanel");
	DOM_from = document.getElementById("from");
	DOM_to = document.getElementById("to");
	DOM_question = document.getElementById("question");
	DOM_confirm = document.getElementById("confirm");
	DOM_answer = document.getElementById("answer");


	var request = new XMLHttpRequest();
	request.open("GET", "data.json", false);
	request.send();
	var txtdata = request.responseText;
	data = JSON.parse(txtdata);

	DOM_from.innerHTML = data.from;
	DOM_to.innerHTML = data.to;
	firstpage = data.page1;
	nextpage = data.page2;

	DOM_question.innerHTML = data.questions[currentQuestion].question;

	DOM_kdoframe.style.display = "block";
	DOM_kdoframe.src = firstpage;

	DOM_kdopanel.style.display = "block";

	DOM_confirm.addEventListener("click", kdo);
}


function kdo()
{
	var valid = false;
	
	for (var i = 0 ; i < data.questions[currentQuestion].answer.length; i++)
	{
		if (DOM_answer.value == data.questions[currentQuestion].answer[i])
		{
			valid = true;
		}
	}
		console.log(valid);
	if (valid)
	{
		currentQuestion++;

		if (currentQuestion >= data.questions.length)
		{
			DOM_kdoframe.src = nextpage;

			DOM_kdopanel.style.display = "none";
		}
		else
		{
			DOM_question.innerHTML = data.questions[currentQuestion].question;
			DOM.answer.value = "";
		}
	}
	else
	{
		alert("Bad answer");
		DOM.answer.value = "";
	}
}