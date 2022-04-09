let navbar = document.querySelector(".navbar");
let menu = document.querySelector(".menu");

menu.onclick = () => {
    navbar.classList.toggle("active");
    menu.classList.toggle("active");

}


window.onscroll = () =>{
    navbar.classList.remove("active");
    menu.classList.remove("active");
}