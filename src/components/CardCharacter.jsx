import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Loader from './Loader'

const CardCharacter = ({ resident }) => {

    const [character, setCharacter] = useState()
    const [ loading, setLoading] =useState(true)

    useEffect(() => {
        axios.get(resident)
            .then(res => {setCharacter(res.data)
             setLoading(false)})
            .catch(err => (console.log(err)))
    }, [])
    
    console.log(character)

    const dead = {
        color: 'red'
    }
    const alive = {
        color: "#CCEB01"
    }
    const unknown = {
        color: "gb(161, 155, 155)"
    }
    const nown = {
        color: "gb(161, 155, 155)"
    }


    return (

        <>
        {loading? <Loader/>:
        <article className="card">
            
            <div className="card__inf"> 
            <div className="card__container__img">
                <img className="card__img" src={character?.image} alt="imagenpersonaje" />
                <h4 className="title_img"><i style={character?.status === "Alive" ? alive : character?.status === "Dead" ? dead : character?.status === "unknown" ? unknown : nown} class='bx bx-radio-circle' ></i> <span>Status:</span> {character?.status}</h4>
            </div>
                <h2>{character?.name}</h2>
                <h4> <span>Birthplace:</span> {character?.origin.name}</h4>
                <h4> <span>Appearance in episodes:</span> {character?.episode.length}</h4>
                <h4> <span>specie:</span> {character?.species}</h4>
            </div>

        </article>
         }
        </>

    )
}

export default CardCharacter