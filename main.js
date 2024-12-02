
const list = document.querySelector(".list")

document.body.addEventListener("click" , (e) => {
    if(e.target.classList.contains("toggle-menu")){
        list.classList.toggle("show");
    } else if (!e.target.classList.contains("toggle-menu") || e.target.classList.contains("show")) {
        list.classList.remove("show")
    }

})

