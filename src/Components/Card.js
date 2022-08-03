import '../Styles/Card.css'

export default function Card(props) {
    return(
        <div className="Card">
            <div className="cardSect1">
                <img src={props.imageUrl}></img>
            </div>
            <div className="cardSect2">
                <div className='firstRow'>
                    <p className="location">
                        <span className="material-symbols-outlined icon">location_on</span>
                        <span className='countryName'>{props.location}</span>
                    </p>
                    <a className="mapsLink" href={props.mapsLink}>View on Google Maps</a>
                </div>
                <h1 className="title">{props.title}</h1>
                <p className="date">{props.startdate} - {props.enddate}</p>
                <p className="desciption">{props.description}</p>
            </div>
        </div>
    )
}