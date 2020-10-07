function submit(){

    
 var Q = parseInt(document.getElementById('Quizes').value )
 var M = parseInt(document.getElementById('Midterm').value )
 var F = parseInt(document.getElementById('FinalTest').value )
 var O = parseInt(document.getElementById('Oral').value )


let result = Q+M+F+O;

document.getElementById("total_grades").innerHTML= result; 

if (result>=90 && result<=100) {
    document.getElementById("final_grade").innerHTML = "a";
  }
  else if (result>=80 && result<=95) {
    document.getElementById("final_grade").innerHTML = "b";
  }
  else if (result>=70 && result<=79) {
    document.getElementById("final_grade").innerHTML = "c";
  }
  else if (result>=60 && result<=69) {
    document.getElementById("final_grade").innerHTML = "d";
  }
  else if (result<59) {
    document.getElementById("final_grade").innerHTML = "f";
  }

} 