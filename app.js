var btnref = document.querySelector("#btn");
var outputref = document.querySelector("#output");
var op2ref = document.querySelector("#op2");
btnref.addEventListener("click", clickHandler);


function clickHandler() {

    var inputdate = document.getElementById('input').value;
    //console.log(inputdate);
    var [year, month, day] = inputdate.toString().split('-');
console.log(year,month,day);
var ndate=false;
    if (year === '' || month === '' || day === '') {
        alert("Invalid or Empty input");
    } 
    else 
    {
        
        var pallinResult=checkPallinInAllCombinations(year,month,day,ndate);       
    }
    if (pallinResult == false) {
        //outputref.innerText = "Oops! Your birthdate is not a pallindrome number!";
        ndate=true;
         var user_ip_date=new Date(inputdate);
         var next_dt =new Date(user_ip_date);
         var check_n_pallin=false;
         op2ref.innerText = "Oops! Your birthdate is not a pallindrome number!\n";
         
         while(check_n_pallin==false) { 
         next_dt.setDate(next_dt.getDate()+1);
         console.log(next_dt);
         var n_year=next_dt.getFullYear();
         var n_month=next_dt.getMonth()+1; //because months are indexed from 0-11
         var n_day=next_dt.getDate();
         console.log("n_year:"+n_year+"n_month: "+n_month+"n_day"+n_day);
         check_n_pallin=checkPallinInAllCombinations(n_year,n_month,n_day,ndate);
            

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

function checkPallinInAllCombinations(year, month, day,ndate) {

    var datepatterns = [(year.toString() + month.toString() + day.toString()), (year.toString() + day.toString() + month.toString()), (month.toString() + day.toString() + year.toString()), (month.toString() + year.toString() + day.toString()), (day.toString() + month.toString() + year.toString()), (day.toString() + year.toString() + month.toString())]
    console.log("datepatterns: "+datepatterns);
    var nameOfPatterns = ["yyyy-mm-dd", "yyyy-dd-mm", "mm-dd-yyyy", "mm-yyyy-dd", "dd-mm-yyyy", "dd-yyyy-mm"];
    var displayPatterns = [(year + "-" + month + "-" + day), (year + "-" + day + "-" + month), (month + "-" + day + "-" + year), (month + "-" + year + "-" + day), (day + "-" + month + "-" + year), (day + "-" + year + "-" + month)];
    var flag = 0;
    for (var i = 0; i < datepatterns.length; i++) {
        var reversed_date = reversedDate(datepatterns[i]);
        var display_reverseDate = reversedDate(displayPatterns[i]);
        var pallindromeResult = checkPallindrome(datepatterns[i], reversed_date);
        if (pallindromeResult == true && flag == 0) {
            if(ndate==false){
            outputref.innerText = displayPatterns[i] + "=" + display_reverseDate + " Yay!\n\nUsing the combination: " + nameOfPatterns[i] + " your birthdate is proclaimed as Pallindrome!\nFeel free to share this with your friends!";
            flag += 1;
            }
            else {
                outputref.innerText = displayPatterns[i] + "=" + display_reverseDate + " Yay!\n\nUsing the combination: " + nameOfPatterns[i] + " the next nearest date is Pallindrome!";
            flag += 1;
            }
        } else if (pallindromeResult == true && flag > 0) {
            var para = document.createElement("p");
            if(ndate==false){
            var data = "Next combination for which your birthdate is Pallindrome: " + nameOfPatterns[i] + "\n" + displayPatterns[i] + "=" + display_reverseDate;
            } else{
                var data = "Next combination for which the nearest date is Pallindrome: " + nameOfPatterns[i] + "\n" + displayPatterns[i] + "=" + display_reverseDate;
            }
            para.innerText = data;
            outputref.appendChild(para);
        
        }

    }
    if (flag == 0) {
        return false;
    } else return true;
}