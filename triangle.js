const angle = document.querySelectorAll(".angle-input");
const checkBtn = document.querySelector("#check-triangle");
const checkTriangle = document.querySelector("#check-triangle");
const output = document.querySelector("#output");

checkBtn = addEventListener('click', isTriangle);

function isTriangle()
{
    if(Number(angle[0].value)>0 && Number(angle[1].value)>0 && Number(angle[2].value)>0 )
    {
        var sumOfAngle = calSumOfAngle(Number(angle[0].value), Number(angle[1].value), Number(angle[2].value));
        if(sumOfAngle === 180)
            {
                output.innerText = "Yes,you have angles form a Triangle!"
            }
        else
            {
                output.innerText = "You don't have Triangle!";
            }
    }
}

function calSumOfAngle(angle1, angle2, angle3){
    var sum = angle1 + angle2 + angle3;
    return sum;
}