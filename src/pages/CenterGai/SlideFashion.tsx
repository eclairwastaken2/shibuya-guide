export default function SlideFashion() {
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
                    <h1 className="text-6xl md:text-9xl text-indigo-50 mb-3 font-rubic">SHOP</h1>
                    <p className="text-indigo-50 max-w-85  md:max-w-3xl text-sm md:text-xl font-mono">
                        While the main street features popular global and Japanese fast-fashion brands, the complex surrounding area also contains major lifestyle and discount stores. Key shops and chains include the massive MEGA Don Quijote (a 24-hour discount store), the multi-story specialty goods store Shibuya Loft, and major drugstores like Tsuruha Drug, alongside various Game Centers (Arcades), Karaoke Boxes, and Izakayas.
                    </p>
                </div>
            </div>
        </div>
    )
}