const input = document.querySelectorAll(".sides");
const checkBtn = document.querySelector("#check-area");
const output = document.querySelector("#output");

checkBtn.addEventListener('click', calculateArea);

function calculateArea(){
    let base = (Number(input[0].value));
    let height = (Number(input[1].value));
    let area = (1/2)*(base*height);
    output.innerText="The area of Triangle is "+area.toFixed(2);
}