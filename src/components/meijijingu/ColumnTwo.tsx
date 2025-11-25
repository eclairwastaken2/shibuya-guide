export default function ColumnTwo() {
    return (
        <div className="bg-meijijingu-offwhite p-4 shadow">
            <div>
                <h1 className="text-3xl font-fatface mb-2">What to See?</h1>
            </div>
            <div className="flex items-center border-t">
                <div className="w-1/2 h-45 overflow-hidden m-3">
                    <img className="w-full h-full object-cover object-center" src="/meijijingu/column2.jpeg" alt="" />
                </div>
                <div className="w-1/2 m-3">
                    <h3 className="font-fatface">Sanctuary</h3>
                    <p className="text-xs">Meiji Jingu Shrine is a Shinto shrine in Tokyo, dedicated to the deified spirits of Emperor Meiji and Empress Shōken, whose roles in the Meiji Restoration helped modernize Japan. </p>
                </div>
            </div>
            <div className="flex items-center border-t">
                <div className="w-1/2 m-3">
                    <h3 className="font-fatface">Forest</h3>
                    <p className="text-xs">The sacred forest surrounding the main shrine buildings of Meiji Jingu may seem natural but is actually man-made. </p>
                </div>
                <div className="w-1/2 h-25 overflow-hidden m-3">
                    <img className="w-full h-full object-cover object-center" src="/meijijingu/column3.jpeg" alt="" />
                </div>
            </div>
            <div className="flex items-center border-t">
                <div className="w-1/2 h-36 overflow-hidden m-3">
                    <img className="w-full h-full object-cover object-center" src="/meijijingu/column23.jpg" alt="" />
                </div>
                <div className="w-1/2 m-3">
                    <h3 className="font-fatface">Museum</h3>
                    <p className="text-xs">The Meiji Jingu Museum was newly opened in 2019. It was designed by architect Kuma Kengo, who also designed Tokyo’s New National Stadium.  </p>
                </div>
            </div>
        </div>
    )
}