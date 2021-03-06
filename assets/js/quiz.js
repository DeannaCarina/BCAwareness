const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const questionContainerElement = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');
let shuffledQuestions, currentQuestionIndex;

// Trigger respective function once user presses 'start' or 'next' button 
startButton.addEventListener('click', startGame);
nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    setNextQuestion();
});

// On game start fill the container with random question and respective answers
function startGame () {
    console.log('Started');
    startButton.classList.add('hide');
    shuffledQuestions = questions.sort(() => Math.random() - 0.5);
    currentQuestionIndex = 0;
    questionContainerElement.classList.remove('hide');
    setNextQuestion();
}

// Clear container and pick another question with different index to avoid repetition 
function setNextQuestion() {
    resetState();
    showQuestion(shuffledQuestions[currentQuestionIndex]);
}

// Show new question and respective answers in form of buttons 
function showQuestion(question) {
    questionElement.innerText = question.question;
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('answer-btn');
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
        answerButtonsElement.appendChild(button);
    });
}

// Clear quiz container from current question and respective asnwers
function resetState() {
    clearStatusClass(document.body);
    nextButton.classList.add('hide');
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}

// Once the user selects an answer show which was correct/wrong with the appropriate color
function selectAnswer(e) {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct;
    setStatusClass(document.body, correct);
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct);
    });
    // If there are questions left allow the user to continue the quiz
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide');
    } else {

      // If there are NOT new questions allow the user to restart the quiz
      resetState();
      startButton.innerText = 'Restart';
      startButton.classList.remove('hide');
      // questionElement.innerText = 'For more information visit our other sections!'

  }
}

// Show green / red color based on which answer was correct / wrong
function setStatusClass(element, correct) {
    clearStatusClass(element);
    if (correct) {
        element.classList.add('correct');
    } else {
        element.classList.add('wrong');
    }
}

// remove green / red color from answers once the users moves to next question
function clearStatusClass(element) {
    element.classList.remove('correct');
    element.classList.remove('wrong');
}


// List of questions
const questions = [
    {
        question: 'You can get breast cancer even if it does not run in your family',
        answers: [
            { text: 'True', correct: true },
            { text: 'False', correct: false },
        ]
    },
    {
        question: 'You still need mammograms after menopause',
        answers: [
            { text: 'True', correct: true },
            { text: 'False', correct: false },
        ]
    },
    {
        question: 'Men can also get breast cancer',
        answers: [
            { text: 'True', correct: true },
            { text: 'False', correct: false },
        ]
    },
    {
        question: 'Surgery and needle biopsies can cause breast cancer to spread',
        answers: [
            { text: 'True', correct: false },
            { text: 'False', correct: true },
        ]
    },
    {
        question: 'There is nothing you can do to lower your breast cancer risk',
        answers: [
            { text: 'True', correct: false },
            { text: 'False', correct: true },
        ]
    },
    {
        question: 'Finding breast cancer early is the key to successful treatment',
        answers: [
            { text: 'True', correct: true },
            { text: 'False', correct: false },
        ]
    },
    {
        question: 'Older women are more likely to develop breast cancer',
        answers: [
            { text: 'True', correct: true },
            { text: 'False', correct: false },
        ]
    },
    {
        question: 'Most breast lumps are cancer',
        answers: [
            { text: 'True', correct: false },
            { text: 'False', correct: true },
        ]
    },
    {
        question: 'It is ok to use deodorant on the day you have a mammogram',
        answers: [
            { text: 'True', correct: false },
            { text: 'False', correct: true },
        ]
    },
    {
        question: 'Women who drink more than one alcoholic beverage a day increase their risk for breast cancer',
        answers: [
            { text: 'True', correct: true },
            { text: 'False', correct: false },
        ]
    },
    {
        question: 'Women who have their first child before age 30 and breastfeed are less likely to develop breast cancer',
        answers: [
            { text: 'True', correct: true },
            { text: 'False', correct: false },
        ]
    },
    {
        question: 'Smoking may increase your risk for breast cancer',
        answers: [
            { text: 'True', correct: true },
            { text: 'False', correct: false },
        ]
    },
    {
        question: 'Breast cancer can be treated by surgery, radiation, hormone therapy and chemotherapy',
        answers: [
            { text: 'True', correct: true },
            { text: 'False', correct: false },
        ]
    },
    {
        question: 'Starting at age 30, women should have a mammogram every 1 or 2 years',
        answers: [
            { text: 'True', correct: false },
            { text: 'False', correct: true },
        ]
    },
    {
        question: 'The chances of developing breast cancer are higher if your mother, sister, or daughter have it or have had it',
        answers: [
            { text: 'True', correct: true },
            { text: 'False', correct: false },
        ]
    },
    {
        question: 'It is safe for women to use hormone therapy for a prolonged time during menopause',
        answers: [
            { text: 'True', correct: false },
            { text: 'False', correct: true },
        ]
    },
    {
        question: 'Regular exercise can reduce your risk for breast cancer',
        answers: [
            { text: 'True', correct: true },
            { text: 'False', correct: false },
        ]
    },
];