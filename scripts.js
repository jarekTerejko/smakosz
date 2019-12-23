const menuToggle = document.querySelector(".menu-toggle")

const bars = document.querySelector(".fa-bars")

const navList = document.querySelector(".nav-list")


const links = document.querySelectorAll('.nav-list .nav-link')
console.log(links)

links.forEach(link=> {
    link.addEventListener('click', ()=> {
        if(bars.classList.contains('fa-bars')) {
            bars.classList.remove("fa-bars")
            bars.classList.add("fa-times")
        } else {
            bars.classList.remove("fa-times")
            bars.classList.add("fa-bars")
        }
        navList.classList.toggle("open")

    })
})

menuToggle.addEventListener("click", ()=> {
    if(bars.classList.contains('fa-bars')) {
        bars.classList.remove("fa-bars")
        bars.classList.add("fa-times")
    } else {
        bars.classList.remove("fa-times")
        bars.classList.add("fa-bars")
    }
    
    navList.classList.toggle("open")
})