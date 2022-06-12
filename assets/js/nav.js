var sideNav = document.getElementById("sideNav")
var menu = document.getElementById("menu")
sideNav.style.right = "-300px";

document.getElementById("menuBtn").addEventListener("click", (e)=>{
    if (sideNav.style.right == "-300px") {
        sideNav.style.right = "0";
        menu.src = "https://i.postimg.cc/cJRss6PP/close.png";
    } else {
        sideNav.style.right = "-300px";
        menu.src = "https://i.postimg.cc/j5RRCtb2/menu.png";
    }
})