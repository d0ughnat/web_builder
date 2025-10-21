
"use client";
export default function Company() {
    const logos = [
        {
            src: "https://img1.wsimg.com/isteam/ip/067a4d42-19e8-46d9-9bed-578bf62dd44e/BIG%20CIRCLE%202.png/:/rs=h:100,cg:true,m",
            alt: "Company Logo 1"
        },
        {
            src: "https://img1.wsimg.com/isteam/ip/067a4d42-19e8-46d9-9bed-578bf62dd44e/Equal%20Housing%20Logo.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=h:100,cg:true",
            alt: "Equal Housing Logo"
        },
        {
            src: "https://img1.wsimg.com/isteam/ip/067a4d42-19e8-46d9-9bed-578bf62dd44e/Realtor%20Pin.jpg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=h:100,cg:true",
            alt: "Realtor Pin"
        },
        {
            src: "https://img1.wsimg.com/isteam/ip/067a4d42-19e8-46d9-9bed-578bf62dd44e/Chamber.jpg/:/rs=h:100,cg:true,m",
            alt: "Chamber"
        }
    ];

    return (
        <div className="relative min-h-[30vh] py-16 px-8 overflow-hidden">
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
                <h3 
                    className="text-center text-3xl mb-12 text-gray-800"
                    style={{ fontFamily: 'var(--font-libre-baskerville), serif', fontWeight: 400 }}
                >
                    Trusted Partnerships
                </h3>
                
                <div className="relative overflow-hidden">
                    <style jsx>{`
                        @keyframes scroll {
                            0% {
                                transform: translateX(0);
                            }
                            100% {
                                transform: translateX(-50%);
                            }
                        }
                        .animate-scroll {
                            animation: scroll 20s linear infinite;
                        }
                        .animate-scroll:hover {
                            animation-play-state: paused;
                        }
                    `}</style>
                    
                    <div className="flex animate-scroll">
                        {/* First set of logos */}
                        {logos.map((logo, index) => (
                            <div
                                key={`first-${index}`}
                                className="shrink-0 mx-12 flex items-center justify-center"
                                style={{ width: '200px' }}
                            >
                                <img
                                    src={logo.src}
                                    alt={logo.alt}
                                    className="h-20 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
                                />
                            </div>
                        ))}
                        {/* Duplicate set for seamless loop */}
                        {logos.map((logo, index) => (
                            <div
                                key={`second-${index}`}
                                className="shrink-0 mx-12 flex items-center justify-center"
                                style={{ width: '200px' }}
                            >
                                <img
                                    src={logo.src}
                                    alt={logo.alt}
                                    className="h-20 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}