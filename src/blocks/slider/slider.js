import {gsap} from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'

const animation = gsap.to('.slider__slider', {
    xPercent: -100,
})

ScrollTrigger.create({
    animation,
    trigger: '.slider',
    scrub: true,
    toggleActions: 'play none none reverse',
    pin: '.slider',
    start: 'center center'
})
