function EnviarContacto(){
    let correo = document.getElementById("correo")
    let nombre = document.getElementById('nombre')
    let mensaje = document.getElementById('Mensaje')

    let verNombre = confirmacion("nombre",nombre.value);
    let verCorreo = confirmacion("correo",correo.value);
    let verMensaje = confirmacion("Mensaje",mensaje.value);

    if (verNombre == 1 && verCorreo == 1 && verMensaje == 1 ){
        alert("Mensaje enviado")
    }

    function confirmacion(atributo, valor){
    if(validarCampos(valor) == 1){
        return 1;
    }else{
        alert('El campo ${atributo} está vacío')
        return 0;
    }
    }

    function validarCampos(texto){
    if(texto.trim() == "" ){
        return 0;
    }else{
        return 1;
    }
}
}

