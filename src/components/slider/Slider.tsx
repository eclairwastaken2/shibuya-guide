import { motion, AnimatePresence } from "framer-motion"; 
import React, { useState } from "react"; 

interface SliderProps {
    children: React.ReactNode; 
    height?: string; 
}

export default function Slider({ children, height = "h-64" }: SliderProps) {
    const slides = React.Children.toArray(children); 
    const [index, setIndex] = useState(0); 
    const [direction, setDirection] = useState(1);

    const paginate = (dir: number) => {
        setDirection(dir); 
        setIndex((prev) => {
            return dir > 0
                ? (prev + 1) % slides.length
                : (prev - 1 + slides.length) % slides.length
        })
    }; 

    const variants = {
        enter: (dir: number) => ({
            x: dir > 0 ? 200 : -200, 
            opacity: 0, 
        }), 
        center: { x: 0, opacity: 1 }, 
        exit: (dir: number) => ({
            x: dir > 0 ? -200 : 200, 
            opacity: 0
        }), 
    }; 
}