export default function ColumnThree() {
    return (
        <div className="bg-meijijingu-offwhite p-4 shadow">
            <h2 className="text-4xl font-fatface tracking-widest mb-2 text-center text-shadow-lg text-shadow-gray">ACCESS</h2>
            <div className="px-6 border-t">
                <div className="m-2 space-y-4">

                    <div className="grid grid-cols-2 gap-3">
                        <div className="font-fatface text-xl leading-tight">
                            SANGUBASHI<br />STATION
                        </div>
                        <div className="text-right text-xs leading-relaxed">
                            ODAKYU LINE<br />
                            3 min walk
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                        <div className="font-fatface text-xl leading-tight">
                            YOYOGI<br />STATION
                        </div>
                        <div className="text-right text-xs leading-relaxed">
                            JR Yamanote Line<br />
                            JR Chuo, Sobu Line<br />
                            Toei Oedo Line<br />
                            5 min walk
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                        <div className="font-fatface text-xl leading-tight">
                            HARAJUKU<br />STATION
                        </div>
                        <div className="text-right text-xs leading-relaxed">
                            JR Yamanote Line<br />
                            Tokyo Metro<br />
                            Chiyoda Line<br />
                            1 min walk
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                        <div className="font-fatface text-xl leading-tight">
                            KITA-SANDO<br />STATION
                        </div>
                        <div className="text-right text-xs leading-relaxed">
                            Tokyo Metro<br />
                            Fukutoshin Line<br />
                            5 min walk
                        </div>
                    </div>

                </div>

            </div>
            <h2 className="border-t border-b text-4xl font-fatface tracking-widest m-2 text-center text-shadow-lg text-shadow-gray">ETIQUETTE</h2>
            <div>
                <ul className="text-xs list-disc pl-5 space-y-2">
                    <li>Preserve the dignity of the shrine.</li>
                    <li>No smoking beyond designated areas.</li>
                    <li>No photography in sacred locations.</li>
                    <li>Do not remove natural items like branches.</li>
                    <li>No disruptive behavior.</li>
                </ul>
            </div>
        </div>
    )
}