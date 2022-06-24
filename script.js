 
 const operator = prompt('Enter operator calculation ( either +, -, *, / or ** ): ');  
 const num1 = parseFloat(prompt ('Enter the first number: '));  
 const num2 = parseFloat(prompt ('Enter the second number: '));  
  
let result;  
  
 
if (operator == '+') {   
    result = num1 + num2;  
}  
else if (operator == '-') { 
    result = num1 - num2;  
}  
else if (operator == '*') { 
    result = num1 * num2;  
}  
else if   (operator == '/') {
    result = num1 / num2; 
}  
else if   (operator == '**') {
    result = num1 ** num2; 
}

else ( result = invalid);
   

  
 
window.alert(" Result is" + result); 
