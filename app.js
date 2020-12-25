
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
        dateCombinations(year,month,day);
    }
}

function checkPallindrome(date,dateReveresed){
    if(date===dateReveresed){
        return true;
    }
    else return false;
}

function reversedDate(date){
    date=date.split('');
    date=date.reverse();
    date=date.join('');
    return date;

}

function CheckPallindromeInCombinations(y,m,d){

    var datepatterns =[(y+m+d),(y+d+m),(m+d+y),(m+y+d),(d+m+y),(d+y+m)];
    //console.log(datepatterns);
    

}