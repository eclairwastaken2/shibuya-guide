export default function SlideFood() {
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
                    <h1 className="text-6xl md:text-9xl text-indigo-50 mb-3 font-rubic">FOOD</h1>
                    <p className="text-indigo-50 max-w-85  md:max-w-3xl text-sm md:text-xl font-mono">
                        Ichiran Ramen (Ramen Place), Niku Yokocho (Izakayas in various qualities), Uobei Shibuya Dogenzaka (high-tech conveyor belt sushi), JBS Bar (atmospheric bar with calming music), 
                        The Great Burger (American Burgers but make it gourmet)
                    </p>
                </div>
            </div>
        </div >
    )
}