const form = document.querySelector("#infoProducto");

form.addEventListener("submit", e => {
    e.preventDefault();
    let errors = [];
    const errorForm = document.querySelector("#errores-form");
    const name = document.querySelector("#name");
    const descr = document.querySelector("#descr");

    if (name.value.length < 5) {
        errors.push("El nombre deberia ser más largo");
    }
    if (descr.value.length < 20) {
        errors.push("La descripción deberia ser más larga");
    }
    if (errors.length > 0) {
       errors.forEach(error => {
        errorForm.innerHTML += error;
       }); 
    }else {
        e.target.submit();
    }
});
