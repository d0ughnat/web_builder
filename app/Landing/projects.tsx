'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
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

    const projects = [
        {
            image: "https://img1.wsimg.com/isteam/ip/067a4d42-19e8-46d9-9bed-578bf62dd44e/4787%20E%20Beacon%20Ridge-41.jpg-SMALL.JPG/:/rs=w:600,h:600,cg:true,m/cr=w:600,h:600,a:cc",
            title: "Modern Desert Estate",
            location: "4787 E Beacon Ridge",
            description: "Stunning contemporary home with mountain views and luxury finishes throughout"
        },
        {
            image: "https://img1.wsimg.com/isteam/ip/067a4d42-19e8-46d9-9bed-578bf62dd44e/4787%20E%20Beacon%20Ridge-53.jpg-SMALL.JPG/:/rs=w:600,h:600,cg:true,m/cr=w:600,h:600,a:cc",
            title: "Elegant Living Spaces",
            location: "4787 E Beacon Ridge",
            description: "Spacious open-concept design perfect for modern family living and entertainment"
        },
        {
            image: "https://img1.wsimg.com/isteam/ip/067a4d42-19e8-46d9-9bed-578bf62dd44e/4787%20E%20Beacon%20Ridge-54.jpg-SMALL.JPG/:/rs=w:600,h:600,cg:true,m/cr=w:600,h:600,a:cc",
            title: "Gourmet Kitchen",
            location: "4787 E Beacon Ridge",
            description: "Chef-inspired kitchen with premium appliances and custom cabinetry"
        },
        {
            image: "https://img1.wsimg.com/isteam/ip/067a4d42-19e8-46d9-9bed-578bf62dd44e/5570%20Ailanto-45.jpg-SMALL.JPG/:/rs=w:600,h:600,cg:true,m/cr=w:600,h:600,a:cc",
            title: "Luxury Master Suite",
            location: "5570 Ailanto Drive",
            description: "Retreat-style master bedroom with spa-like ensuite and walk-in closet"
        },
        {
            image: "https://img1.wsimg.com/isteam/ip/067a4d42-19e8-46d9-9bed-578bf62dd44e/5570%20Ailanto-14.jpg-SMALL.JPG/:/rs=w:600,h:600,cg:true,m/cr=w:600,h:600,a:cc",
            title: "Resort-Style Backyard",
            location: "5570 Ailanto Drive",
            description: "Private outdoor oasis with pool, patio, and landscaped gardens"
        },
        {
            image: "https://img1.wsimg.com/isteam/ip/067a4d42-19e8-46d9-9bed-578bf62dd44e/4460%20Roseworthy-52.jpg-SMALL.JPG/:/rs=w:600,h:600,cg:true,m/cr=w:600,h:600,a:cc",
            title: "Contemporary Architecture",
            location: "4460 Roseworthy Court",
            description: "Award-winning design featuring clean lines and premium materials"
        },
        {
            image: "https://img1.wsimg.com/isteam/ip/067a4d42-19e8-46d9-9bed-578bf62dd44e/4787%20E%20Beacon%20Ridge-41.jpg-SMALL.JPG/:/rs=w:600,h:600,cg:true,m/cr=w:600,h:600,a:cc",
            title: "Premium Finishes",
            location: "Pahrump Luxury Homes",
            description: "High-end materials and craftsmanship in every detail"
        },
        {
            image: "https://img1.wsimg.com/isteam/ip/067a4d42-19e8-46d9-9bed-578bf62dd44e/5570%20Ailanto-45.jpg-SMALL.JPG/:/rs=w:600,h:600,cg:true,m/cr=w:600,h:600,a:cc",
            title: "Smart Home Features",
            location: "Pahrump Smart Homes",
            description: "Integrated technology for comfort, security, and energy efficiency"
        },
        {
            image: "https://img1.wsimg.com/isteam/ip/067a4d42-19e8-46d9-9bed-578bf62dd44e/4460%20Roseworthy-52.jpg-SMALL.JPG/:/rs=w:600,h:600,cg:true,m/cr=w:600,h:600,a:cc",
            title: "Investment Opportunities",
            location: "Pahrump Real Estate",
            description: "Prime properties with excellent appreciation potential and rental income"
        }
    ];

    return (
        <div className="relative min-h-screen bg-white py-20 px-8 overflow-hidden">
            {/* Grid Lines Background */}
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

            <div className="relative z-10 max-w-7xl mx-auto">
                {/* Section Header */}
                <div ref={titleRef} className="text-center mb-16">
                    <h2 
                        className="text-5xl font-bold text-gray-900 mb-4"
                        style={{ fontFamily: 'var(--font-libre-baskerville), serif', fontWeight: 700 }}
                    >
                        Featured Projects
                    </h2>
                    <p 
                        className="text-xl text-gray-700"
                        style={{ fontFamily: 'Avenir LT Pro, Avenir, sans-serif', fontWeight: 400 }}
                    >
                        Explore our portfolio of exceptional properties in Pahrump, Nevada
                    </p>
                </div>

                {/* 3x3 Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div 
                            key={index}
                            ref={(el) => {
                                cardRefs.current[index] = el;
                            }}
                            className="group cursor-pointer"
                        >
                            {/* Image Container */}
                            <div className="relative overflow-hidden rounded-2xl shadow-lg mb-4 aspect-square">
                                <img 
                                    src={project.image}
                                    alt={`${project.title} - ${project.location}`}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                {/* Overlay on Hover */}
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
                            </div>

                            {/* Text Content */}
                            <div className="space-y-2">
                                <h3 
                                    className="text-xl font-bold text-gray-900"
                                    style={{ fontFamily: 'var(--font-libre-baskerville), serif', fontWeight: 700 }}
                                >
                                    {project.title}
                                </h3>
                                <p 
                                    className="text-sm uppercase tracking-wider text-gray-500"
                                    style={{ fontFamily: 'var(--font-libre-franklin), sans-serif', fontWeight: 400 }}
                                >
                                    {project.location}
                                </p>
                                <p 
                                    className="text-gray-700 leading-relaxed"
                                    style={{ 
                                        fontFamily: 'Avenir LT Pro, Avenir, sans-serif', 
                                        fontWeight: 400,
                                        fontSize: '15px',
                                        lineHeight: '24px'
                                    }}
                                >
                                    {project.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
