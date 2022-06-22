import Navbar from "./navbar"
import Footer from "./footer"
import HeroHome from "./heroHome"

export default function Layout({ children }) {
    return (
        <>
            <div className='flex flex-col h-screen justify-between'>
                <Navbar />
                <HeroHome />
                <Footer />
            </div>
            <Footer />

        </>

    )
}