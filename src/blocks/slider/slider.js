import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const animation = gsap.to('.slider__slider', {
    xPercent: -200
});

ScrollTrigger.create({
    animation,
    trigger: '.slider',
    scrub: 0.2,
    toggleActions: 'play none none reverse',
    pin: '.slider',
    start: 'center center'
});
