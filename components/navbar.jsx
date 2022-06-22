import Link from 'next/link'


export default function Navbar() {
    return (
        <>
            <nav className='bg-blue-400 items-center flex justify-between px-6 h-20 w-full fixed'>
                <div className="flex bg-green-400">
                    <Link href="/">
                        <a>
                            <h1 className="font-robo text-4xl link-underline link-underline-black">
                                home
                            </h1>
                        </a>
                    </Link>
                </div>
                <div className="flex bg-green-400 ">
                    <Link href="/about">
                        <a>
                            <h1 className="font-robo text-4xl link-underline link-underline-black">
                                about
                            </h1>
                        </a>
                    </Link>
                </div>
                <div className="flex bg-green-400">
                    <Link href="/dev">
                        <a>
                            <h1 className="font-robo text-4xl link-underline link-underline-black">
                                dev
                            </h1>
                        </a>
                    </Link>
                </div>
            </nav>
        </>
    )
}