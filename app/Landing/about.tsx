export default function About() {
    return (
        <div className="relative min-h-screen bg-white py-20 px-8">
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
                    src="https://img1.wsimg.com/isteam/stock/87390/:/cr=t:7.34%25,l:0%25,w:85.32%25,h:85.32%25/rs=w:1920,m"
                    alt="Real Estate"
                    className="w-600 h-150 rounded-2xl shadow-lg"
                />
            </div>
        </div>
    )
}
