function validateForm(){
  validateName();
}

function validateName(){
  var name = document.getElementById("name").value;
  if(name.length==0 || /^\s+|\s+$/.test(name)){
    alert ("Completar nombre");
  }
  else if (/[0-9]/.test(name)){
    alert("Solo letras");
  }
  else if (!(/[^a-z]+([a-z]{1,})/.test(name))){
    alert("Empezar con mayúscula el nombre");
  }
  else{
    validateLastName();
  }
}

function validateLastName(){
  var lastname = document.getElementById("lastname").value;
  if(lastname.length==0 || /^\s+|\s+$/.test(lastname)){
    alert ("Completar apellido");
  }
  else if (/[0-9]/.test(lastname)){
    alert("Solo letras");
  }
  else if (!(/[^a-z]+([a-z]{1,})/.test(lastname))){
    alert("Empezar con mayúscula el apellido");
  }
  else{
    validateEmail();
  }
}

function validateEmail(){
  var correo = document.getElementById("input-email").value;
  if(correo.length==0 || /^\s+|\s+$/.test(correo)){
    alert ("Completar correo");
  }
  else if (!(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+(\w{2,4})+$/.test(correo))) {
    alert ("Correo no válido");
  }
  else {
    validatePassword();
  }
}

function validatePassword(){
  var clave = document.getElementById("input-password").value;
  if(clave.length==0 || /^\s+|\s+$/.test(clave)){
    alert ("Completar contraseña");
  }
  else if (clave.length<6) {
    alert ("Contraseña mínimo 6 carácteres");
  }
  else if(clave == "123456"){
    alert("La contraseña debe ser diferente de 123456")
  }
  else if(clave == "098754"){
    alert("La contraseña debe ser diferente de 098754")
  }
  else {
    validateSelection();
  }
}

function validateSelection(){
  var sel = document.getElementById('bici');
  var op = sel.options[sel.selectedIndex].text;
  if(sel.value == 0){
    alert("Eliga una opción");}
  else {
    alert ("Usted a elegido: "+ op);
  }
}
