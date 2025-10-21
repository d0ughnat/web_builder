


'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Sold() {
    const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

    const sections = [
        {
            image: "https://img1.wsimg.com/isteam/stock/3395/:/cr=t:11.02%25,l:0%25,w:100%25,h:77.95%25/rs=w:600,h:300,cg:true",
            title: "Top Residential Sales Expert",
            subtitle: "5 Years of Proven Excellence",
            description: "Nearly 90 satisfied clients in 2021 alone with $28.5 million in closed sales. Our commitment to continuous growth and market expertise ensures you receive unparalleled service. Because your success is our success, and we're raising the bar every single year.",
            position: "right"
        },
        {
            image: "https://img1.wsimg.com/isteam/stock/107927/:/rs=w:600,h:300,cg:true,m/cr=w:600,h:300",
            title: "Don't Just List It—Get It SOLD",
            subtitle: "Maximum Exposure, Maximum Value",
            description: "Strategic marketing meets aggressive promotion. We leverage every platform, network, and tool to place your listing directly in front of motivated buyers. The result? Top dollar for your property, faster than you imagined possible.",
            position: "left"
        },
        {
            image: "https://img1.wsimg.com/isteam/stock/771/:/cr=t:5.36%25,l:1.76%25,w:96.47%25,h:89.29%25/rs=w:600,h:300,cg:true,m",
            title: "Your Personal Buyer's Advocate",
            subtitle: "Local Market Mastery",
            description: "Navigate Pahrump's real estate landscape with confidence. From comprehensive market analysis and upgrade recommendations to our network of trusted contractors—we're your all-access pass to insider knowledge and seamless home buying.",
            position: "right"
        }
    ];

    useEffect(() => {
        // Animate each section independently with floating effect
        sectionRefs.current.forEach((section, index) => {
            if (section) {
                // Set initial state - hidden, scaled down, and positioned below
                gsap.set(section, { 
                    opacity: 0, 
                    y: 80,
                    scale: 0.95
                });

                // Create floating animation
                gsap.to(section, {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    duration: 1.2,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: section,
                        start: 'top 75%',
                        end: 'top 25%',
                        scrub: 1,
                        toggleActions: 'play none none reset',
                    }
                });
            }
        });

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    return (
        <div className="relative min-h-screen bg-white py-20 px-8 overflow-hidden">
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

            <div className="relative z-10 max-w-7xl mx-auto space-y-32 ml-auto pl-12">
                {sections.map((section, index) => (
                    <div 
                        key={index}
                        ref={(el) => {
                            sectionRefs.current[index] = el;
                        }}
                        className={`flex flex-col ${section.position === 'right' ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 items-center`}
                    >
                        {/* Image with Watermark */}
                        <div className="w-full md:w-1/2 relative">
                            {/* Watermark Text Above Image */}
                            <div className="absolute -top-32 left-0 right-0 flex justify-center pointer-events-none" style={{ zIndex: 5 }}>
                                <h1 
                                    className="text-[15rem] font-normal select-none"
                                    style={{
                                        fontFamily: 'Avenir LT Pro, Avenir, sans-serif',
                                        fontWeight: 400,
                                        WebkitTextStroke: '1px rgba(0, 0, 0, 0.08)',
                                        color: 'rgba(0, 0, 0, 0.02)',
                                        lineHeight: '1'
                                    }}
                                >
                                    {index === 0 ? 'GET' : index === 1 ? 'IT' : 'SOLD'}
                                </h1>
                            </div>
                            <img 
                                src={section.image}
                                alt={section.title}
                                className="w-full h-[300px] object-cover rounded-2xl shadow-xl"
                            />
                        </div>

                        {/* Text Content */}
                        <div className="w-full md:w-1/2 space-y-4">
                            <div>
                                <p 
                                    className="text-sm uppercase tracking-widest text-gray-500 mb-2"
                                    style={{ fontFamily: 'var(--font-libre-franklin), sans-serif', fontWeight: 400 }}
                                >
                                    {section.subtitle}
                                </p>
                                <h2 
                                    className="text-4xl font-bold text-gray-900 mb-6"
                                    style={{ fontFamily: 'var(--font-libre-baskerville), serif', fontWeight: 700 }}
                                >
                                    {section.title}
                                </h2>
                            </div>
                            <p 
                                className="text-lg leading-relaxed text-gray-700"
                                style={{ 
                                    fontFamily: 'Avenir LT Pro, Avenir, sans-serif', 
                                    fontWeight: 400,
                                    fontSize: '18px',
                                    lineHeight: '28px'
                                }}
                            >
                                {section.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
