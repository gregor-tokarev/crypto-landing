import '../blocks/timeline/timeline'
import '../../.wfLayout/webpCheck';
import '../blocks/slider/slider'
import '../blocks/rate/rate'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const animatedElements = document.querySelectorAll('.base-animation');

animatedElements.forEach(el => {
    const baseAnimation = gsap.from(el, {
        duration: 1,
        y: 100,
        stagger: 0.25,
        opacity: 0
    });
    
    ScrollTrigger.create({
        animation: baseAnimation,
        trigger: el,
        toggleActions: 'play none none none'
    });
});
