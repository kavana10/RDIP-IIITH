//task1

function insert(num) {
    document.form.textview.value=document.form.textview.value+num
}
function c() {
    document.form.textview.value="";
}
function equal() {
    var exp=document.form.textview.value;
    if(exp){
        document.form.textview.value=eval(exp)
        return;
    }
}
function sqrt(){
    var exp=document.form.textview.value;
    let y=Math.sqrt(exp)
    document.form.textview.value=y.toFixed(3)
    return;
}
function sabs() {
    var exp = document.form.textview.value;
    let y = Math.abs(exp)
    document.form.textview.value= y
    return false;

}

//task2

function validateForm() {
  var x = document.forms["myForm"]["fname"].value;

  var email = document.getElementById('email');
     var num = document.forms["myForm"]["phone"].value;
    
  var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  if (x == "") {
    alert("Name must be filled out");
    return false;
  }
  
  else if(!filter.test(email.value)) {
    alert('Please provide a valid email address');
    email.focus;
    return false;
  }
     else if(isNaN(num) && num.length < 10 ) {
    alert("Enter valid number");
    return false;
  }
    else{
        document.write("Submitted Successfully")
    }
       
}



//task3
function check(){
        var s = document.getElementById('check').value;
        
    if (s == "") {
        alert("String can't be blank");
        return false;
    }
        for(let i=0;i<s.length;i+=1){
            if(s[i]!==s[s.length-i-1]){
                alert(s+" : is not palindrome");
                return false;
            }
            else{
                  alert(s+" : is palindrome");
                return false;
            }
        }
    
    }
    function check2(){
        var s1 = document.getElementById('check1').value;
        var s2= document.getElementById('check2').value;
        if (s1 == "") {
        alert("String can't be blank");
        return false;
    }
        if (s2 == "") {
        alert("String can't be blank");
        return false;
    }
        var sortStr1 = s1.split('').sort().join('');
    var sortStr2 = s2.split('').sort().join('');
        if(sortStr1 === sortStr2){
            alert("Anagram");
            return false;
        }
        else{
            alert("not anagram");
            return false;
        }
        
    }






//task4


function game() {
    {
        
        var obj1 = Math.floor(Math.random() * 999);
        var obj2 =Math.floor(Math.random() * 999);
        let obj = {
            "0": " Human ",
            "1": " Cockroch ",
            "2": " Nuclear Bomb "
        };
        nobj1 = eval(obj1) % 3;
        nobj2 = eval(obj2) % 3;
        var a = "";
        if (nobj1 == 0) {
            a = "HUMAN"
        } else if (nobj1 == 1) {
            a = "COCKROCH"
        } else {
            a = "Nuclear Bomb"
        }
        var b = "";
        if (nobj2 == 0) {
            b = "HUMAN"
        } else if (nobj2 == 1) {
            b = "COCKROCH"
        } else {
            b = "Nuclear Bomb"
        }
       
          var str = "Player 1 = " + a + "  <br> Player 2 = "+ b +" "
            
        document.getElementById('num').innerHTML = str
        

        if (nobj1 == nobj2) {
             document.getElementById('i').innerHTML="TIE"
            return false;
            
        }
        if ((nobj1 == 0 && nobj2 == 1) || (nobj1 == 1 && nobj2 == 0)) {
            document.getElementById('i').innerHTML = "HUMAN SURVIVES"
            return false;
            
            
        } else if ((nobj1 == 0 && nobj2 == 2) || (nobj1 == 2 && nobj2 == 0)){
            document.getElementById('i').innerHTML = "HUMAN DIES"
            return false;
        }
        else if ((nobj1 == 1 && nobj2 == 2) || (nobj1 == 2 && nobj2 == 1)){
            document.getElementById('i').innerHTML = "COCKROCH SURVIVES"
        return false;

        }
    }
}