function getBMI(){
    var kg = document.querySelector('#user-kg').value;
    var cm = document.querySelector('#user-cm').value;
    
    var bmi = (kg/(cm*cm))*10000;
   var calc = document.getElementById("change").innerHTML = Math.round(bmi*100)/100;
    
    if (calc < 18.5){
   document.querySelector("#underweight").style.backgroundColor="red";
    } else if(calc>=18.5 && calc<24.9){
      document.querySelector("#healthy-weight").style.backgroundColor="green";
    } else if(calc>=24.9 && calc<29.9){                     document.querySelector("#overweight").style.backgroundColor="yellow";
    } else if(calc>=29.9 && calc<34.9){
      document.querySelector("#obese").style.backgroundColor="orange";
    }else if(calc>=34.9 && calc<39.9){
      document.querySelector("#severely-obese").style.backgroundColor="red";
    }else if(calc>=39.9){
      document.querySelector("#morbidly-obese").style.backgroundColor="purple";
    }
  }
  
   
  function reset(){
     document.querySelector("#underweight").style.backgroundColor="rgb(232, 228, 247)";
     document.querySelector("#healthy-weight").style.backgroundColor="rgb(232, 228, 247)";
     document.querySelector("#overweight").style.backgroundColor="rgb(232, 228, 247)";
     document.querySelector("#obese").style.backgroundColor="rgb(232, 228, 247)";
     document.querySelector("#severely-obese").style.backgroundColor="rgb(232, 228, 247)";
     document.querySelector("#morbidly-obese").style.backgroundColor="rgb(232, 228, 247)";
  }