import React from "react"; 


interface NeonProps {
    textColor: string, 
    bgColor: string, 
    font: string, 
    header: string, 
    className: string
}

const Neon: React.FC<NeonProps> = ({ textColor, bgColor, font, header, className }) => {
    return (
        <div className={`vertical-lr mb-6 p-3 neon-sign ${className} transition`}
        style={{ fontFamily: font, color: textColor, background: bgColor, ["--glow" as any]: bgColor}}>{header}</div>
    )
}

export default Neon; 