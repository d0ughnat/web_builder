


export default function Home() {
    return (
        <>
        <div 
            className="relative text-left pl-20 min-h-screen bg-cover bg-center bg-no-repeat flex flex-col justify-center border-8 border-white rounded-3xl" 
            style={{
                backgroundImage: 'url("https://img1.wsimg.com/isteam/ip/067a4d42-19e8-46d9-9bed-578bf62dd44e/mtn%20falls%20pond.jpg/:/rs=w:1920,m")',
                backgroundSize: 'cover',
                imageRendering: 'auto',
                WebkitBackgroundSize: 'cover',
                MozBackgroundSize: 'cover',
                OBackgroundSize: 'cover',
                backfaceVisibility: 'hidden',
                WebkitFontSmoothing: 'antialiased'
            } as React.CSSProperties}
        >
            <div className="absolute inset-0 bg-black opacity-40 rounded-3xl"></div>
            <div className="relative z-10 mt-20">
                <h1 className="text-6xl font-bold leading-tight mb-8 text-white">
                    <span style={{ fontFamily: 'Avenir LT Pro, Avenir, sans-serif', fontWeight: 400 }}>Your </span>
                    <span style={{ fontFamily: 'var(--font-libre-baskerville), serif', fontWeight: 400, fontStyle: 'italic' }}>Trusted</span>
                    <span style={{ fontFamily: 'Avenir LT Pro, Avenir, sans-serif', fontWeight: 400 }}> Pahrump Realtor <br />
                    Turning Dreams Into Addresses.</span>
                </h1>
                <button 
                    className="bg-white text-black py-2 px-16 rounded-full text-lg font-normal shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer"
                    style={{ fontFamily: 'var(--font-libre-franklin), sans-serif' }}
                >
                    Call Now
                </button>
            </div>
        </div>
        </>
    )
}