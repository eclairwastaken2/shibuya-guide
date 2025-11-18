import "./CenterGaiPage.css"
import Neon from "../components/centergai/Neon"

export default function CenterGaiPage() {
    return (
        <div className="bg-[#090429] min-h-screen">
            <div className="right-column">
                <Neon textColor="#fff6d9" bgColor="#e62e00" font="var(--font-anton)" header="FOOD" />
                <Neon bgColor="#16d0f5" textColor="white" font="var(--font-momo)" header="SHOP" />
                <Neon textColor="white" bgColor="#ff17f0" font="var(--font-neon)" header="TRAVEL" />
            </div>
        </div>
    )
}