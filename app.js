
var btnref = document.querySelector("#btn");
var outputref = document.querySelector("#output");

btnref.addEventListener("click",clickHandler);

function clickHandler(){

    var inputdate=document.getElementById('input').value;

    var[year, month, day] = inputdate.toString().split('-');

    if(year===''||month===''||day==='')
    {
        alert("Invalid or Empty input");
    }
    else
    {
        outputref.innerText = inputdate;
    }
}