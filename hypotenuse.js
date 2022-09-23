const inputSide = document.querySelectorAll(".sides");
const checkBtn = document.querySelector("#check-hypotenuse");
const output = document.querySelector("#output");

checkBtn.addEventListener('click', calculateHypotenuse)

function calculateHypotenuse()
    {
        if(Number(inputSide[0].value)<=0 || Number(inputSide[1].value)<=0)
            {
                output.innerText = "Side length must be Positive Integer";
            }
        else
            {
                let sumOfSquareOfSides = calSumOfSquareOfSides(Number(inputSide[0].value), Number(inputSide[1].value));
                let hypotenuse = Math.sqrt(sumOfSquareOfSides);
                output.innerText = "The length of Hypotenuse is "+hypotenuse.toFixed(2);
            }
    }

function calSumOfSquareOfSides(a,b)
    {
        var sum = a*a + b*b
        return sum;
    }