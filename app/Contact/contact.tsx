'use client';

import { Mail, Phone, MapPin, Clock } from 'lucide-react';

export default function Contact() {
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
                        Get In Touch
                    </h1>
                    <p 
                        className="text-xl text-gray-700"
                        style={{ fontFamily: 'Avenir LT Pro, Avenir, sans-serif', fontWeight: 400 }}
                    >
                        Ready to find your dream home? Contact us today
                    </p>
                </div>

                {/* Two Column Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Left Side - Contact Information */}
                    <div className="space-y-8">
                        {/* Company Name */}
                        <div>
                            <h2 
                                className="text-3xl font-bold text-gray-900 mb-2"
                                style={{ fontFamily: 'var(--font-libre-baskerville), serif', fontWeight: 700 }}
                            >
                                Marci Metzger
                            </h2>
                            <p 
                                className="text-xl text-gray-700 uppercase tracking-wide"
                                style={{ fontFamily: 'var(--font-libre-franklin), sans-serif', fontWeight: 400 }}
                            >
                                THE RIDGE REALTY GROUP
                            </p>
                        </div>

                        {/* Address */}
                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-gray-100 rounded-full shrink-0">
                                <MapPin className="w-6 h-6 text-gray-700" />
                            </div>
                            <div>
                                <h3 
                                    className="text-lg font-bold text-gray-900 mb-2"
                                    style={{ fontFamily: 'var(--font-libre-baskerville), serif', fontWeight: 700 }}
                                >
                                    Office Location
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
                                    3190 HW-160, Suite F<br />
                                    Pahrump, Nevada 89048<br />
                                    United States
                                </p>
                            </div>
                        </div>

                        {/* Email */}
                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-gray-100 rounded-full shrink-0">
                                <Mail className="w-6 h-6 text-gray-700" />
                            </div>
                            <div>
                                <h3 
                                    className="text-lg font-bold text-gray-900 mb-2"
                                    style={{ fontFamily: 'var(--font-libre-baskerville), serif', fontWeight: 700 }}
                                >
                                    Email Us
                                </h3>
                                <a 
                                    href="mailto:marci@theridgerealty.com"
                                    className="text-gray-700 hover:text-gray-900 transition-colors duration-300"
                                    style={{ 
                                        fontFamily: 'Avenir LT Pro, Avenir, sans-serif', 
                                        fontWeight: 400,
                                        fontSize: '16px'
                                    }}
                                >
                                    marci@theridgerealty.com
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Phone & Hours */}
                    <div className="space-y-8">
                        {/* Phone */}
                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-gray-100 rounded-full shrink-0">
                                <Phone className="w-6 h-6 text-gray-700" />
                            </div>
                            <div>
                                <h3 
                                    className="text-lg font-bold text-gray-900 mb-2"
                                    style={{ fontFamily: 'var(--font-libre-baskerville), serif', fontWeight: 700 }}
                                >
                                    Call Us
                                </h3>
                                <a 
                                    href="tel:+12069196886"
                                    className="text-3xl font-bold text-gray-900 hover:text-gray-700 transition-colors duration-300"
                                    style={{ 
                                        fontFamily: 'var(--font-libre-baskerville), serif', 
                                        fontWeight: 700
                                    }}
                                >
                                    (206) 919-6886
                                </a>
                            </div>
                        </div>

                        {/* Office Hours */}
                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-gray-100 rounded-full shrink-0">
                                <Clock className="w-6 h-6 text-gray-700" />
                            </div>
                            <div className="flex-1">
                                <h3 
                                    className="text-lg font-bold text-gray-900 mb-3"
                                    style={{ fontFamily: 'var(--font-libre-baskerville), serif', fontWeight: 700 }}
                                >
                                    Office Hours
                                </h3>
                                <div className="space-y-2 mb-4">
                                    <div className="flex justify-between items-center py-2 border-b border-gray-200">
                                        <span 
                                            className="text-gray-700 font-medium"
                                            style={{ fontFamily: 'Avenir LT Pro, Avenir, sans-serif', fontWeight: 500 }}
                                        >
                                            Open today
                                        </span>
                                        <span 
                                            className="text-gray-900 font-semibold"
                                            style={{ fontFamily: 'Avenir LT Pro, Avenir, sans-serif', fontWeight: 600 }}
                                        >
                                            08:00 am – 07:00 pm
                                        </span>
                                    </div>
                                    <div className="flex justify-between items-center py-2">
                                        <span 
                                            className="text-gray-700 font-medium"
                                            style={{ fontFamily: 'Avenir LT Pro, Avenir, sans-serif', fontWeight: 500 }}
                                        >
                                            Open daily
                                        </span>
                                        <span 
                                            className="text-gray-900 font-semibold"
                                            style={{ fontFamily: 'Avenir LT Pro, Avenir, sans-serif', fontWeight: 600 }}
                                        >
                                            8:00 am - 7:00 pm
                                        </span>
                                    </div>
                                </div>
                                <p 
                                    className="text-gray-600 text-sm italic leading-relaxed"
                                    style={{ 
                                        fontFamily: 'Avenir LT Pro, Avenir, sans-serif', 
                                        fontWeight: 400,
                                        fontSize: '15px',
                                        lineHeight: '24px'
                                    }}
                                >
                                    Appointments outside office hours available upon request. Just call!
                                </p>
                            </div>
                        </div>

                        {/* CTA Button */}
                        <div className="pt-6">
                            <a 
                                href="tel:+12069196886"
                                className="inline-block px-8 py-4 bg-black text-white rounded-full hover:bg-gray-800 transition-all duration-300 text-lg font-medium"
                                style={{ fontFamily: 'var(--font-libre-franklin), sans-serif', fontWeight: 400 }}
                            >
                                Schedule a Consultation
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
