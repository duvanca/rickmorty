import axios from 'axios'
import { useEffect, useState } from 'react'


const useLocation = searchlocation => {
  
    const [location, setLocation] = useState()
    const [loader, setLoader] = useState(true)
    
    useEffect(() => {
      
      let randonLocation

      if(searchlocation=== undefined){
        randonLocation = Math.ceil(Math.random() * 126)
      }else{
        randonLocation = searchlocation
      }

      const URL = `https://rickandmortyapi.com/api/location/${randonLocation}`
      
      axios.get(URL)
        .then(res => {setLocation(res.data)
          setLoader(false)
        }
        )
        .catch(err => console.error(err))
    }, [searchlocation])
  
   return [location, loader]
}

export default useLocation 