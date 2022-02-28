let menu = document.querySelector('#menu-btn')
let aside = document.querySelector('.aside')

menu.onclick = () =>{
    aside.classList.toggle('active')
    console.log("oi")
}