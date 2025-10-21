'use client';

import { useEffect, useRef } from 'react';
import { Facebook, Instagram, Linkedin } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
    const footerRef = useRef<HTMLDivElement>(null);
    const columnRefs = useRef<(HTMLDivElement | null)[]>([]);
    const bottomBarRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Animate entire footer section
        if (footerRef.current) {
            gsap.set(footerRef.current, { opacity: 0, y: -100 });
            gsap.to(footerRef.current, {
                opacity: 1,
                y: 0,
                duration: 1.2,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: footerRef.current,
                    start: 'top 90%',
                    end: 'top 50%',
                    scrub: 1,
                }
            });
        }

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    return (
        <footer ref={footerRef} className="relative py-12 px-8 overflow-hidden" style={{ backgroundColor: '#343a40' }}>
            {/* Grid Lines Background */}
            <div 
                className="absolute inset-0 pointer-events-none"
                style={{
                    backgroundImage: `
                        linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px),
                        linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px),
                        linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px),
                        linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px)
                    `,
                    backgroundSize: '25% 100%, 25% 100%, 25% 100%, 25% 100%',
                    backgroundPosition: '0 0, 15% 0, 70% 0, 125%',
                    backgroundRepeat: 'no-repeat',
                    zIndex: 0
                }}
            />

            <div className="relative z-10 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
                    {/* Logo Section */}
                    <div ref={(el) => { columnRefs.current[0] = el; }} className="flex flex-col items-start space-y-6">
                       <a href="/">
                        <img 
                            src="https://img1.wsimg.com/isteam/ip/067a4d42-19e8-46d9-9bed-578bf62dd44e/blob-6c0c2e0.png/:/rs=h:167,cg:true,m/qt=q:95"
                            alt="Pahrump Realty Logo"
                            className="h-16 cursor-pointer hover:opacity-80 transition-opacity duration-300"
                            style={{ filter: 'brightness(0) invert(1)' }}
                        />
                    </a>
                        <p 
                            className="text-gray-300 text-sm leading-relaxed"
                            style={{ fontFamily: 'Avenir LT Pro, Avenir, sans-serif', fontWeight: 400 }}
                        >
                            Your trusted Pahrump real estate expert. Making dreams come true, one home at a time.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div ref={(el) => { columnRefs.current[1] = el; }}>
                        <h3 
                            className="text-white text-lg font-bold mb-6"
                            style={{ fontFamily: 'var(--font-libre-baskerville), serif', fontWeight: 700 }}
                        >
                            Quick Links
                        </h3>
                        <ul className="space-y-3">

                            <li>
                                <a 
                                    href="#contact"
                                    className="text-gray-300 hover:text-white transition-colors duration-300"
                                    style={{ fontFamily: 'var(--font-libre-franklin), sans-serif', fontWeight: 400 }}
                                >
                                    Contact Us
                                </a>
                            </li>
                            <li>
                                <a 
                                    href="/Listing"
                                    className="text-gray-300 hover:text-white transition-colors duration-300"
                                    style={{ fontFamily: 'var(--font-libre-franklin), sans-serif', fontWeight: 400 }}
                                >
                                    Available Properties
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Social Media */}
                    <div ref={(el) => { columnRefs.current[2] = el; }}>
                        <h3 
                            className="text-white text-lg font-bold mb-6"
                            style={{ fontFamily: 'var(--font-libre-baskerville), serif', fontWeight: 700 }}
                        >
                            Connect With Us
                        </h3>
                        <div className="flex gap-4">
                            <a 
                                href="https://web.facebook.com/MarciHomes/?_rdc=1&_rdr"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-all duration-300"
                                aria-label="Facebook"
                            >
                                <Facebook className="w-6 h-6 text-white" />
                            </a>
                            <a 
                                href="https://www.instagram.com/marciandlauren_nvrealtors/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-all duration-300"
                                aria-label="Instagram"
                            >
                                <Instagram className="w-6 h-6 text-white" />
                            </a>
                            <a 
                                href="https://www.linkedin.com/in/marci-metzger-30642496/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-all duration-300"
                                aria-label="LinkedIn"
                            >
                                <Linkedin className="w-6 h-6 text-white" />
                            </a>
                            <a 
                                href="https://www.yelp.com/biz/marci-metzger-the-ridge-realty-pahrump"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-all duration-300"
                                aria-label="Yelp"
                            >
                                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12.271 17.625c-.647 0-1.208.437-1.362 1.062l-.742 3.021c-.124.504.186 1.015.692 1.139.09.023.182.034.274.034.416 0 .79-.279.902-.7l.742-3.021c.124-.504-.186-1.015-.692-1.139-.09-.022-.182-.034-.274-.034l-.54-.362zm5.867-3.172c-.416-.186-.905.001-1.091.417l-1.464 3.279c-.186.416.001.905.417 1.091.108.048.223.071.336.071.319 0 .625-.179.773-.488l1.464-3.279c.186-.416-.001-.905-.417-1.091h-.018zm-11.067 0c-.416.186-.603.675-.417 1.091l1.464 3.279c.148.309.454.488.773.488.113 0 .228-.023.336-.071.416-.186.603-.675.417-1.091l-1.464-3.279c-.186-.416-.675-.603-1.091-.417h-.018zm2.8-5.653l-3.021.742c-.504.124-.813.635-.692 1.139.111.421.485.7.902.7.092 0 .184-.011.274-.034l3.021-.742c.504-.124.813-.635.692-1.139-.124-.504-.635-.813-1.139-.692l-.037.026zm8.458 0c-.504-.124-1.015.186-1.139.692-.124.504.186 1.015.692 1.139l3.021.742c.09.023.182.034.274.034.416 0 .79-.279.902-.7.124-.504-.186-1.015-.692-1.139l-3.021-.742-.037-.026zM12 8.25c-2.071 0-3.75 1.679-3.75 3.75s1.679 3.75 3.75 3.75 3.75-1.679 3.75-3.75-1.679-3.75-3.75-3.75zm0-6.75c-5.514 0-10 4.486-10 10s4.486 10 10 10 10-4.486 10-10-4.486-10-10-10z"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div ref={bottomBarRef} className="pt-8 border-t border-white/10">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p 
                            className="text-gray-400 text-sm"
                            style={{ fontFamily: 'var(--font-libre-franklin), sans-serif', fontWeight: 300 }}
                        >
                            © {new Date().getFullYear()} Marci Metzger - The Ridge Realty. All rights reserved.
                        </p>
                        <div className="flex gap-6">
                            <a 
                                href="#privacy"
                                className="text-gray-400 hover:text-white text-sm transition-colors duration-300"
                                style={{ fontFamily: 'var(--font-libre-franklin), sans-serif', fontWeight: 300 }}
                            >
                                Privacy Policy
                            </a>
                            <a 
                                href="#terms"
                                className="text-gray-400 hover:text-white text-sm transition-colors duration-300"
                                style={{ fontFamily: 'var(--font-libre-franklin), sans-serif', fontWeight: 300 }}
                            >
                                Terms of Service
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
