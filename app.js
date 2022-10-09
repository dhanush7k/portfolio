const bar = document.getElementById("bar")
const ulel = document.getElementById("ul")
const body = document.getElementById("about")
let content = document.querySelector("#hider")

bar.addEventListener("click",()=>{
    ulel.classList.toggle("show")
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

