import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

export const useGSAP = (callback, dependencies = []) => {
  const elementRef = useRef(null);

  useEffect(() => {
    if (elementRef.current) {
      const ctx = gsap.context(callback, elementRef);
      return () => ctx.revert();
    }
  }, dependencies);

  return elementRef;
};

export const useScrollTrigger = (callback, dependencies = []) => {
  const elementRef = useRef(null);

  useEffect(() => {
    if (elementRef.current) {
      const ctx = gsap.context(callback, elementRef);
      return () => ctx.revert();
    }
  }, dependencies);

  return elementRef;
};

// Utility function for common animations
export const fadeInUp = (element, delay = 0) => {
  return gsap.fromTo(element, 
    { 
      opacity: 0, 
      y: 60,
      rotationX: -15
    },
    { 
      opacity: 1, 
      y: 0,
      rotationX: 0,
      duration: 1,
      delay,
      ease: "power3.out"
    }
  );
};

export const fadeInLeft = (element, delay = 0) => {
  return gsap.fromTo(element,
    { 
      opacity: 0, 
      x: -60 
    },
    { 
      opacity: 1, 
      x: 0,
      duration: 1,
      delay,
      ease: "power3.out"
    }
  );
};

export const fadeInRight = (element, delay = 0) => {
  return gsap.fromTo(element,
    { 
      opacity: 0, 
      x: 60 
    },
    { 
      opacity: 1, 
      x: 0,
      duration: 1,
      delay,
      ease: "power3.out"
    }
  );
};

export const staggerChildren = (parent, children, delay = 0.1) => {
  return gsap.fromTo(children,
    { 
      opacity: 0, 
      y: 30 
    },
    { 
      opacity: 1, 
      y: 0,
      duration: 0.8,
      stagger: delay,
      ease: "power3.out",
      scrollTrigger: {
        trigger: parent,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      }
    }
  );
};

export const parallaxEffect = (element, speed = 0.5) => {
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

export const typewriter = (element, text, speed = 0.05) => {
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
};
