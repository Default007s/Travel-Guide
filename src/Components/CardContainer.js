import Card from "./Card"
import data from "../data"
import '../Styles/CardContainer.css'

export default function CardContainer() {
    const cards = data.map((card) => {
        return <Card 
                title = {card.title}
                location = {card.location}
                mapsLink = {card.mapsLink}
                startdate = {card.date.startdate}
                enddate = {card.date.enddate}
                description = {card.description}
                imageUrl = {card.imageUrl}
        />
    })
    return(
        <div className="CardContainer">
            {cards}
        </div>
    )
}