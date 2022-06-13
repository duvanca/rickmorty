import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Loader from './loader'

const CardCharacter = ({ resident }) => {

    const [character, setCharacter] = useState()
    const [ loading, setLoading] =useState(true)

    useEffect(() => {
        axios.get(resident)
            .then(res => {setCharacter(res.data)
             setLoading(false)})
            .catch(err => (console.log(err)))
    }, [])
    

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
            
            <div className="card__container__img">
                <h4><i style={character?.status === "Alive" ? alive : character?.status === "Dead" ? dead : character?.status === "unknown" ? unknown : nown} class='bx bx-radio-circle' ></i> <span>Status:</span> {character?.status}</h4>
                <img className="card__img" src={character?.image} alt="imagenpersonaje" />
            </div>
            <div className="card__inf"> 
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