const form = document.querySelector("form");

form.addEventListener("submit", e => {
    e.preventDefault();
    let errors = [];
    const errorForm = document.querySelector("#errores-form");
    const email = document.querySelector("#email");
    const password = document.querySelector("#password");
    const regexEmail = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
    const regexPassword = /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/
    if (!regexEmail.test(email.value)) {
        errors.push("Tenes que agregar mas caracteres");
    }
    if (!regexPassword.test(password.value) && password.value.length >= 8) {
        errors.push("Tenes que agregar mas caracteres");
    }
    if (errors.length > 0) {
       errors.forEach(error => {
        errorForm.innerHTML = error;
       }); //"mmm dice Edu :D" //"22/9/2021 Roman la esta rompinedo con js"  
    }
});

// el crud de usuario esta puesto para que se guarde el create de usuario, onda se guarda el repetir contraseña. :D 