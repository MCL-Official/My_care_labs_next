export const YT_Video = () => {
    return (
        <div>
            <section className="bg-white ">
                <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 grid lg:grid-cols-2 gap-8 lg:gap-16">
                    <div className="flex flex-col justify-center">
                        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-black">Testing Made Easy</h1>
                        <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">My Care Labs Was Founded During The Covid-19 Pandemic. All of our testing solutions revolve around our patients convenience. From in lab visits to our at-home test kits. We always strive to support the overlooked or underserved communities.</p>
                        <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0">

                        </div>
                    </div>
                    <div>
                        <iframe className="mx-auto w-full lg:max-w-xl h-64 rounded-lg sm:h-96 shadow-xl"
                            src="https://www.youtube.com/embed/ZSE3s32KjE8"
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        // allowfullscreen
                        >
                        </iframe>
                    </div>
                </div>
            </section>
        </div>
    )
}