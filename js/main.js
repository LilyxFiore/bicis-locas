function validateForm(){
  var name = document.getElementById("name").value;
  var lastname = document.getElementById("lastname").value;
  var sel = document.getElementById('bici');

  /** Validacion para nombre**/
  if(name.length==0 || /^\s+|\s+$/.test(name)){
    alert ("Ingrese nombre"); return false;
  }
  else if (/[0-9]/.test(name)){
    alert("Debe contener solo letras"); return false;
  }
  else if (!(/[^a-z]+([a-z]{1,})/.test(name))){
    alert("Empezar el nombre con mayúscula"); return false;
  }

  /** Validacion para apellido**/
  if(lastname.length==0 || /^\s+|\s+$/.test(lastname)){
    alert ("Ingrese apellido"); return false;
  }
  else if (/[0-9]/.test(lastname)){
    alert("Debe contener solo letras"); return false;
  }
  else if (!(/[^a-z]+([a-z]{1,})/.test(lastname))){
    alert("Empezar el apellido con mayúscula"); return false;
  }

  /** Validacion para password**/
  var correo = document.getElementById("input-email").value;
  if(correo.length==0 || /^\s+|\s+$/.test(correo)){
    alert ("Ingrese correo"); return false;
  }
  else if (!(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+(\w{2,4})+$/.test(correo))) {
    alert ("Correo no válido. El correo de tener la siguiente estructura correo@dominio.com"); return false;
  }

  /** Validacion para clave**/
  var clave = document.getElementById("input-password").value;
  if(clave.length==0 || /^\s+|\s+$/.test(clave)){
    alert ("Completar contraseña");return false;
  }
  else if (clave.length<6) {
    alert ("Contraseña mínimo 6 carácteres"); return false;
  }
  else if(clave == "123456"){
    alert("La contraseña debe ser diferente de 123456"); return false;
  }
  else if(clave == "098754"){
    alert("La contraseña debe ser diferente de 098754"); return false;
  }

  /* Validacion para el select*/
  var op = sel.options[sel.selectedIndex].text;
  if(sel.value == 0){
    alert("Eliga una opción"); return false;
  }
  return alert("Usted ha sido registrado");
}
