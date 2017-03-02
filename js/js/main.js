
  function operacion(){
  var num1 = document.getElementById('num1').value;
  num1 = parseInt(num1);
  var num2 = document.getElementById('num2').value;
  num2 = parseInt(num2);
  var op = document.getElementById('operacion').value;
  var result;
  switch (op) {
    case "1": result = num1 + num2; break;
    case "2": result = num1 - num2; break;
    case "3": result = num1 / num2; break;
    case "4": result = num1 * num2; break;
  }
  document.getElementById("result").innerHTML = result;
}
