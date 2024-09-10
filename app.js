const bar = document.getElementById("bar")
const ulel = document.getElementById("ul")
// const nav = docume.querySelector("nav")
let aboutimg = document.querySelector(".left")
const body = document.getElementById("about")
const fullBody = document.querySelector("body")
let content = document.querySelector(".hider")
let skillimg =  document.querySelector(".skill-content")
// skillimg[skillimg.length -1]

// bar.addEventListener("click",()=>{
//     ulel.classList.add("show")
//     // fullBody.style.left=-100;
//     // content.classList.toggle("move")


// })

bar.addEventListener("click",()=>{
    ulel.classList.toggle("show");
    content.classList.toggle("scroller");
    aboutimg.classList.toggle("imagehider")
    skillimg.classList.toggle("imagehider")

})

ulel.addEventListener("click",()=>{
    ulel.classList.remove("show")
    content.classList.remove("imagehider")
    skillimg.classList.remove("imagehider")
})

// document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//     anchor.addEventListener('click', function (e) {
//         e.preventDefault();

//         document.querySelector(this.getAttribute('href')).scrollIntoView({
//             behavior: 'smooth'
//         });
//     });
// });


