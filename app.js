const bar = document.getElementById("bar")
const ulel = document.getElementById("ul")
const body = document.getElementById("about")
let content = document.querySelector("#hider")

bar.addEventListener("click",()=>{
    ulel.classList.toggle("show")const bar = document.getElementById("bar")
const ulel = document.getElementById("ul")
const body = document.getElementById("about")
const fullBody = document.querySelector("body")
let content = document.querySelector(".hider")

bar.addEventListener("click",()=>{
    ulel.classList.toggle("show")
    // fullBody.style.left=-100;
    content.classList.toggle("move")


})

ulel.addEventListener("click",()=>{
    ulel.classList.remove("show")
})

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});



    content.classList.toggle("move")

})

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

