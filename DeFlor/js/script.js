// formulario
var nombre = document.getElementById("nombre");
function validateForm(event){


var nombre = document.getElementById('nombre');
  if(nombre.value == "") {
    alert('Por favor, ingresá un nombre');
    nombre.focus();
    return;
  }
var telefono = document.getElementById('tel');
    if(telefono.value == "") {
    alert('Por favor, ingresá un teléfono');
    telefono.focus();
    return;
}


var email = document.getElementById('mail');
    if (email.value ===""){
  alert("Por favor, ingresá tu correo electrónico");
  email.focus();
  return ;
}

if (email.value.indexOf("@")!=-1) {
    var comprobacion = true;
}else
    var comprobacion = false;

    if (comprobacion == false){    
alert("Por favor, ingresá un correo electrónico válido");
}

return ;
}
