const Navbar = () => {

    return (
        <header className="bg-gray-100" aria-label="Page Header">
            <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-4 sm:py-6 lg:px-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                <div className="text-center sm:text-left">
                    <h1 className="text-1xl font-bold text-gray-900 sm:text-2xl">
                        Next JS / Xarala Workshop
                    </h1>
                </div>

                <div className="mt-4 flex flex-col gap-4 sm:mt-0 sm:flex-row sm:items-center">
                    <a
                    href="https://www.xarala.co/fr/workshop/creez-votre-premiere-application-avec-react-et-nextjs" target="_blank"
                    className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-gray-200 px-5 py-3 text-gray-500 transition hover:bg-gray-50 hover:text-gray-700 focus:outline-none focus:ring"
                    >
                    <span className="text-sm font-medium"> Revoir </span>

                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                    >
                        <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                    </svg>
                    </a>

                    <a
                    href="https://github.com/daoodaba975" target="_blank"
                    className="block rounded-lg bg-gray-800 px-5 py-3 text-sm font-medium text-white transition hover:bg-gray-700 focus:outline-none focus:ring"
                    >
                        GitHub
                    </a>
                </div>
                </div>
            </div>
        </header>
    )
}

export default Navbar