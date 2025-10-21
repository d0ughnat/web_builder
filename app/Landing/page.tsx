import Home from "./hero";
import Header from "../Header/page";
import About from "./about";
import Company from "./company";
import OurService from "./ourService";
import Projects from "./projects";
import CTA from "./cta";
import Footer from "../Footer/page";
import Sold from "./sold";

export default function LandingPage() {
    return (
        <>
            <Header />
            <Home />
            <About />
            <Company />
            <Sold />
            <OurService />
            <Projects />
            <CTA />
            <Footer />
        </>
    )
}