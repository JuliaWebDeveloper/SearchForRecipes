//Анимация кнопки-"качание"
let btnAnimation = () => {
    const tlBtn = gsap.timeline({ defaults: { duration: .1}, repeat: -1, repeatDelay: 3});
    tlBtn.to(".more", { rotation: 3})
         .to(".more", { rotation: -3})
         .to(".more", { rotation: 3})
         .to(".more", { rotation: 0});
    return tlBtn;
}
const tl = gsap.timeline({ defaults: { duration: .7}});
tl.add(btnAnimation);


const searchInput = document.querySelector(".search");
const divs = document.querySelectorAll(".recipe");
searchInput.addEventListener("keyup", function(event) {
    const word = event.target.value.toLowerCase();
    divs.forEach(item => {
        item.querySelector(".dessert").textContent.toLowerCase().includes(word) ? (item.style.display = "block") : (item.style.display = "none");
    })
})