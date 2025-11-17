import React from "react";
import DesktopCard from "../components/home/DesktopCard";
import MobileCard from "../components/home/MobileCard";
import { useIsMobile } from "../hooks/useIsMobile";

export default function HomePage(){
    const isMobile = useIsMobile(); 

    const cards = [
        {
            image: "/centergai.jpg", 
            title: "CENTER GAI", 
            onClick: () => alert("Clicked center gai")
        },
        {
            image: "/shibuyacrossing.jpg",
            title: "SHIBUYA CROSSING", 
            onClick: () => alert("Clicked shibuya crossing")
        },
        {
            image: "/shibuyasky.jpg", 
            title: "SHIBUYA SKY", 
            onClick: () => alert("Clicked Shibuya Sky")
        },
        {
            image: "/meijijingu.jpg", 
            title: "MEIJI JINGU SHRINE", 
            onClick: () => alert("Clicked meijijingu")
        },
        {
            image: "/hachiko.jpg", 
            title: "HACHIKO", 
            onClick: () => alert("Clicked hachiko")       
        }
    ]; 

    const topCards = cards.slice(0, 2);
    const bottomCards = cards.slice(2);  

    return (
        <div className="w-full mx-auto p-3 space-y-4">

            <div className="bg-newspaper-gray w-full font-jersey text-white text-7xl font-bold py-3 text-center tracking-widest">
                SHIBUYA GUIDE
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {topCards.map((card, idx) => 
                    isMobile ? (
                        <MobileCard key={idx} {...card} className="h-40" />
                    ) : (
                        <DesktopCard key={idx} {...card} className="h-40" />
                    )
                )}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {bottomCards.map((card, idx) =>     
                    isMobile ? (
                        <MobileCard key={idx} {...card} className="h-36" />
                    ) : (
                        <DesktopCard key={idx} {...card} className="h-40" />
                    )
                )}
            </div>
        </div>
    )
}