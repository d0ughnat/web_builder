'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
    const textRef = useRef<HTMLHeadingElement>(null);
    const imageRef = useRef<HTMLImageElement>(null);
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Set initial state - elements hidden with low opacity
        gsap.set(textRef.current, { opacity: 0.1, y: -100 });
        gsap.set(imageRef.current, { opacity: 0.1, y: 100 });

        // Create animation timeline with scrub for continuous scroll-linked animation
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.current,
                start: 'top 80%',
                end: 'top 20%',
                scrub: 1, // Smooth scrubbing, takes 1 second to "catch up" to the scrollbar
                toggleActions: 'play none none reset',
            }
        });

        // Animate text - slides down from top and fades in
        tl.to(
            textRef.current,
            { 
                opacity: 1, 
                y: 0, 
                duration: 1, 
                ease: 'power2.out' 
            }
        );

        // Animate image - slides up from bottom and fades in
        tl.to(
            imageRef.current,
            { 
                opacity: 1, 
                y: 0, 
                duration: 1, 
                ease: 'power2.out' 
            },
            '-=0.5' // Start 0.5s before previous animation ends
        );

        return () => {
            tl.kill();
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    return (
        <div ref={sectionRef} className="relative min-h-screen bg-white py-20 px-8">
            <div 
                className="absolute inset-0 pointer-events-none"
                style={{
                    backgroundImage: `
                        linear-gradient(to right, #e5e5e5 1px, transparent 1px),
                        linear-gradient(to right, #e5e5e5 1px, transparent 1px),
                        linear-gradient(to right, #e5e5e5 1px, transparent 1px),
                        linear-gradient(to right, #e5e5e5 1px, transparent 1px)
                    `,
                    backgroundSize: '25% 100%, 25% 100%, 25% 100%, 25% 100%',
                    backgroundPosition: '0 0, 15% 0, 70% 0, 125%',
                    backgroundRepeat: 'no-repeat',
                    zIndex: 0
                }}
            />
            <div className="relative z-10 max-w-6xl mx-auto text-left">
                <h2 
                    ref={textRef}
                    className="leading-relaxed text-gray-800 mb-12" 
                    style={{ 
                        fontFamily: 'Avenir LT Pro, Avenir, sans-serif', 
                        fontWeight: 400,
                        fontSize: '36px',
                        lineHeight: '50px'
                    }}
                > 
                    Marci J. Metzger is a trusted REALTOR® 
                    serving Pahrump and Southern Nevada. With over 25 years of real estate experience, she brings expert guidance, local insight, and genuine care to every client.   
                </h2>
            </div>
            <div className="relative z-10 mt-16">
                <img 
                    ref={imageRef}
                    src="https://img1.wsimg.com/isteam/stock/87390/:/cr=t:7.34%25,l:0%25,w:85.32%25,h:85.32%25/rs=w:1920,m"
                    alt="Real Estate"
                    className="w-600 h-150 rounded-2xl shadow-lg"
                />
            </div>
        </div>
    )
}
