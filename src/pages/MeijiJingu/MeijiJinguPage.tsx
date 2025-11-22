
export default function MeijijinguPage() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 h-auto md:h-screen overflow-auto md:overflow-hidden">
            <div className="bg-meijijingu-white p-4 rounded shadow">
                <h2>Some content</h2>
            </div>
            <div className="bg-meijijingu-red p-4 rounded shadow">
                <h2>Some other content</h2>
            </div>
            <div className="bg-meijijingu-white p-4 rounded shadows">
                <h2>Other content</h2>
            </div>
        </div>
    )
}