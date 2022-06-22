import Typed from 'typed.js'
import { useEffect, useRef } from 'react'
import Image from 'next/image'

export default function HeroHome() {
    const el = useRef(null);

    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ["Kaixo", "Hello", "Agur"], // Strings to display
            // Speed settings, try diffrent values untill you get good results
            startDelay: 100,
            typeSpeed: 200,
            backSpeed: 200,
            backDelay: 100,
            loop: true,
        });

        // Destropying
        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <>
            <div class="pt-48 bg-black h-screen">
                <div class="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">
                    <div class="flex-col w-full lg:w-2/4 justify-center items-start text-center md:text-left">
                        <span className="font-robo text-6xl text-slate-600" ref={el}></span>
                        <h1 className='font-mont font-normal text-6xl text-gray-600 pt-6'>I'm Gaizka</h1>
                        <p className='text-3xl font-robo text-gray-600 pt-6' data-aos="fade-in">Frontend Developer</p>

                    </div>
                    <div class="flex-col w-full lg:w-2/4 justify-center items-center text-center md:text-left bg-red-400" data-aos="fade-in">
                        <h1>prueba aos
                            
                        </h1>
                    </div>
                </div>
            </div>
        </>
    )
}