const burger = (open) => {
    const menu = document.querySelector("header nav")
    if(open){
        menu.classList.add('active')
        menu.style.animationName = "open"
    }
    else{
        menu.style.animationName = "close"
        setTimeout(() =>{
            menu.classList.remove('active')
            menu.style.animationName = ''
        },400)
    }
}