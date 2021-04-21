import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger);

const cards = document.querySelectorAll('.card');
cards.forEach(card => {
    const tl = gsap.timeline();
    if (!card.classList.contains('card--2')) {
        tl.from(card, {
            x: -100,
            opacity: 0
        });
        tl.from(card.querySelector('.card__ball'), {
            background: 'radial-gradient(60.8% 60.8% at 50% 50%, rgba(162, 80, 226, 0.4) 0%, rgba(102, 54, 149, 0.251403) 0%, rgba(0, 10, 18, 0) 0%)'
        });
    } else {
        tl.from(card, {
            x: 100,
            opacity: 0
        });
        tl.from(card.querySelector('.card__ball'), {
            background: 'radial-gradient(60.8% 60.8% at 50% 50%, rgba(0, 140, 112, 0.25) 0%, rgba(0, 140, 112, 0.157127) 0%, rgba(0, 10, 18, 0) 0%)'
        });
    }
    
    ScrollTrigger.create({
        animation: tl,
        trigger: card,
        toggleActions: 'play none none none',
        start: 'bottom 40%'
    });
});
