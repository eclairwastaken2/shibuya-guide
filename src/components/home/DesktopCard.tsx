import React from "react";
import type CardProps from "../../types/card";

const DesktopCard: React.FC<CardProps> = ({ image, title, onClick, className }) => {
    return (
        <div
            onClick={onClick}
            className={`relative cursor-pointer overflow-hidden  
                        transform transition-transform duration-300 hover:scale-102
                        ${className} border-newspaper-gray border-2 h-52`}
        >
            <div className="relative">
                <img src={image} alt={title} className="grayscale hover:grayscale-0 duration-300" />
                {(title) && (
                    <div className="max-h-50 break-normal absolute top-0 left-0 vertical-lr text-xl font-bold">
                        {title && <h3 className="font-bold break-normal text-lg text-stroke-custom text-white">{title}</h3>}
                    </div>
                )}
            </div>
        </div>
    )
}

export default DesktopCard; 