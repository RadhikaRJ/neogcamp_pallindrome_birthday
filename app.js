var btnref = document.querySelector("#btn");
var outputref = document.querySelector("#output");
var op2ref = document.querySelector("#op2");
var op1ref = document.querySelector("#op1");
btnref.addEventListener("click", clickHandler);


function clickHandler() {
   
    var inputdate = document.getElementById('input').value;

    var [year, month, day] = inputdate.toString().split('-');
    console.log(year, month, day);
    var ndate = false;
    if (year === '' || month === '' || day === '') {
        alert("Invalid or Empty input");
    } else {
        
       
        var pallinResult = checkPallinInAllCombinations(year, month, day, ndate);
    }
    if (pallinResult == false) {
       
        ndate = true;
        var user_ip_date = new Date(inputdate);
        var next_dt = new Date(user_ip_date);
        var check_n_pallin = false;
        op2ref.innerText = "Oops! Your Birthdate is not Palindrome!\n";

        while (check_n_pallin == false) {
            next_dt.setDate(next_dt.getDate() + 1);
            console.log(next_dt);
            var n_year = next_dt.getFullYear();
            var n_month = next_dt.getMonth() + 1; //because months are indexed from 0-11
            var n_day = next_dt.getDate();
            console.log("n_year:" + n_year + "n_month: " + n_month + "n_day" + n_day);
            check_n_pallin = checkPallinInAllCombinations(n_year, n_month, n_day, ndate);


        }
        var diff_birthdate_nextdt = calculateDifference(user_ip_date,next_dt);
        op1ref.innerText = "Your Birthdate is "+ diff_birthdate_nextdt+ " days away from the next Palindrome date.";



    }
}

function mytimeoutFunction(){
    console.log("Appeared after timeout");
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

function checkPallinInAllCombinations(year, month, day, ndate) {

    var datepatterns = [(year.toString() + month.toString() + day.toString()), (year.toString() + day.toString() + month.toString()), (month.toString() + day.toString() + year.toString()), (month.toString() + year.toString() + day.toString()), (day.toString() + month.toString() + year.toString()), (day.toString() + year.toString() + month.toString())]
    console.log("datepatterns: " + datepatterns);
    var nameOfPatterns = ["yyyy-mm-dd", "yyyy-dd-mm", "mm-dd-yyyy", "mm-yyyy-dd", "dd-mm-yyyy", "dd-yyyy-mm"];
    var displayPatterns = [(year + "-" + month + "-" + day), (year + "-" + day + "-" + month), (month + "-" + day + "-" + year), (month + "-" + year + "-" + day), (day + "-" + month + "-" + year), (day + "-" + year + "-" + month)];
    var flag = 0;
    for (var i = 0; i < datepatterns.length; i++) {
        var reversed_date = reversedDate(datepatterns[i]);
        var display_reverseDate = reversedDate(displayPatterns[i]);
        var pallindromeResult = checkPallindrome(datepatterns[i], reversed_date);
        
        if (pallindromeResult == true && flag == 0) {
            if (ndate == false) {
                outputref.innerText = displayPatterns[i] + "=" + display_reverseDate + " Yay!\n\nUsing the combination: " + nameOfPatterns[i] + " your Birthdate is proclaimed as Palindrome!\nFeel free to share this with your friends!";
                flag += 1;
            } else {
                outputref.innerText = "Using the combination: " + nameOfPatterns[i] + " the next nearest date: "+displayPatterns[i]+" is Palindrome!";
                flag += 1;
            }
        } else if (pallindromeResult == true && flag > 0) {
            var para = document.createElement("p");
            if (ndate == false) {
                var data = "Next combination for which your Birthdate is Palindrome: " + nameOfPatterns[i] + "\n" + displayPatterns[i] + "=" + display_reverseDate;
            } else {
                var data = "Next combination for which the nearest date is Palindrome: " + nameOfPatterns[i] + "\n" + displayPatterns[i] + "=" + display_reverseDate;
            }
            para.innerText = data;
            outputref.appendChild(para);

        }

    }
    if (flag == 0) {
        return false;
    } else return true;
}

function calculateDifference(date1,date2){
    var one_day=1000*60*60*24; //converting 1 millisecond to 1 day

    //converting both dates into milliseconds
    var date1_ms=date1.getTime();
    var date2_ms=date2.getTime();

    //calculat difference in milliseconds
    var ms_diff = date2_ms-date1_ms;

    //convert difference to dates
    var diff_days=Math.round(ms_diff/one_day);

    return diff_days;

}