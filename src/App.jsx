

import { useState } from 'react'
import './App.css'
import CardCharacter from './components/CardCharacter'
import InputSearch from './components/inputSearch'
import LocationInfo from './components/LocationInfo'
import about from "./img/about.jpg"
import useLocation from './hooks/useLocation'
import Loader from './components/loader'

function App() {
  const [searchlocation, setSearchlocation] = useState()
  const [location, loader] = useLocation(searchlocation)


  return (

    <>
      {loader ? <Loader /> :
        <div className="contenedor">


          <div className="container__head">
            <img className="about" src={about} alt="" />

          </div>
          <h1>Rick and Morty Wiki...</h1>
          <div className="container">

            <InputSearch setSearchLocation={setSearchlocation} />
            <LocationInfo

              location={location}
            />
            <div className="character">
              {
                location?.residents.map(resident => (
                  <CardCharacter
                    resident={resident}
                    key={resident}
                  />
                ))
              }
            </div>
          </div>

        </div>
      }
    </>



  )
}

export default App
