var btnref = document.querySelector("#btn");
var outputref = document.querySelector("#output");

btnref.addEventListener("click", clickHandler);


function clickHandler() {

    var inputdate = document.getElementById('input').value;

    var [year, month, day] = inputdate.toString().split('-');


    if (year === '' || month === '' || day === '') {
        alert("Invalid or Empty input");
    } else {
        var datepatterns = [(year + month + day), (year + day + month), (month + day + year), (month + year + day), (day + month + year), (day + year + month)];
        var nameOfPatterns = ["yyyy-mm-dd", "yyyy-dd-mm", "mm-dd-yyyy", "mm-yyyy-dd", "dd-mm-yyyy", "dd-yyyy-mm"];
        var displayPatterns = 
        [(year+"-"+month+"-"+day),
        (year+"-"+day+"-"+month),
        (month+"-"+day+"-"+year),
        (month+"-"+year+"-"+day),
        (day+"-"+month+"-"+year),
        (day+"-"+year+"-"+month)];
        var flag = 0;
        for (var i = 0; i < datepatterns.length; i++) {
            var reversed_date = reversedDate(datepatterns[i]);
            var display_reverseDate=reversedDate(displayPatterns[i]);
            var pallindromeResult = checkPallindrome(datepatterns[i], reversed_date);
            if (pallindromeResult == true && flag == 0) {

                outputref.innerText = displayPatterns[i]+ "=" + display_reverseDate + " Yay!\n\nUsing the combination: " + nameOfPatterns[i] + " your birthdate is proclaimed as Pallindrome!\nFeel free to share this with your friends!";
                flag += 1;
            } else if (pallindromeResult == true && flag > 0) {
                var para = document.createElement("p");
                var data = "Next combination for which your birthdate is Pallindrome: " + nameOfPatterns[i] + "\n"+displayPatterns[i]+ "=" + display_reverseDate;
                para.innerText = data;
                outputref.appendChild(para);
            }
        }
        if(flag==0){
            
            outputref.innerText = "Oops! Your birthdate is not a pallindrome number!\nNone of the combinations of your birthdate is pallindrome!"
        }





    }





}


function checkPallindrome(date, dateReveresed) {
    if (date === dateReveresed) {
        return true;
    } else return false;
}

function reversedDate(date) {
    date = date.split('');
    date = date.reverse();
    date = date.join('');
    return date;

}