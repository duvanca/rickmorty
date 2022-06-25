

import { useState } from 'react'
import './App.css'
import CardCharacter from './components/CardCharacter'
import InputSearch from './components/InputSearch'
import LocationInfo from './components/LocationInfo'
import about from "./img/about.jpg"
import useLocation from './hooks/useLocation'
import Loader from './components/Loader'
import Pagination from './components/Pagination'

function App() {
  const [searchlocation, setSearchlocation] = useState()
  const [location, loader] = useLocation(searchlocation)
  const [currentPage, setCurrentPage] = useState(1)

  let arrayResidents = []
  const residentPerPage = 6
  if (location?.residents.length < residentPerPage) {
    arrayResidents = [...location?.residents]
  } else {
    const lastResident = currentPage * residentPerPage
    arrayResidents = location?.residents.slice(lastResident - residentPerPage, lastResident)
  }

  let arrayPages = []
  let quantityPages = Math.ceil(location?.residents.length / residentPerPage) // 11 = cantidad paginas máximas
  const pagesPerBlock = 5
  let currentBlock = Math.ceil(currentPage / pagesPerBlock) // 2 = segundo bloque
  // Analiza si estamos en el último(true) o no(false)
  if (currentBlock * pagesPerBlock >= quantityPages) {
    // Cuando es el último bloque
    for (let i = currentBlock * pagesPerBlock - pagesPerBlock + 1; i <= quantityPages; i++) {
      arrayPages.push(i)
    }
  } else {
    // cuando no es el último bloque
    for (let i = currentBlock * pagesPerBlock - pagesPerBlock + 1; i <= currentBlock * pagesPerBlock; i++) {
      arrayPages.push(i)
    }
  }
 console.log(arrayResidents)


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
            <Pagination
               arrayPages={arrayPages}
               currentPage={currentPage}
               setCurrentPage={setCurrentPage}
               quantityPages={quantityPages}
             />
            <div className="character">
              {
            arrayResidents?.map(resident => (
                  <CardCharacter
                    resident={resident}
                    key={resident}
                  />
                ))
              }
            </div>
          </div>

          <Pagination
               arrayPages={arrayPages}
               currentPage={currentPage}
               setCurrentPage={setCurrentPage}
               quantityPages={quantityPages}
             />

        </div>
      }
    </>



  )
}

export default App
