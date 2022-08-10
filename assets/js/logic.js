// variable for your questions (array of question objects)
const questions = [
	{
		title: 'The best movie ever made was:',
		choices: [
			'Frozen',
			'Frozen 2: Elsa Reloaded',
			'Frozen 3: Return of the Queen',
			"Frozen 4: Olaf's Revenge",
		],
		answer: 'Frozen',
	},
	{
		title: 'The best city in the US is:',
		choices: ['Dallas', 'Tampa', 'St. Louis', 'New York'],
		answer: 'St. Louis',
	},
	{
		title: 'The best food is:',
		choices: ['Italian', 'More Italian', 'Most Italian', 'all of the above'],
		answer: 'all of the above',
	},
	{
		title: "Our instructor's name is:",
		choices: ['Patrick', 'Josh', 'Rafiq', 'Bill'],
		answer: 'Patrick',
	},
];

// variables to keep track of quiz state
// current question index should probably be global
let currentQuestionIndex = 0;

// total time (score)
let time = questions.length * 15;
let timerId;

// variables to reference DOM elements
const questionsEl = document.getElementById('questions');
const timerEl = document.getElementById('time');
const choicesEl = document.getElementById('choices');
const submitBtn = document.getElementById('submit');
const startBtn = document.getElementById('start');
const initialsEl = document.getElementById('initials');
const feedbackEl = document.getElementById('feedback');

function startQuiz() {
	// hide start screen
	// un-hide questions section
	// start timer
	// show starting time
	// get first question
}

function getQuestion() {
	// get current question object from array
	// update title with current question
	// clear out any old question choices
	// loop over choices
	// create new button for each choice
	// display on the page
}

function questionClick(event) {
	// if the clicked element is not a choice button, do nothing.
	// check if user guessed wrong
	// penalize time
	// show feedback
	// no such thing as negative time....
	// display new time on page
	// give user feedback for correct or incorrect guess
	// flash right/wrong feedback on page for half a second
	// move to next question
	// check if we've run out of questions
}

function quizEnd() {
	// stop timer
	// show end screen
	// show final score
	// hide questions section
}

function clockTick() {
	// update time
	// check if user ran out of time
}

// user clicks button to start quiz

// user clicks on element containing choices
