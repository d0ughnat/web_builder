import Footer from "../Footer/page";
import Header from "../Header/page";
import CTA from "../Landing/cta";
import Listing from "./listing";


export default function ListingPage() {
    return (
        <div>
            <Header />
            <Listing />
            <CTA />
            <Footer />
        </div>
    );
}