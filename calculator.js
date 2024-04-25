const input = document.getElementById("input");
const buttons = document.querySelectorAll("button");
const resultElement = document.getElementById("result");

for(let i =0; i<buttons.length; i++){
    buttons[i].addEventListener("click", () =>
    {
        const buttonValue = buttons[i].textContent;
        if(buttonValue === "AC")
        {
            clearResult();
        }
        else if(buttonValue === "=")
        {
            calculateResult();
        }
        else
        {
            appendValue(buttonValue);
        }
    });
}

function clearResult()
{
    resultElement.textContent="";
}

function calculateResult()
{
    let expresstion = resultElement.textContent;
    expresstion= expresstion.replace(/÷/g,'/').replace(/×/g,'*');
    const result = eval(expresstion);
    resultElement.textContent =result;
}

function appendValue(buttonValue)
{
    resultElement.textContent += buttonValue;
}