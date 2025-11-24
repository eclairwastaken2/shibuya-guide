import React from "react";
import DesktopCard from "../components/home/DesktopCard";
import MobileCard from "../components/home/MobileCard";
import { useIsMobile } from "../hooks/useIsMobile";
import { Link } from "react-router-dom";

export default function HomePage() {
    const isMobile = useIsMobile();

    const cards = [
        {
            image: "/centergai.jpg",
            title: "CENTER GAI",
            link: "/center-gai"
        },
        {
            image: "/shibuyacrossing.jpg",
            title: "SHIBUYA CROSSING",
            link: "/crossing"
        },
        {
            image: "/shibuyasky.jpg",
            title: "SHIBUYA SKY",
            link: "/sky"
        },
        {
            image: "/meijijingu/meijijingu.jpg",
            title: "MEIJI JINGU SHRINE",
            link: "/meiji-jingu"
        },
        {
            image: "/hachiko.jpg",
            title: "HACHIKO",
            link: "/hachiko"
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
                    <Link to={card.link} key={idx} className="block">
                        {isMobile ? (
                            <MobileCard key={idx} {...card} className="h-40" />
                        ) : (
                            <DesktopCard key={idx} {...card}  />
                        )}
                    </Link>
                )}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {bottomCards.map((card, idx) =>
                    <Link to={card.link} key={idx} className="block">
                        {isMobile ? (
                            <MobileCard key={idx} {...card} className="h-36" />
                        ) : (
                            <DesktopCard key={idx} {...card} />
                        )}
                    </Link>
                )}
            </div>
        </div>
    )
}