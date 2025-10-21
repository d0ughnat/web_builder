export default function CTA() {
    return (
        <div className="relative py-24 px-8 overflow-hidden flex items-center" style={{ backgroundColor: '#d3ffce' }}>
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

            <div className="relative z-10 max-w-7xl mx-auto w-full">
                <div className="flex flex-col md:flex-row items-center justify-between gap-16">
                    {/* Left Side - CTA Content */}
                    <div className="w-full md:w-1/2 space-y-8">
                        <h2 
                            className="text-6xl font-bold text-gray-900 leading-tight"
                            style={{ fontFamily: 'var(--font-libre-baskerville), serif', fontWeight: 700 }}
                        >
                            Find your<br />ideal space
                        </h2>
                        
                        <p 
                            className="text-2xl text-gray-800 font-medium leading-relaxed"
                            style={{ 
                                fontFamily: 'Avenir LT Pro, Avenir, sans-serif', 
                                fontWeight: 500,
                                fontSize: '24px',
                                lineHeight: '36px'
                            }}
                        >
                            Discover premium Pahrump properties with expert guidance—your dream home awaits with competitive pricing and unmatched local market expertise.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <button 
                                className="px-8 py-4 bg-black text-white rounded-full hover:bg-gray-800 transition-colors duration-300 text-lg font-medium"
                                style={{ fontFamily: 'var(--font-libre-franklin), sans-serif', fontWeight: 400 }}
                            >
                               <a href="/Listing">Available Properties</a>
                            </button>
                            <button 
                                className="px-8 py-4 border-2 border-black text-black rounded-full hover:bg-black hover:text-white transition-all duration-300 text-lg font-medium"
                                style={{ fontFamily: 'var(--font-libre-franklin), sans-serif', fontWeight: 400 }}
                            >
                                <a href="/Contact">Contact Us</a>
                            </button>
                        </div>
                    </div>

                    {/* Right Side - MARCI METZGER Watermark */}
                    <div className="w-full md:w-1/2 relative flex flex-col justify-center h-[280px]">
                        {/* MARCI - positioned on top left */}
                        <div className="absolute top-0 left-0">
                            <h1 
                                className="text-[8rem] font-normal select-none"
                                style={{
                                    fontFamily: 'Avenir LT Pro, Avenir, sans-serif',
                                    fontWeight: 700,
                                    WebkitTextStroke: '2px rgba(0, 0, 0, 0.1)',
                                    color: 'rgba(0, 0, 0, 0.03)',
                                    lineHeight: '1',
                                    letterSpacing: '0.02em'
                                }}
                            >
                                MARCI
                            </h1>
                        </div>

                        {/* METZGER - positioned on bottom, offset to the right */}
                        <div className="absolute top-24 left-32">
                            <h1 
                                className="text-[8rem] font-normal select-none"
                                style={{
                                    fontFamily: 'Avenir LT Pro, Avenir, sans-serif',
                                    fontWeight: 700,
                                    WebkitTextStroke: '2px rgba(0, 0, 0, 0.1)',
                                    color: 'rgba(0, 0, 0, 0.03)',
                                    lineHeight: '1',
                                    letterSpacing: '0.02em'
                                }}
                            >
                                METZGER
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
