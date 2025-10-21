


'use client';

import { useEffect, useState } from 'react';

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        let scrollTimeout: NodeJS.Timeout | null = null;

        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            
            // Show header when scrolling
            setVisible(true);
            setScrolled(currentScrollY > 50);
            
            // Clear existing timeout
            if (scrollTimeout) {
                clearTimeout(scrollTimeout);
            }
            
            // Hide header after 2 seconds of no scrolling (only if scrolled down)
            if (currentScrollY > 50) {
                scrollTimeout = setTimeout(() => {
                    setVisible(false);
                }, 2000);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
            if (scrollTimeout) {
                clearTimeout(scrollTimeout);
            }
        };
    }, []);

    return (
        <header 
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
                scrolled ? 'backdrop-blur-md bg-black/80 shadow-lg' : ''
            } ${
                visible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
            }`}
        >
            <div className="container mx-auto px-8 py-6 flex justify-between items-center">
                <div className="flex items-center">
                    <img 
                        src="https://img1.wsimg.com/isteam/ip/067a4d42-19e8-46d9-9bed-578bf62dd44e/blob-6c0c2e0.png/:/rs=h:167,cg:true,m/qt=q:95"
                        alt="Pahrump Realty Logo"
                        className="h-16"
                        style={{ filter: 'brightness(0) invert(1)' }}
                    />
                </div>
                
                <nav className="flex space-x-8 items-center">
                    <a 
                        href="#contact" 
                        className="text-white hover:text-gray-200 transition-colors text-lg font-normal"
                        style={{ fontFamily: 'var(--font-libre-franklin), sans-serif', fontWeight: 400 }}
                    >
                        Contact Us
                    </a>
                    <a 
                        href="#available" 
                        className="text-white transition-colors text-lg font-normal border border-white px-4 py-2 rounded-3xl hover:bg-white hover:text-black"
                        style={{ fontFamily: 'var(--font-libre-franklin), sans-serif', fontWeight: 400 }}
                    >
                        Available Properties
                    </a>
                </nav>
            </div>
        </header>
    );
}
