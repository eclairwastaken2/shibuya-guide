import { useState } from "react";
import "./CenterGaiPage.css"
import Neon from "../../components/centergai/Neon"
import Slider from "../../components/slider/Slider"
import SlideInit from "./SlideInit"
import SlideFashion from "./SlideFashion"
import SlideFood from "./SlideFood"
import SlideTravel from "./SlideTravel"
import { Link } from "react-router-dom";
import React from "react"

export default function CenterGaiPage() {
    const [activeSlide, setActiveSlide] = useState(0);
    const [currentIndex, setCurrentIndex] = useState(0); 
    return (
        <div>
            <Slider onSlideChange={setActiveSlide} currentIndex={currentIndex}>
                <SlideInit></SlideInit>
                <SlideFood></SlideFood>
                <SlideFashion></SlideFashion>
                <SlideTravel></SlideTravel>
            </Slider>

            <div className="right-column">
                <Neon onClick={() => setCurrentIndex(1)} textColor="#fff6d9" bgColor="#e62e00" font="var(--font-anton)" header="FOOD" className={activeSlide === 1 ? "scale-115" : "scale-100"} />
                <Neon onClick={() => setCurrentIndex(2)} bgColor="#16d0f5" textColor="white" font="var(--font-momo)" header="SHOP" className={activeSlide === 2 ? "scale-115" : "scale-100"} />
                <Neon onClick={() => setCurrentIndex(3)} textColor="white" bgColor="#ff17f0" font="var(--font-neon)" header="TRAVEL" className={activeSlide === 3 ? "scale-115" : "scale-100"} />
                <Link to={"/"} className="block z-20 text-white text-xl font-anton">
                    <div>back</div>
                </Link>
            </div>
        </div>
    )
}