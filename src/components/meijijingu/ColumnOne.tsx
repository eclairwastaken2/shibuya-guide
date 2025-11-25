export default function ColumnOne() {
    return (
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
    )
}