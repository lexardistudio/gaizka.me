import Link from "next/link"

export default function AboutNavbar () {
    return (

        <>
            <nav className="bg-body h-48 items-center justify-between flex lg:px-12 sm:px-6">
                <div className="items-center flex ">
                    <h1 className="text-intro lg:text-lg sm:xs">
                        I'm Gaizka&nbsp;&nbsp;
                    </h1>
                    <a>
                        <svg width="40px" height="1" className="text-intro">
                            <path fill-rule="evenodd" d="M0 0h66v4H0z">
                            </path>
                        </svg>
                    </a>
                    <h1 className="text-intro text-lg capitalize">
                        &nbsp;&nbsp;Available for freelance Work
                    </h1>
                </div>
                <div className="items-center flex">
                    <h1 className="text-intro lg:text-lg sm:xs">
                        <a>
                            <Link href='/'> Home&nbsp;&nbsp;</Link>
                        </a>
                    </h1>
                    <a>
                        <svg width="20" height="11" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.285.668l-.506.506 4.146 4.148H.392v.717h17.533l-4.146 4.147.506.506 5.012-5.012z" fill="#F3F2F4" fill-rule="evenodd">
                            </path>
                        </svg>
                    </a>

                </div>
            </nav>
        </>

    )
}
