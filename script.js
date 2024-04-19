const questions = [
    {
        question: "What is HTML",
        answers:[
            { text: "HyperText Markup Language", correct: true },
            { text: "Highly Typed Markup Language", correct: false },
            { text: "Home Tool Markup Language", correct: false },
            { text: "Hyperlink and Text Markup Language", correct: false },
        ]
    },
    {
        question: "What is the purpose of the DOCTYPE declaration in HTML?",
        answers:[
            { text: "To declare the document type and version of HTML used", correct: true },
            { text: "To define the document layout", correct: false },
            { text: "To create hyperlinks", correct: false },
            { text: "To specify the document title", correct: false },
        ]
    },
    {
        question: "What are the new features introduced in HTML5 compared to HTML4?",
        answers:[
            { text: "New semantic elements like <header>, <footer>, <nav>, etc.", correct: true },
            { text: "Support for multimedia elements like <video> and <audio>", correct: true },
            { text: "New APIs like Canvas, Local Storage, and Web Workers", correct: true },
            { text: "Introduction of new text formatting tags", correct: false },
        ]
    },
    {
        question: "What are semantic elements in HTML",
        answers:[
            { text: "Elements that convey meaning beyond their presentation", correct: true },
{ text: "Elements with no specific meaning", correct: false },
{ text: "Elements used for styling only", correct: false },
{ text: "Elements that are no longer supported in HTML5", correct: false },
        ]
    },
    {
        question: "What is the purpose of the <meta> tag in HTML?",
        answers:[
            { text: "To provide metadata about the HTML document", correct: true },
{ text: "To create hyperlinks", correct: false },
{ text: "To define the structure of the document", correct: false },
{ text: "To specify the character encoding of the document", correct: false },
        ]
    },
    {
        question: "What is the difference between <div> and <span> elements in HTML?",
        answers:[
            { text: "<div> is a block-level element, while <span> is an inline element", correct: true },
{ text: "<div> is used for grouping inline elements, while <span> is used for grouping block-level elements", correct: false },
{ text: "<div> is used for text formatting, while <span> is used for layout design", correct: false },
{ text: "<div> is used for navigation, while <span> is used for content structure", correct: false },
        ]
    },
    {
        question: "Explain the purpose of the alt attribute in the <img> element",
        answers:[
            { text: "To provide alternative text for screen readers and when the image cannot be displayed", correct: true },
{ text: "To specify the alignment of the image", correct: false },
{ text: "To define the alternative image source", correct: false },
{ text: "To set the image border color", correct: false },
        ]
    },
    {
        question: "What is the purpose of the <form> element in HTML?",
        answers:[
            { text: "To create a container for form elements", correct: true },
{ text: "To define the structure of the document", correct: false },
{ text: "To specify the document title", correct: false },
{ text: "To create hyperlinks", correct: false },
        ]
    },
    {
        question: "What is the difference between <ol> and <ul> elements in HTML?",
        answers:[
            { text: "<ol> represents an ordered list with numbers or letters, while <ul> represents an unordered list with bullets", correct: true },
{ text: "<ol> represents an unordered list with bullets, while <ul> represents an ordered list with numbers or letters", correct: false },
{ text: "<ol> is used for grouping inline elements, while <ul> is used for grouping block-level elements", correct: false },
{ text: "<ol> is used for navigation, while <ul> is used for content structure", correct: false },
        ]
    },
    {
        question: "What is the purpose of the <a> element in HTML?",
        answers:[
            { text: "To create hyperlinks", correct: true },
{ text: "To define the document layout", correct: false },
{ text: "To specify the document title", correct: false },
{ text: "To provide metadata about the HTML document", correct: false },
        ]
    },


    
];
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
let currentQuestionIndex = 0;
let score =0;
function startQuiz(){
    currentQuestionIndex =0;
    score =0;
    nextButton.innerHTML ="Next";
    showQuestion();
}
function showQuestion(){
    reserState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + " ." + currentQuestion. question;
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click",selectAnswer);
    });
}

function reserState(){
nextButton.style.display = "none";
while(answerButtons.firstChild){
    answerButtons.removeChild(answerButtons.firstChild);
}
};
function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct==="true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button =>{
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = "true";
    });
    nextButton.style.display ="block";
}
function showScore(){
    reserState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}`;
    nextButton.innerHTML ="Play Again";
    nextButton.style.display = "block";
}
function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    } else {
        showScore();
    }
}
nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();

    }else{
        startQuiz();
    }
})
startQuiz();
