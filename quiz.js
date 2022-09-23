const quizForm = document.querySelector(".quiz-form");
const checkBtn = document.querySelector("#check-answer");
const output = document.querySelector("#output");

const answers = ["c", "right angled","40","85","180","both"];

checkBtn.addEventListener('click', calculateScore);

function calculateScore()   
    {
        let score = 0;
        let index = 0;
        let result = new FormData(quizForm);

        for(let value of result.values())
            {
                if(value === answers[index])
                    {
                        score = score + 1;
                    }
                index++;
            }
                if(score === 0)
                    {
                        output.innerText = "Better Luck Next Time..! \n"+"Your score is " + score;
                    }
                else
                    {
                        output.innerText = "Congratulations..! \n"+"Your score is " + score;
                    }   
         }