const parallax_el = document.querySelectorAll(".parallax");

let xValue = 0, yValue = 0;

window.addEventListener("mousemove", (e) => {
    xValue = e.clientX - window.innerWidth / 2;
    yValue = e.clientY - window.innerHeight / 2;
    
    parallax_el.forEach(el => {
        let speedx = el.dataset.speedx;
        let speedy = el.dataset.speedy;
        let rotation = el.dataset.rotation || 0;
        el.style.transform = `translateX(calc(-50% + ${xValue * speedx}px)) 
                              translateY(calc(-50% + ${yValue * speedy}px))
                              rotate(${yValue * -rotation}deg)`;
    });
});


const boxLeft = document.querySelector('.boxleft');
const boxRight = document.querySelector('.boxright');

const boat = document.querySelector('.boat');
const wharf = document.querySelector('.wharf');

boxLeft.addEventListener("mouseover", () => {
    boat.style.transition = "left 1s ease"; 
    boat.style.left = "5%"; 
});

boxLeft.addEventListener("mouseleave", () => {
    boat.style.transition = "left 3s ease"; 
    boat.style.left = "-100%";
});

boxRight.addEventListener("mouseover", () => {
    wharf.style.transition = "left 1s ease";
    wharf.style.left = "70%"; 
});

boxRight.addEventListener("mouseleave", () => {
    wharf.style.transition = "left 2s ease";
    wharf.style.left = "100%"; 
});
