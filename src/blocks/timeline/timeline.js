import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger);

// gsap.from('.timeline__hider', {
//     height: '0',
//     scrollTrigger: {
//         trigger: '.timeline__road',
//         start: 'top center',
//         end: 'bottom bottom',
//         markers: true,
//         scrub: true
//     }
// })

const cards = document.querySelectorAll('.card');
cards.forEach(card => {
    const ball = card.querySelector('.card__ball');
    const year = card.querySelector('.card__year');
    console.log(ball, year);
    const tl = gsap.timeline();
    if (!card.classList.contains('card--2')) {
        tl.from(card, {
            x: -100,
            opacity: 0
        });
    } else {
        tl.from(card, {
            x: 100,
            opacity: 0
        });
    }
    tl.from(card.querySelector('.card__ball'), {
        background: 'radial-gradient(60.8% 60.8% at 50% 50%, rgba(0, 140, 112, 0.25) 0%, rgba(0, 140, 112, 0.157127) 0%, rgba(0, 10, 18, 0) 0%)'
    });
    // tl.from(card.querySelector('.card__year', {
    //     opacity: 0
    // }))
    
    ScrollTrigger.create({
        animation: tl,
        trigger: card,
        markers: true,
        toggleActions: 'play none none reverse',
        start: 'bottom 95%'
    });
});
