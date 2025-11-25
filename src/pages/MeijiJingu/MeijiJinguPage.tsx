import "./MeijiJinguPage.css"
import ColumnOne from "../../components/meijijingu/ColumnOne"
import ColumnTwo from "../../components/meijijingu/ColumnTwo"
import ColumnThree from "../../components/meijijingu/ColumnThree"

export default function MeijijinguPage() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 h-auto md:h-screen overflow-auto md:overflow-hidden">
            <ColumnOne />
            <ColumnTwo />
            <ColumnThree />
        </div>
    )
}