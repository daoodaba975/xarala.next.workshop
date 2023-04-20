const Body = () => {
    return (
        <section className="bg-gray-50">
            <div
                className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center"
            >
                <div className="mx-auto max-w-xl text-center">
                <h1 className="text-3xl font-extrabold sm:text-5xl text-gray-900">
                    Next JS
                    <strong className="font-extrabold text-orange-500 sm:block">
                    Xarala Workshop
                    </strong>
                </h1>

                <p className="mt-4 sm:text-xl/relaxed text-gray-900">
                    Workshop avec Xarala pour créez votre première application avec React et NextJS 🚀
                </p>

                <div className="mt-8 flex flex-wrap justify-center gap-4">
                    <a
                    className="block w-full rounded bg-orange-500 px-12 py-3 text-sm font-medium text-white shadow hover:bg-orange-600 focus:outline-none focus:ring active:bg-orange-500 sm:w-auto"
                    href="https://www.xarala.co/fr/workshop/creez-votre-premiere-application-avec-react-et-nextjs" target="_blank"
                    >
                    Revoir le Replay
                    </a>
                </div>
                </div>
            </div>
        </section>
    )
}

export default Body