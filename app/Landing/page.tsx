import Home from "./hero";
import Header from "../Header/page";
import About from "./about";
import Company from "./company";

export default function LandingPage() {
    return (
        <>
            <Header />
            <Home />
            <About />
            <Company />
        </>
    )
}