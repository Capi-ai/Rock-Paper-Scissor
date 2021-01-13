let userScore = 0;
let compScore = 0;
const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".Result > p");
const rock_div = document.getElementById("R");
const paper_div = document.getElementById("P");
const scissor_div = document.getElementById("S");



function getComputerChoice() {
	const choices = ["R","P","S"];
	const randomNumber = Math.floor(Math.random()*3);
	return choices[randomNumber];
}

function convertToWord(letter) {
	if (letter === "R") return "Rock";
	if (letter === "P") return "Paper";
	if (letter === "S") return "Scissor"
}

function win(userChoice,computerChoice) {
	userScore++;
	userScore_span.innerHTML = userScore;
	compScore_span.innerHTML = compScore;
	result_div.innerHTML = `${convertToWord(userChoice)} beats 
	${convertToWord(computerChoice)}. 
	You win!! 🔥 `

}

function lose(userChoice,computerChoice) {
	compScore++;
	userScore_span.innerHTML = userScore;
	compScore_span.innerHTML = compScore;
	result_div.innerHTML = `${convertToWord(userChoice)} looses 
	${convertToWord(computerChoice)}. 
	You lost!! 😪 `


}

function draw(userChoice,computerChoice) {
	userScore_span.innerHTML = userScore;
	compScore_span.innerHTML = compScore;
	result_div.innerHTML = `${convertToWord(userChoice)} draws 
	${convertToWord(computerChoice)}. 
	It's a draw!! ⚖️`

}


function game(userchoice) {
	const computerChoice = getComputerChoice();
	const userChoice = userchoice.target.id

	switch (userChoice + computerChoice) {
		case "RS":
		case "PR":
		case "SP":
		win(userChoice,computerChoice);
		break;

		case "RP":
		case "PS":
		case "SR":
		lose(userChoice,computerChoice);
		break;

		case "RR":
		case "PP":
		case "SS":
		draw(userChoice,computerChoice);
		break;
	}

}

function main() {
	rock_div.addEventListener("click",game)

	paper_div.addEventListener("click",game)

	scissor_div.addEventListener("click",game)
}

main();