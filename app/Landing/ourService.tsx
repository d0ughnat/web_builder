'use client';

import { useEffect, useRef } from 'react';
import { Home, Building2, Users, TrendingUp, Shield, Handshake } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function OurService() {
    const titleRef = useRef<HTMLDivElement>(null);
    const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        // Animate title
        if (titleRef.current) {
            gsap.set(titleRef.current, { opacity: 0, y: -50 });
            gsap.to(titleRef.current, {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: titleRef.current,
                    start: 'top 80%',
                    end: 'top 30%',
                    scrub: 1,
                }
            });
        }

        // Animate cards with stagger
        cardRefs.current.forEach((card, index) => {
            if (card) {
                gsap.set(card, { opacity: 0, scale: 0.8, y: 50 });
                gsap.to(card, {
                    opacity: 1,
                    scale: 1,
                    y: 0,
                    duration: 0.8,
                    ease: 'back.out(1.7)',
                    scrollTrigger: {
                        trigger: card,
                        start: 'top 80%',
                        end: 'top 40%',
                        scrub: 1,
                    }
                });
            }
        });

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    const services = [
        {
            icon: Home,
            title: "Real Estate Done Right",
            description: "Nervous about your property adventure? Don't be. Whether you're getting ready to buy or sell your residence, looking at investment properties, or just curious about the markets, our team ensures you get the best experience possible!"
        },
        {
            icon: Building2,
            title: "Commercial & Residential",
            description: "Large or small, condo or mansion, we can find it and get at the price that's right. Fixer-uppers? Luxury? We can help with all of it! We live, work, and play in this community. Happy to help you find where to put you hard-earned dollars."
        },
        {
            icon: Shield,
            title: "Rely on Expertise",
            description: "If you have questions about affordability, credit, and loan options, trust us to connect you with the right people to get the answers you need in a timely fashion. We make sure you feel confident and educated every step of the way."
        },
        {
            icon: TrendingUp,
            title: "Market Analysis",
            description: "Stay informed with comprehensive market insights and data-driven strategies to make the best decisions for your investment."
        },
        {
            icon: Handshake,
            title: "Trusted Partners",
            description: "Access our network of verified professionals including inspectors, contractors, and lenders to streamline your real estate journey."
        }
    ];

    return (
        <div className="relative min-h-screen py-20 px-8 overflow-hidden" style={{ backgroundColor: '#d3ffce' }}>
            {/* Grid Lines Background */}
            <div 
                className="absolute inset-0 pointer-events-none"
                style={{
                    backgroundImage: `
                        linear-gradient(to right, #a8e89e 1px, transparent 1px),
                        linear-gradient(to right, #a8e89e 1px, transparent 1px),
                        linear-gradient(to right, #a8e89e 1px, transparent 1px),
                        linear-gradient(to right, #a8e89e 1px, transparent 1px)
                    `,
                    backgroundSize: '25% 100%, 25% 100%, 25% 100%, 25% 100%',
                    backgroundPosition: '0 0, 15% 0, 70% 0, 125%',
                    backgroundRepeat: 'no-repeat',
                    zIndex: 0
                }}
            />

            <div className="relative z-10 max-w-7xl mx-auto">
                {/* Section Header */}
                <div ref={titleRef} className="text-center mb-16">
                    <h2 
                        className="text-5xl font-bold text-gray-900 mb-4"
                        style={{ fontFamily: 'var(--font-libre-baskerville), serif', fontWeight: 700 }}
                    >
                        Our Services
                    </h2>
                    <p 
                        className="text-xl text-gray-700"
                        style={{ fontFamily: 'Avenir LT Pro, Avenir, sans-serif', fontWeight: 400 }}
                    >
                        Comprehensive real estate solutions tailored to your needs
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    {/* Top Row - 3 Cards */}
                    {services.slice(0, 3).map((service, index) => (
                        <div 
                            key={index}
                            ref={(el) => {
                                cardRefs.current[index] = el;
                            }}
                            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
                        >
                            <div className="flex flex-col items-center text-center space-y-4">
                                <div className="p-4 bg-green-100 rounded-full">
                                    <service.icon className="w-12 h-12 text-green-700" />
                                </div>
                                <h3 
                                    className="text-2xl font-bold text-gray-900"
                                    style={{ fontFamily: 'var(--font-libre-baskerville), serif', fontWeight: 700 }}
                                >
                                    {service.title}
                                </h3>
                                <p 
                                    className="text-gray-700 leading-relaxed"
                                    style={{ 
                                        fontFamily: 'Avenir LT Pro, Avenir, sans-serif', 
                                        fontWeight: 400,
                                        fontSize: '16px',
                                        lineHeight: '26px'
                                    }}
                                >
                                    {service.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom Row - 2 Larger Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {services.slice(3, 5).map((service, index) => (
                        <div 
                            key={index}
                            ref={(el) => {
                                cardRefs.current[index + 3] = el;
                            }}
                            className="bg-white rounded-2xl p-10 shadow-lg hover:shadow-xl transition-shadow duration-300"
                        >
                            <div className="flex flex-col items-center text-center space-y-6">
                                <div className="p-6 bg-green-100 rounded-full">
                                    <service.icon className="w-16 h-16 text-green-700" />
                                </div>
                                <h3 
                                    className="text-3xl font-bold text-gray-900"
                                    style={{ fontFamily: 'var(--font-libre-baskerville), serif', fontWeight: 700 }}
                                >
                                    {service.title}
                                </h3>
                                <p 
                                    className="text-gray-700 leading-relaxed text-lg"
                                    style={{ 
                                        fontFamily: 'Avenir LT Pro, Avenir, sans-serif', 
                                        fontWeight: 400,
                                        fontSize: '18px',
                                        lineHeight: '28px'
                                    }}
                                >
                                    {service.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
