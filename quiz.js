const quizForm = document.querySelector(".quiz-form");
const checkBtn = document.querySelector("#check-answer");
const output = document.querySelector("#output");

const answers = ["90", "right angled"];

checkBtn.addEventListener('click', calculateScore);

function calculateScore(){
    let score = 0;
    let index = 0;
    let result = new FormData(quizForm);

    for(let value of result.values()){
        if(value === answers[index]){
            score = score + 1;
        }
        index = index + 1;
    }

    output.innerText = "Your score is "+score;
}