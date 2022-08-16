const openMenu = document.querySelector(".ri-menu-line")
const closeMenu = document.querySelector(".ri-close-circle-line")
const navControl = document.querySelector(".navlinks")

openMenu.addEventListener("click",function(){
    navControl.style.top = "180px"
    closeMenu.style.display = "block"
    openMenu.style.display = "none"
})

closeMenu.addEventListener("click",function(){
    navControl.style.top = "-180px"
    openMenu.style.display = "block"
    closeMenu.style.display = "none"
})