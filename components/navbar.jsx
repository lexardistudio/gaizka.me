
export default function Navbar() {
    return (

        <>
            <nav className="bg-body h-48 items-center justify-between flex lg:px-12 sm:px-6">
                <div className="items-center flex ">
                    <p className="text-intro lg:text-lg sm:xs">
                        I'm Gaizka&nbsp;&nbsp;
                    </p>
                    <a>
                        <svg width="40px" height="1" className="text-intro">
                            <path fill-rule="evenodd" d="M0 0h66v4H0z">
                            </path>
                        </svg>
                    </a>
                    <p className="text-intro text-lg capitalize">
                        &nbsp;&nbsp;Available for freelance Work
                    </p>
                </div>
                <div className="items-center flex">
                    <p className="text-intro lg:text-lg sm:xs">
                        About&nbsp;&nbsp;
                    </p>
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
