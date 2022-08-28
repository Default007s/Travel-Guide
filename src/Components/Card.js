import '../Styles/Card.css'

export default function Card( {imageUrl, location, mapsLink, title, startdate, enddate, description, id} ) {
    return(
        <div className='singleCard'>
            <div className="Card">
                <div className="cardSect1">
                    <img src={imageUrl}></img>
                </div>
                <div className="cardSect2">
                    <div className='firstRow'>
                        <p className="location">
                            <span className="material-symbols-outlined icon">location_on</span>
                            <span className='countryName'>{location}</span>
                        </p>
                        <a className="mapsLink" href={mapsLink}>View on Google Maps</a>
                    </div>
                    <h1 className="title">{title}</h1>
                    <p className="date">{startdate} - {enddate}</p>
                    <p className="desciption">{description}</p>
                </div>
            </div>
            {id < 3 && <hr></hr>}
        </div>
    )
}