import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Common animation presets
export const animations = {
  // Hero section animations
  hero: {
    title: (element) => gsap.fromTo(element, 
      { opacity: 0, y: 100, rotationX: -30 },
      { opacity: 1, y: 0, rotationX: 0, duration: 1.5, ease: "power3.out" }
    ),
    subtitle: (element) => gsap.fromTo(element,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, delay: 0.3, ease: "power3.out" }
    ),
    image: (element) => gsap.fromTo(element,
      { opacity: 0, scale: 0.8, rotation: -10 },
      { opacity: 1, scale: 1, rotation: 0, duration: 1.2, delay: 0.5, ease: "back.out(1.7)" }
    ),
    buttons: (elements) => gsap.fromTo(elements,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.2, delay: 0.8, ease: "power3.out" }
    )
  },

  // Section reveal animations
  section: {
    fadeInUp: (element) => gsap.fromTo(element,
      { opacity: 0, y: 60 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 1, 
        ease: "power3.out",
        scrollTrigger: {
          trigger: element,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      }
    ),
    fadeInLeft: (element) => gsap.fromTo(element,
      { opacity: 0, x: -60 },
      { 
        opacity: 1, 
        x: 0, 
        duration: 1, 
        ease: "power3.out",
        scrollTrigger: {
          trigger: element,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      }
    ),
    fadeInRight: (element) => gsap.fromTo(element,
      { opacity: 0, x: 60 },
      { 
        opacity: 1, 
        x: 0, 
        duration: 1, 
        ease: "power3.out",
        scrollTrigger: {
          trigger: element,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      }
    )
  },

  // Card animations
  card: {
    hover: (element) => gsap.to(element, {
      scale: 1.05,
      rotationY: 5,
      rotationX: 5,
      duration: 0.3,
      ease: "power2.out"
    }),
    hoverOut: (element) => gsap.to(element, {
      scale: 1,
      rotationY: 0,
      rotationX: 0,
      duration: 0.3,
      ease: "power2.out"
    }),
    reveal: (elements) => gsap.fromTo(elements,
      { opacity: 0, y: 50, scale: 0.9 },
      { 
        opacity: 1, 
        y: 0, 
        scale: 1,
        duration: 0.8, 
        stagger: 0.1, 
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: elements[0]?.parentElement,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      }
    )
  },

  // Button animations
  button: {
    hover: (element) => gsap.to(element, {
      scale: 1.05,
      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      duration: 0.3,
      ease: "power2.out"
    }),
    hoverOut: (element) => gsap.to(element, {
      scale: 1,
      boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
      duration: 0.3,
      ease: "power2.out"
    }),
    click: (element) => gsap.to(element, {
      scale: 0.95,
      duration: 0.1,
      yoyo: true,
      repeat: 1,
      ease: "power2.inOut"
    })
  },

  // Skill animations
  skills: {
    stagger: (elements) => gsap.fromTo(elements,
      { opacity: 0, y: 30, scale: 0.8 },
      { 
        opacity: 1, 
        y: 0, 
        scale: 1,
        duration: 0.6, 
        stagger: 0.05, 
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: elements[0]?.parentElement,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      }
    ),
    floating: (element) => gsap.to(element, {
      y: -10,
      duration: 2,
      ease: "power1.inOut",
      yoyo: true,
      repeat: -1
    })
  },

  // Timeline animations
  timeline: {
    reveal: (elements) => gsap.fromTo(elements,
      { opacity: 0, x: -100 },
      { 
        opacity: 1, 
        x: 0, 
        duration: 0.8, 
        stagger: 0.2, 
        ease: "power3.out",
        scrollTrigger: {
          trigger: elements[0]?.parentElement,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      }
    )
  },

  // Text animations
  text: {
    typewriter: (element, text, speed = 0.05) => {
      const chars = text.split('');
      element.innerHTML = '';
      
      return gsap.to(chars, {
        duration: speed,
        ease: "none",
        stagger: speed,
        onUpdate: function() {
          element.innerHTML = chars.slice(0, this.progress() * chars.length).join('');
        }
      });
    },
    splitText: (element) => {
      const text = element.textContent;
      const chars = text.split('');
      element.innerHTML = chars.map(char => `<span class="inline-block">${char === ' ' ? '&nbsp;' : char}</span>`).join('');
      
      return gsap.fromTo(element.children,
        { opacity: 0, y: 50 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 0.8, 
          stagger: 0.02, 
          ease: "back.out(1.7)" 
        }
      );
    }
  }
};

// Utility functions
export const createScrollTrigger = (trigger, animation, options = {}) => {
  return ScrollTrigger.create({
    trigger,
    animation,
    start: "top 80%",
    end: "bottom 20%",
    toggleActions: "play none none reverse",
    ...options
  });
};

export const createParallax = (element, speed = 0.5) => {
  return gsap.to(element, {
    yPercent: -50 * speed,
    ease: "none",
    scrollTrigger: {
      trigger: element,
      start: "top bottom",
      end: "bottom top",
      scrub: true
    }
  });
};

export const createMagneticEffect = (element, strength = 0.3) => {
  const handleMouseMove = (e) => {
    const rect = element.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    
    gsap.to(element, {
      x: x * strength,
      y: y * strength,
      duration: 0.3,
      ease: "power2.out"
    });
  };

  const handleMouseLeave = () => {
    gsap.to(element, {
      x: 0,
      y: 0,
      duration: 0.5,
      ease: "elastic.out(1, 0.3)"
    });
  };

  element.addEventListener('mousemove', handleMouseMove);
  element.addEventListener('mouseleave', handleMouseLeave);

  return () => {
    element.removeEventListener('mousemove', handleMouseMove);
    element.removeEventListener('mouseleave', handleMouseLeave);
  };
};
