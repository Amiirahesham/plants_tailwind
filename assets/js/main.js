/*~~~~~~~~~~~~~~~ TOGGLE BUTTON ~~~~~~~~~~~~~~~*/
const navMenu = document.getElementById("nav-menu");
const hamburger = document.getElementById("hamburger");

hamburger.addEventListener("click", () => {
    // Toggle the left class to show/hide the menu
    if (navMenu.classList.contains("left-[-100%]")) {
        navMenu.classList.remove("left-[-100%]");
        navMenu.classList.add("left-0");
    } else {
        navMenu.classList.remove("left-0");
        navMenu.classList.add("left-[-100%]");
    }
    
    // Optionally, toggle hamburger icon if needed
    hamburger.classList.toggle("ri-menu-4-line");
    hamburger.classList.toggle("ri-close-line"); // Example: switch to a close icon
});


/*~~~~~~~~~~~~~~~ SHOW SCROLL UP ~~~~~~~~~~~~~~~*/


/*~~~~~~~~~~~~~~~ CHANGE BACKGROUND HEADER ~~~~~~~~~~~~~~~*/


/*~~~~~~~~~~~~~~~ SWIPER ~~~~~~~~~~~~~~~*/

const swiper = new Swiper('.swiper', {
    speed:400,
    spaceBetween:30,
    autoplay:{
        delay:3000,
        disableOnInteraction:false
    },
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable:true
    },
    grabCursor:true,
    breakpoints:{
        540:{
            slidesPerView:2
        },
        768:{
            slidesPerView:3
        },
        1180:{
            slidesPerView:4
        },
    }
  
    
  });



/*~~~~~~~~~~~~~~~ SCROLL REVEAL ANIMATION ~~~~~~~~~~~~~~~*/
const sr=ScrollReveal({
    origin:"top",
    distance:"60px",
    duration:2500,
    delay:300,
    reset:true
})
sr.reveal(`.home__data,.about__top, .popular__top,.review__top,.review__swiper,.footer__content ,.copy__rights`)
sr.reveal(`.home__image,.footer__icon `,{delay:500,scale:0.5})

sr.reveal(`.service__card,.popular__card`,{interval:100})
sr.reveal(`.about__leaf`,{idelay:1000 ,origin:"right"})
sr.reveal(`.review__img,.footer__floral`,{idelay:1000 ,origin:"left"})
sr.reveal(`.about__item__2_img,about__item__1_content`,{origin:"right"})
sr.reveal(`.about__item__1_img,about__item__2_content`,{origin:"left"})