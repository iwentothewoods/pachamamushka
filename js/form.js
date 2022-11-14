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
    

    if (nombre.value.trim() == "") {
        nombreError.innerHTML = "Nombre inválido";
        nombre.classList.add("error");
        sinError = false;
    }
    if (correo.value.trim() == "") {
        correoError.innerHTML = "Correo electrónico inválido";
        correo.classList.add("error");
        sinError = false;
    }
    if (telefono.value.trim() == "") {
        telError.innerHTML = "Teléfono inválido";
        telefono.classList.add("error");
        sinError = false;
    }
    if (consulta.value.trim() == "") {
        consultaError.innerHTML = "Consulta inválida";
        consulta.classList.add("error");
        sinError = false;
    }

    if (sinError) {
        let item = document.createElement("li");
        listaMensajes.appendChild(item);
        alert("Su consulta ha sido enviada exitosamente")
        // item.innerHTML = nombre.value + " dice " + consulta.value;
        document.forms[0].reset();
    }

    return false;
}