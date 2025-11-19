import "./CenterGaiPage.css"
import Neon from "../components/centergai/Neon"

export default function CenterGaiPage() {
    return (
        <div className="bg-[#090429] min-h-screen">
            <div className="relative ">
                <img
                    src="/centergai.jpg"
                    className="w-full h-screen object-cover"
                />  
                <div className="absolute inset-0 bg-black/70"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-95%"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex flex-col items-center text-center gap-4">
                        <h1 className="text-9xl text-indigo-50 mb-3 font-rubic">CENTER GAI</h1>
                        <p className="text-indigo-50 max-w-85  md:max-w-3xl text-xl font-mono">
                            Center Gai refers to Shibuya Center-Gai, a vibrant, narrow pedestrian street in the Shibuya district of Tokyo, Japan. It's a popular hub for youth culture, known for its bustling atmosphere with neon lights, trendy fashion stores, diverse restaurants, and entertainment options like arcades and pachinko parlors. It is a focal point for experiencing the lively and modern side of Tokyo.
                        </p>
                    </div>
                </div>
            </div>
            <div className="right-column">
                <Neon textColor="#fff6d9" bgColor="#e62e00" font="var(--font-anton)" header="FOOD" />
                <Neon bgColor="#16d0f5" textColor="white" font="var(--font-momo)" header="SHOP" />
                <Neon textColor="white" bgColor="#ff17f0" font="var(--font-neon)" header="TRAVEL" />
            </div>

        </div>
    )
}