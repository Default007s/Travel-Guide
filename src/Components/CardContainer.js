import Card from "./Card"
import data from "../data"
import '../Styles/CardContainer.css'

export default function CardContainer() {
    const cards = data.map((card) => {
        return <Card {...card} />
    })
    return(
        <div className="CardContainer">
            {cards}
        </div>
    )
}