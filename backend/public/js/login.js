const form = document.querySelector("#userLogin");

form.addEventListener("submit", e => {
    e.preventDefault();
    let errors = [];
    const errorForm = document.querySelector("#errores-form");
    const usuario = document.querySelector("#usuario");
    const password = document.querySelector("#password");
    const regexEmail = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
    const regexPassword = /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/
    if (usuario.value.length < 2) {
        errors.push("Tenes que agregar más caracteres");
    }
    if (!regexPassword.test(password.value)) {
        errors.push("Tu contraseña debe tener al menos una mayus y un caracter especial");
    }
    if (errors.length > 0) {
        errorForm.innerHTML = null;
        errors.forEach(error => {
        errorForm.innerHTML += `<p>${error}</p>`;
       }); 
    }else {
        e.target.submit();
    }
});
