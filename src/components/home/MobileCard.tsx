import React from "react"; 
import type CardProps from "../../types/card";


const MobileCard: React.FC<CardProps> = ({ image, title, className }) => {
    return (
        <div
            className={`relative cursor-pointer overflow-hidden rounded-xl shadow-lg 
                        transform transition-transform duration-300 hover:scale-102 h-50
                        ${className}`}
        >
            <div className="relative">
                <img src={image} alt={title} />
                {(title) && (
                    <div className="max-h-50 break-normal absolute top-0 left-0 vertical-lr text-xl font-bold">
                        {title && <h3 className="font-bold break-normal text-lg text-stroke-custom text-white">{title}</h3>}
                    </div>
                )}
            </div>
        </div>
    )
}


export default MobileCard