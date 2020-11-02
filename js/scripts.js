//Calculate BMI for user data & change the color of the table.
function getBMI(){
  var kg = document.querySelector('#user-kg').value;
  var cm = document.querySelector('#user-cm').value;
  
  //Will not let user insert numbers <0.
  if (kg <=0 || cm <=0){
    window.alert ("Please insert values higher than 0.");
  } else {
    var bmi = (kg/(cm*cm))*10000;
    var calc = document.getElementById('user-bmi').innerHTML = Math.round(bmi*100)/100;
  }
  
  //Change the color of the table depending on the BMI results.
  if (calc < 18.5){
      document.querySelector('#underweight').style.backgroundColor="red";
    } else if(calc>=18.5 && calc<24.9){
      document.querySelector('#healthy-weight').style.backgroundColor="green";
    } else if(calc>=24.9 && calc<29.9){                     
      document.querySelector('#overweight').style.backgroundColor="yellow";
    } else if(calc>=29.9 && calc<34.9){
      document.querySelector('#obese').style.backgroundColor="orange";
    }else if(calc>=34.9 && calc<39.9){
      document.querySelector('#severely-obese').style.backgroundColor="red";
    }else if(calc>=39.9){
      document.querySelector('#morbidly-obese').style.backgroundColor="purple";
    }
  }
  
  
// Reset properties: input fields, bmi result and table background color.
function reset(){
  // Reset properties by setting them to an empty string.
  document.getElementById('user-kg').value = '';
  document.getElementById('user-cm').value = '';
  
  //Reset bmi result
  document.querySelector('#user-bmi').innerHTML="...";

  //Reset background color for table
  document.querySelector('#underweight').style.backgroundColor="";
  document.querySelector('#healthy-weight').style.backgroundColor="";
  document.querySelector('#overweight').style.backgroundColor="";
  document.querySelector('#obese').style.backgroundColor="";
  document.querySelector('#severely-obese').style.backgroundColor="";
  document.querySelector('#morbidly-obese').style.backgroundColor="";
}