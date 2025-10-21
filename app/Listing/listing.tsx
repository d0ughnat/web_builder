'use client';

import { Bed, Bath, Maximize, MapPin } from 'lucide-react';

export default function Listing() {
    const properties = [
        {
            id: "2563111",
            address: "4751 W Adkisson Street",
            city: "Pahrump, NV",
            price: "$1,950,000",
            bedrooms: 4,
            bathrooms: 5,
            sqft: "5,530",
            acres: "80",
            status: "Active",
            description: "This exquisite 5530 sq ft custom home nestled against the mountains with an enchanting 80+ acres is a masterpiece of luxury and sophistication.",
            image: "https://img1.wsimg.com/isteam/stock/3395/:/cr=t:11.02%25,l:0%25,w:100%25,h:77.95%25/rs=w:600,h:300,cg:true"
        },
        {
            id: "2705063",
            address: "2221 W Windsong Lane",
            city: "Pahrump, NV",
            price: "$1,500,000",
            bedrooms: 3,
            bathrooms: 3,
            sqft: "1,876",
            acres: "5",
            status: "Active",
            description: "Experience the perfect blend of history, nature, and versatility at this remarkable 5-acre estate.",
            image: "https://img1.wsimg.com/isteam/stock/107927/:/rs=w:600,h:300,cg:true,m/cr=w:600,h:300"
        },
        {
            id: "2710513",
            address: "5520 N Leslie Street",
            city: "Pahrump, NV",
            price: "$1,490,999",
            bedrooms: 3,
            bathrooms: 4,
            sqft: "2,780",
            acres: "8.8",
            status: "Active",
            description: "Sophisticated luxury meets unmatched functionality. Situated on nearly 9 acres of land stretching toward the mountains.",
            image: "https://img1.wsimg.com/isteam/stock/771/:/cr=t:5.36%25,l:1.76%25,w:96.47%25,h:89.29%25/rs=w:600,h:300,cg:true,m"
        },
        {
            id: "2656180",
            address: "3780 E Kellogg Road",
            city: "Pahrump, NV",
            price: "$1,285,000",
            bedrooms: 1,
            bathrooms: 9,
            sqft: "4,991",
            acres: "2.5",
            status: "Active",
            description: "Approximately 4,991 sq. foot building with 225 Square Foot 2nd level video room, and an additional 572 square foot space.",
            image: "https://img1.wsimg.com/isteam/stock/3395/:/cr=t:11.02%25,l:0%25,w:100%25,h:77.95%25/rs=w:600,h:300,cg:true"
        },
        {
            id: "2693223",
            address: "760 Fort Churchill Road",
            city: "Pahrump, NV",
            price: "$1,280,000",
            bedrooms: 4,
            bathrooms: 4,
            sqft: "2,215",
            acres: "0.7",
            status: "Active",
            description: "Timeless design-modern comfort, eco-conscious features, and versatile functionality on a fully landscaped ¾-acre lot.",
            image: "https://img1.wsimg.com/isteam/stock/107927/:/rs=w:600,h:300,cg:true,m/cr=w:600,h:300"
        },
        {
            id: "2712622",
            address: "1560 Fort Churchill Road",
            city: "Pahrump, NV",
            price: "$1,200,000",
            bedrooms: 3,
            bathrooms: 2,
            sqft: "5,200",
            acres: "4.5",
            status: "Active",
            description: "Open floor plan with kitchen, great room and side room with display area. Excellent insulation with trussed ceiling.",
            image: "https://img1.wsimg.com/isteam/stock/771/:/cr=t:5.36%25,l:1.76%25,w:96.47%25,h:89.29%25/rs=w:600,h:300,cg:true,m"
        },
        {
            id: "2715772",
            address: "4892 Quail Run Road",
            city: "Pahrump, NV",
            price: "$1,100,000",
            bedrooms: 3,
            bathrooms: 2,
            sqft: "1,950",
            acres: "4+",
            status: "Active",
            description: "This beautiful Santa Fe–style home welcomes you with Spanish-tile steps, double doors on over 14.1 acres.",
            image: "https://img1.wsimg.com/isteam/stock/3395/:/cr=t:11.02%25,l:0%25,w:100%25,h:77.95%25/rs=w:600,h:300,cg:true"
        },
        {
            id: "2688913",
            address: "2851 Winchester Avenue",
            city: "Pahrump, NV",
            price: "$975,000",
            bedrooms: 4,
            bathrooms: 4,
            sqft: "2,877",
            acres: "2.24",
            status: "Active",
            description: "Luxury living with wide-open spaces & panoramic mountain views. Single-story custom home features refined interiors.",
            image: "https://img1.wsimg.com/isteam/stock/107927/:/rs=w:600,h:300,cg:true,m/cr=w:600,h:300"
        },
        {
            id: "2719702",
            address: "1221 Marion Miller",
            city: "Pahrump, NV",
            price: "$970,000",
            bedrooms: 4,
            bathrooms: 4,
            sqft: "3,658",
            acres: "1.14",
            status: "Active",
            description: "This 4 bed, 4 bath home offers spacious living with a family room, game room, and AV/media room in most sought-after area.",
            image: "https://img1.wsimg.com/isteam/stock/771/:/cr=t:5.36%25,l:1.76%25,w:96.47%25,h:89.29%25/rs=w:600,h:300,cg:true,m"
        },
        {
            id: "2724837",
            address: "1830 E Fuchsia Street",
            city: "Pahrump, NV",
            price: "$959,900",
            bedrooms: 3,
            bathrooms: 3,
            sqft: "2,561",
            acres: "2.031",
            status: "Active",
            description: "Stunning 3 bedroom, 3 bath home offers the perfect blend of comfort, charm, and lifestyle perfect for family.",
            image: "https://img1.wsimg.com/isteam/stock/3395/:/cr=t:11.02%25,l:0%25,w:100%25,h:77.95%25/rs=w:600,h:300,cg:true"
        },
        {
            id: "2700439",
            address: "3600 E Bridger Street",
            city: "Pahrump, NV",
            price: "$950,000",
            bedrooms: 4,
            bathrooms: 4,
            sqft: "3,587",
            acres: "2",
            status: "Active",
            description: "Exquisite living space with 4 bedrooms and 3.5 bathrooms, plus 1 bed/1 bath in the 576 sq ft detached casita.",
            image: "https://img1.wsimg.com/isteam/stock/107927/:/rs=w:600,h:300,cg:true,m/cr=w:600,h:300"
        },
        {
            id: "2689837",
            address: "2181 E Winery Road",
            city: "Pahrump, NV",
            price: "$949,000",
            bedrooms: 5,
            bathrooms: 4,
            sqft: "3,716",
            acres: "2.5",
            status: "Active",
            description: "Courtyard has access to Main entry, Studio Casita & Guest quarters. Auto gated RV parking that backs up to desert.",
            image: "https://img1.wsimg.com/isteam/stock/771/:/cr=t:5.36%25,l:1.76%25,w:96.47%25,h:89.29%25/rs=w:600,h:300,cg:true,m"
        }
    ];

    return (
        <div className="relative min-h-screen bg-white pt-32 pb-20 px-8 overflow-hidden">
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
                {/* Header */}
                <div className="text-center mb-16">
                    <h1 
                        className="text-6xl font-bold text-gray-900 mb-4"
                        style={{ fontFamily: 'var(--font-libre-baskerville), serif', fontWeight: 700 }}
                    >
                        Available Properties
                    </h1>
                    <p 
                        className="text-xl text-gray-700"
                        style={{ fontFamily: 'Avenir LT Pro, Avenir, sans-serif', fontWeight: 400 }}
                    >
                        Discover exceptional homes in Pahrump, Nevada
                    </p>
                    <div className="mt-6 flex items-center justify-center gap-4">
                        <span 
                            className="text-gray-600"
                            style={{ fontFamily: 'var(--font-libre-franklin), sans-serif', fontWeight: 400 }}
                        >
                            {properties.length} properties available
                        </span>
                        <span className="text-gray-400">|</span>
                        <span 
                            className="text-gray-600"
                            style={{ fontFamily: 'var(--font-libre-franklin), sans-serif', fontWeight: 400 }}
                        >
                            $200K - $2M
                        </span>
                    </div>
                </div>

                {/* Property Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {properties.map((property) => (
                        <div 
                            key={property.id}
                            className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group cursor-pointer"
                        >
                            {/* Image */}
                            <div className="relative h-64 overflow-hidden">
                                <img 
                                    src={property.image}
                                    alt={property.address}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute top-4 right-4 bg-black text-white px-3 py-1 rounded-full text-sm font-medium">
                                    {property.status}
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6 space-y-4">
                                {/* Price */}
                                <div className="flex items-center justify-between">
                                    <h3 
                                        className="text-3xl font-bold text-gray-900"
                                        style={{ fontFamily: 'var(--font-libre-baskerville), serif', fontWeight: 700 }}
                                    >
                                        {property.price}
                                    </h3>
                                </div>

                                {/* Address */}
                                <div className="flex items-start gap-2">
                                    <MapPin className="w-5 h-5 text-gray-500 shrink-0 mt-1" />
                                    <div>
                                        <p 
                                            className="font-semibold text-gray-900"
                                            style={{ fontFamily: 'var(--font-libre-franklin), sans-serif', fontWeight: 600 }}
                                        >
                                            {property.address}
                                        </p>
                                        <p 
                                            className="text-sm text-gray-600"
                                            style={{ fontFamily: 'var(--font-libre-franklin), sans-serif', fontWeight: 400 }}
                                        >
                                            {property.city}
                                        </p>
                                    </div>
                                </div>

                                {/* Property Details */}
                                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                                    <div className="flex items-center gap-2">
                                        <Bed className="w-5 h-5 text-gray-600" />
                                        <span 
                                            className="text-sm font-medium text-gray-700"
                                            style={{ fontFamily: 'var(--font-libre-franklin), sans-serif' }}
                                        >
                                            {property.bedrooms} Bed
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Bath className="w-5 h-5 text-gray-600" />
                                        <span 
                                            className="text-sm font-medium text-gray-700"
                                            style={{ fontFamily: 'var(--font-libre-franklin), sans-serif' }}
                                        >
                                            {property.bathrooms} Bath
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Maximize className="w-5 h-5 text-gray-600" />
                                        <span 
                                            className="text-sm font-medium text-gray-700"
                                            style={{ fontFamily: 'var(--font-libre-franklin), sans-serif' }}
                                        >
                                            {property.sqft} sqft
                                        </span>
                                    </div>
                                </div>

                                {/* Description */}
                                <p 
                                    className="text-gray-600 text-sm leading-relaxed line-clamp-2"
                                    style={{ 
                                        fontFamily: 'Avenir LT Pro, Avenir, sans-serif', 
                                        fontWeight: 400 
                                    }}
                                >
                                    {property.description}
                                </p>

                                {/* Acres Badge */}
                                <div className="pt-2">
                                    <span 
                                        className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-medium"
                                        style={{ fontFamily: 'var(--font-libre-franklin), sans-serif' }}
                                    >
                                        {property.acres} acres
                                    </span>
                                </div>

                                {/* View Details Button */}
                                <button 
                                    className="w-full mt-4 px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition-colors duration-300 font-medium"
                                    style={{ fontFamily: 'var(--font-libre-franklin), sans-serif', fontWeight: 400 }}
                                >
                                    View Details
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
