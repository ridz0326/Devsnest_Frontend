
import {Link} from 'react-router-dom'

const Navbar = () => {

    return (
        <>
            <section>
                <header class="text-gray-600 body-font justify-center">
                    <div class="mx-auto border-b-2 border-gray-400 border-opacity-25 w-full flex flex-wrap p-5 flex-col md:flex-row justify-between text-gray-900 items-center fixed">
                        <a class="flex title-font font-medium items-center text-gray-900 ml-8 mb-4 md:mb-0">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
                                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                            </svg>
                            <span class="ml-3 text-xl">Tailblocks</span>
                        </a>
                        <div className="flex">
                            <nav class="md:ml-auto w-full ml-auto mr-14 flex flex-row flex-wrap items-center text-base justify-center">
                                <Link class="mr-9 hover:text-gray-900" to="/">Home</Link>
                                <a class="mr-9 hover:text-gray-900">Discuss</a>
                                <a class="mr-9 hover:text-gray-900">Contact</a>

                                {/* <a class="mr-5 hover:text-gray-900">Fourth Link</a> */}
                                <Link to="/login" class="inline-flex items-center bg-black text-white border-0 py-2 px-6 focus:outline-none hover:bg-gray-800 rounded text-base mt-4 md:mt-0">Login
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 19">
                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                    </svg>
                                </Link>
                            </nav>
                        </div>
                    </div>
                </header>
            </section>

        </>
    )

}

export default Navbar;

