import Navbar from "../components/navbar"
import Footer from "../components/footer"

export default function About() {
    return (
        <>
            <Navbar />
            <div className="flex flex-col ml-6 pt-24">
                <h1 className="font-mont font-bold text-8xl">
                SERVICES
                </h1>
                <h1 className="font-joan text-8xl text-gray-700/50">
                I CAN OFFER
                </h1>
            </div>
            <div className="pt-16">
                <div class="grid grid-row-2 gap-1 py-4 border-2 border-gray-900 mx-64 bg-gray-400/60">
                    <div class="row-end-2" data-aos="fade-right">
                        <h1 className="uppercase text-8xl font-mont ml-6 font-bold">branding</h1>
                    </div>
                    <div class="col-start-1 justify-center pt-6 ml-96 mr-32" data-aos="fade-right">
                        <h1 className="uppercase text-xl font-robo mr-0 ">
                            Your visual identity is important, your brand, even more so.
                            While I do create recognizable identity systems, I don’t stop
                            there. My branding process focuses on how you communicate with
                            your audience and how to build meaningful relationships.
                            By being process-driven, I won’t leave you with guesswork on
                            how to continue utilizing your new identity. Each project receives
                            custom brand guidelines to help your team apply and grow the initial systems.
                        </h1>
                    </div>
                </div>
            </div>
            <div className="pt-6">
                <div class="grid grid-row-2 gap-1 py-4 border-2 border-gray-900 mx-64 bg-gray-200/60">
                    <div class="row-end-2">
                        <h1 className="uppercase text-8xl font-joan ml-6">graphic</h1>
                    </div>
                    <div></div>
                    <div class="col-start-2 justify-center pt-6 mr-12">
                        <h1 className="uppercase text-xl font-robo mr-0 ">
                            My design approach is rooted in classic principles. I believe every
                            design element should have a functional, as well as aesthetic, purpose.
                            But, that’s not the entire story. I also believe a perfect system should
                            be broken, but in the right places. Therefore, you could say my design
                            approach is klasik, but not exactly.
                            A crucial part of this process is my style exploration. Here I take all
                            of our research and connect it with different visual styles to create a
                            guideline from which the entire project can grow.
                        </h1>
                    </div>
                </div>
            </div>
            <div className="pt-6">
                <div class="grid grid-row-2 gap-1 py-4 border-2 border-gray-900 mx-64 bg-gray-400/60">
                    <div class="row-end-2">
                        <h1 className="uppercase text-8xl font-robo ml-6">digital</h1>
                    </div>
                    <div class="col-start-2 justify-center pt-36 mr-12">
                        <h1 className="uppercase text-xl font-robo mr-0 ">
                            When we work together, I don’t believe in “the big reveal”, but in the
                            joint step-by-step approach. By using detailed wireframes, prototypes
                            and motion design snippets to give you a better understanding of how
                            something will function before it goes live.
                        </h1>
                    </div>
                </div>
            </div>
            <div className="pt-6 pb-6">
                <div class="grid grid-row-2 gap-1 py-4 border-2 border-gray-900 mx-64 bg-gray-200/60">
                    <div class="row-end-2">
                        <h1 className="uppercase text-8xl font-joan ml-6">develop</h1>
                    </div>
                    <div></div>
                    <div class="col-start-2 justify-center pt-6 ml-6 mr-12">
                        <h1 className="uppercase text-xl font-robo mr-0 ">
                        The digital landscape has quickly become a field businesses and brands 
                        cannot afford to ignore. With new technologies emerging every year it 
                        can be difficult to stay up to date with all the current trends. That’s 
                        why I utilize up-to-date technologies and techniques to create the best 
                        digital experiences.
                        </h1>
                    </div>
                </div>
            </div>
            <Footer />
        </>

    )
}