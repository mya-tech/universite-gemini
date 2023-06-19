

    const tabs = [...document.querySelectorAll('.tab')]

    tabs.forEach(tab => tab.addEventListener("click",
    tabsAnimation))

    function tabsAnimation(e){
        const tabContents =[...document.querySelectorAll(".tab-content")]

        const indexToRemove = tabs.findIndex(tab => tab.classList.contains("active-tab"))

        tabs[indexToRemove].classList.remove("active-tab");
        tabContents[indexToRemove].classList.remove("active-tab-content");

        const indexToShow = tabs.indexOf(e.target)
        tabs[indexToShow].classList.add("active-tab");
        tabContents [indexToShow].classList.add("active-tab-content")

    }

    const titreSpans = document.querySelectorAll('h1 span');
const btns = document.querySelectorAll('.btn-first');
const logo = document.querySelector('.logo');
const medias = document.querySelectorAll('.bulle');
const l1 = document.querySelector('.l1');
const l2 = document.querySelector('.l2');

window.addEventListener('load', () => {

    const TL = gsap.timeline({paused: true});

    TL
    .staggerFrom(titreSpans, 1, {top: -50, opacity: 0, ease: "power2.out"}, 0.3)
    .staggerFrom(btns, 1, {opacity: 0, ease: "power2.out"}, 0.3, '-=1')
    .from(l1, 1, {width: 0, ease: "power2.out"}, '-=2')
    .from(l2, 1, {width: 0, ease: "power2.out"}, '-=2')
    .from(logo, 0.3, {transform: "scale(0)", ease: "power2.out"}, '-=2')
    .staggerFrom(medias, 1, {right: -200, ease: "power2.out"}, 0.3, '-=1');

    
    

    TL.play();
})

    let slider = tns({
        container : ".my-slider",
        "slideBy": "1",
        "speed": 600,
        "nav": false,
        ease: "power2.out",
        autoplay : true,
        controls : false,
        autoplayButtonOutput : false,
        responsive : {
            1600:{
                items : 5,
                gutter: 20
            },
            1024 :{
                items : 4,
                gutter: 20
            },
            768 :{
                items : 2,
                gutter: 20
            },
            480 :{
                items : 1,
                
            },
        }
   
                           
    })
    ScrollReveal().reveal('.eventtitle');


    ScrollReveal().reveal('.imageblock2', { delay: 1500 });
    ScrollReveal().reveal('.imageblock3 ', { delay: 2000 });
    ScrollReveal().reveal('.imageblock1', { delay: 200, easing: "ease-out", interval: 100, scale: 1.2,});


    let navbar = document.querySelector('.entetes .menu');
    let menu = document.querySelector('#menu-btn');
    menu.onclick = () =>{
        menu.classList.toggle('fa-times');
        navbar.classList.toggle('active');
    }
    
    let cart = document.querySelector('.cart-items-container');
    
    document.querySelector('#cart-btn').onclick = () =>{
        cart.classList.add('active');
    }
    
    document.querySelector('#close-form').onclick = () =>{
        cart.classList.remove('active');
    }


    
