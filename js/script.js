// Header and Back up
const header = document.querySelector("header")
const btn_back = document.querySelector(".back")

window.onscroll = () => {
    if(window.scrollY >= 117){
        header.classList.add("active")
    }else{
        header.classList.remove("active")
    }
    if(window.scrollY >= 3500){
        btn_back.classList.add("show")
    }else{
        btn_back.classList.remove("show")
    }
}
// Back up Button
btn_back.onclick = () => {
    window.scrollTo({
    top:0,
    behavior:"smooth"
})
}

// menu Bars
const btn = document.querySelector(".btn-menu")
const link = document.querySelector(".links")
const links = document.querySelectorAll(".links a")

btn.onclick = () => {
    link.classList.toggle("active")
}
links.forEach((a) => {
    a.onclick = () => {
        link.classList.remove("active")
    }
})



    
