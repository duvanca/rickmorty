import React from 'react'


const LocationInfo = ({ location }) => {
    return (
        <article className="article">

            <div className="article__info">
                <h3><span>Dmension :  </span>  {location?.dimension}</h3>
                <h3><span>Type :  </span>  {location?.type}</h3>
                <h3><span>N° Residents :  </span>  {location?.residents.length}</h3>
            </div>
        </article>
    )
}

export default LocationInfo