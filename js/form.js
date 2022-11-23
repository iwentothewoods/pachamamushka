function validar() {
    let sinError = true;
    let nombre = document.getElementById("nombre");
    let correo = document.getElementById("correo");
    let telefono = document.getElementById("telefono");
    let consulta = document.getElementById("consulta");
    let listaMensajes = document.getElementById("listaMensajes");
    
    nombre.classList.remove("error");
    correo.classList.remove("error");
    telefono.classList.remove("error");
    consulta.classList.remove("error");

    nombreError.innerHTML = "";
    correoError.innerHTML = "";
    telError.innerHTML = "";
    consultaError.innerHTML = "";
    listaMensajes.innerHTML = "";

    let pat_mail = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;

    if (nombre.value.trim() == "") {
        nombreError.innerHTML = "Nombre inválido: Debe completar este campo.";
        nombre.classList.add("error");
        sinError = false;
    }
    if (correo.value.trim() == "") {
        correoError.innerHTML = "Correo inválido: Debe completar este campo.";
        correo.classList.add("error");
        sinError = false;
    } else if(!pat_mail.test(correo.value.trim())){
        correoError.innerHTML = "Correo inválido.";
        correo.classList.add("error");
        sinError = false;
    }

    if (telefono.value.trim() == "") {
        telError.innerHTML = "Teléfono inválido: Debe completar este campo.";
        telefono.classList.add("error");
        sinError = false;
    } else if(!telefono.value.match(/[0-9]/)){
        telError.innerHTML = "Teléfono inválido: Solo se aceptan números en este campo.";
        telefono.classList.add("error");
        sinError = false;
    } else if(telefono.value.toString().length > 15){
        telError.innerHTML = "Teléfono inválido: Número muy largo.";
        telefono.classList.add("error");
        sinError = false;
    } else if(telefono.value.toString().length < 8){
        telError.innerHTML = "Teléfono inválido: Número muy corto.";
        telefono.classList.add("error");
        sinError = false;

    if (consulta.value.trim() == "") {
        consultaError.innerHTML = "Consulta inválida: Debe completar este campo";
        consulta.classList.add("error");
        sinError = false;
    }

    if (sinError) {
        listaMensajes.style.display = "block";
        alert("Su consulta ha sido enviada exitosamente")
        let nombreitem = document.createElement("li");
        let correoitem = document.createElement("li");
        let telitem = document.createElement("li");
        let consultaitem = document.createElement("li");

        listaMensajes.appendChild(nombreitem);
        listaMensajes.appendChild(correoitem);
        listaMensajes.appendChild(telitem);
        listaMensajes.appendChild(consultaitem);

        nombreitem.innerHTML = "Nombre: " + nombre.value;
        correoitem.innerHTML = "Correo Electrónico: " + correo.value;
        telitem.innerHTML = "Teléfono: " + telefono.value;
        consultaitem.innerHTML = "Mensaje: " + consulta.value;
        document.forms[0].reset();
    } else {
        listaMensajes.style.display = "none";
    }

    return false;
}