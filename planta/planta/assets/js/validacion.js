function Validar(){
    let correo = document.getElementById("email")
    let contraseña = document.getElementById("password")

    let verCorreo = confirmacion("correo",correo.value);
    let verContraseña = confirmacion("contraseña",contraseña.value);

    if (verCorreo == 1 && verContraseña == 1){
        alert("Datos correctos")
    }

    function confirmacion(atributo, valor){
    if(validarCampos(valor) == 1){
        return 1;
    }else{
        alert(`El campo ${atributo} está vacío`)
        return 0;
    }
    }

}

function ValidarRegister(){
    let correo = document.getElementById("email")
    let contraseña = document.getElementById("password")
    let confcontra = document.getElementById("password")
    let fullname = document.getElementById("Name")


    let verCorreo = confirmacion("correo",correo.value);
    let verContraseña = confirmacion("contraseña",contraseña.value);
    let verconfcontra = confirmacion("contraseña",confcontra.value)
    let vername = confirmacion("nombre completo", fullname.value)

    if (verCorreo == 1 && verContraseña == 1 && verconfcontra == 1 && vername == 1){
        alert("Datos correctos")
    }

    function confirmacion(atributo, valor){
    if(validarCampos(valor) == 1){
        return 1;
    }else{
        alert(`El campo ${atributo} está vacío`)
        return 0;
    }
    }

}
function validarCampos(texto){
    if(texto.trim() == "" ){
        return 0;
    }else{
        return 1;
    }
}





