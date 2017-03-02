
document.getElementById("btn").onclick = function validateForm(){
 var name = document.getElementById("name").value;
 var lastname = document.getElementById("lastname").value;
	if((name == null || name.length==0) && typeof name =="string"){
    alert ("Completar nombre");
  }
  if(lastname == null || lastname.length==0){
    alert ("Completar apellidos");
  }
  //else {return true;}
  return false;
}
