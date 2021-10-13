window.addEventListener("scroll", e => {
    const scroll = document.scrollingElement.scrollTop;
    const header = document.querySelector(".header");
    const mainMenu = document.querySelector("#header");
    if (scroll >= 60) {
        header.classList.add("headerTransparent");
    }
    else{
        header.classList.remove("headerTransparent");
    }
    console.clear();
})