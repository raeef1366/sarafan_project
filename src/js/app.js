const burgermenu = document.querySelector(".list-menu");
const closemenu = document.querySelector(".close_menu");

const opennav = document.querySelector(".open_items");

if(burgermenu) {
    burgermenu.addEventListener("click", () =>{
        console.log("ok");
        opennav.style.left = "0"
        closemenu.style.display = "block"
        burgermenu.style.display = "none"
    })
}

if(closemenu) {
    closemenu.addEventListener("click", () =>{
        opennav.style.left = "-500%"
        closemenu.style.display = "none"
        burgermenu.style.display = "flex"
    })
}