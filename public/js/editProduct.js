const form = document.querySelector("#infoProducto");

form.addEventListener("submit", e => {

    let errors = [];
    const errorForm = document.querySelector("#errores-form");
    const name = document.querySelector("#name");
    const descr = document.querySelector("#descr");
    const image = document.querySelector("input[name='image']");
    
    if (name.value.length < 5) {
        errors.push("El nombre deberia ser mas largo");
    }
    
    if (descr.value.length < 20) {
        errors.push("La descripción deberia ser mas largo");
    }

    if (image.files.length <= 0) {
        errors.push("Deberias cargar al menos una imagen");
    }

    if (errors.length > 0) {
        e.preventDefault();
        errorForm.innerHTML = null;
        errors.forEach(error => {
        errorForm.innerHTML += `<p>${error}</p>`;
        }); 
    }
});
