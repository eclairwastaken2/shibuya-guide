import "./MeijiJinguPage.css"

export default function MeijijinguPage() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 h-auto md:h-screen overflow-auto md:overflow-hidden">
            <div className="bg-meijijingu-offwhite p-4 shadow flex flex-col justify-center">
                <div className="flex justify-center">
                    <img className="h-90 w-65" src="/meijijingu/column1.jpeg" alt="Shrine Building" />
                    <h1 className="text-5xl mt-5 font-extrabold font-fatface py-5 tracking-widest whitespace-nowrap [writing-mode:vertical-rl] text-shadow-lg text-shadow-gray">MEIJI JINGU </h1>
                </div>
                <div className="flex">
                    <div className="mt-3 flex justify-center align-center border-r">
                        <h1 className="text-red-950 text-4xl p-3 font-fatface">
                            OPEN
                            EVERY
                            <br></br>
                            DAY
                        </h1>
                    </div>
                    <div className="mt-3 ml-2 p-2">
                        <h5 className="font-fatface">Visit Now!</h5>
                        <p className="text-xs">Meiji Jingu is one of the Shinto shrines in Japan, with the vast land of the forest (70 ha.), located in the middle of the megacity, Tokyo.Once you step into this precinct, you will forget that you are in the hustle bustle city, and will find Japanese traditional scene amidst greenery nature.</p>
                    </div>
                </div>
            </div>
            <div className="bg-meijijingu-offwhite p-4 shadow">
                <div>
                    <h1 className="text-3xl font-fatface">What to See?</h1>
                </div>
                <div className="flex items-center border-t">
                    <div className="w-1/2 h-45 overflow-hidden m-3">
                        <img className="w-full h-full object-cover object-center" src="/meijijingu/column2.jpeg" alt="" />
                    </div>
                    <div className="w-1/2 m-3">
                        <h3 className="font-fatface">Sanctuary</h3>
                        <p className="text-xs">Meiji Jingu Shrine is a Shinto shrine in Tokyo, dedicated to the deified spirits of Emperor Meiji and Empress Shōken, whose roles in the Meiji Restoration helped modernize Japan. </p>
                    </div>
                </div>
                <div className="flex items-center border-t">
                    <div className="w-1/2 m-3">
                        <h3 className="font-fatface">Forest</h3>
                        <p className="text-xs">The sacred forest surrounding the main shrine buildings of Meiji Jingu may seem natural but is actually man-made. </p>
                    </div>
                    <div className="w-1/2 h-25 overflow-hidden m-3">
                        <img className="w-full h-full object-cover object-center" src="/meijijingu/column3.jpeg" alt="" />
                    </div>
                </div>
                <div className="flex items-center border-t">
                    <div className="w-1/2 h-36 overflow-hidden m-3">
                        <img className="w-full h-full object-cover object-center" src="/meijijingu/column23.jpg" alt="" />
                    </div>
                    <div className="w-1/2 m-3">
                        <h3 className="font-fatface">Museum</h3>
                        <p className="text-xs">The Meiji Jingu Museum was newly opened in 2019. It was designed by architect Kuma Kengo, who also designed Tokyo’s New National Stadium.  </p>
                    </div>
                </div>
            </div>
            <div className="bg-meijijingu-offwhite p-4 shadow">
                <h2 className="text-3xl font-black mb-4">Access</h2>

                <ul className="text-sm mb-6 space-y-2">
                    <li><strong>Harajuku Station</strong> – JR Yamanote Line</li>
                    <li><strong>Yoyogi Station</strong> – JR Chuo Line</li>
                    <li><strong>Sangubashi Station</strong> – Odakyu Line</li>
                    <li><strong>Kita-Sando Station</strong> – Metro Fukutoshin Line</li>
                </ul>

                <h2 className="text-3xl font-black mb-4">Etiquette</h2>

                <ul className="text-sm list-disc pl-5 space-y-2">
                    <li>Preserve the dignity of the shrine.</li>
                    <li>No smoking beyond designated areas.</li>
                    <li>No photography in sacred locations.</li>
                    <li>Do not remove natural items like branches.</li>
                    <li>No disruptive behavior.</li>
                </ul>
            </div>
        </div>
    )
}