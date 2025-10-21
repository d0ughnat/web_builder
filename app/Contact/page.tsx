'use client';

import CTA from '../Landing/cta';
import Footer from '../Footer/page';
import Contact from './contact';
import Header from '../Header/page';

export default function ContactPage() {
    return (
        <>
            <Header />
            <Contact />
            <CTA />
            <Footer />
        </>
    );
}
