export default function SlideTravel() {
    return (
        <div className="relative ">
            <img
                src="/centergai.jpg"
                className="w-full h-screen object-cover"
            />
            <div className="absolute inset-0 bg-black/70"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-95%"></div>
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex flex-col items-center text-center gap-4">
                    <h1 className="text-6xl md:text-9xl text-indigo-50 mb-3 font-rubic">TRAVEL</h1>
                    <p className="text-indigo-50 max-w-85  md:max-w-3xl text-sm md:text-xl font-mono">
                        Shibuya Center-Gai is a great starting point for exploring Shibuya and nearby areas. From here, you’re steps away from the famous Shibuya Scramble Crossing, Shibuya Station, and landmarks like Hachiko Statue. The narrow streets are lively day and night, filled with neon, food stalls, and music. It’s also within walking distance of Shibuya Stream, Spain-zaka, and the modern Shibuya Sky observatory, making it a convenient base for sightseeing and soaking in Tokyo’s vibrant nightlife energy.                    </p>
                </div>
            </div>
        </div>
    )
}