
import 

{ createContext, useEffect, useRef, useState } from 'react'

export const WisataContext = createContext

(

)


export function WisataProvider({ children }) {

  const [wisata, setWisata] = useState([])

  const [loading, setLoading]    = useState(true)



  const [error, setError] = useState('')

  const dataSudahDimuat = useRef(false)

  useEffect(() => 
    {
    async function ambilData() {

      try 
      {
        const dataTersimpan = localStorage.getItem('dataWisata')

        if (dataTersimpan !== null) 
            
            {


          setWisata(JSON.parse(dataTersimpan))

        } else 
            {
          const response = await fetch
          
          
          
          (
            `${import.meta.env.BASE_URL}data/koleksi.json`
          )

          if 
          (!response.ok) 
            {
            throw new Error
            
            
            ('Data wisata gagal dimuat')
          }

          const data = await response.json()


          setWisata(data)
        }
      } catch (err) 
      {
        setError
        
        
        (err.message)
      } finally {
        dataSudahDimuat.current = true
        setLoading(false)
      }
    }

    ambilData()
  }, [])

  useEffect(() => {
    if (dataSudahDimuat.current) {
      localStorage.setItem
      ('dataWisata', JSON.stringify(wisata))
    }
  }, [wisata])

  function tambahWisata(dataBaru) {
    const dataTersimpan = localStorage.getItem('dataWisata')
    const wisataSaatIni = dataTersimpan
      ? JSON.parse(dataTersimpan)
      : wisata

    const wisataBaru = [...wisataSaatIni, dataBaru]

    localStorage.setItem('dataWisata', JSON.stringify(wisataBaru))
    setWisata(wisataBaru)
  }

  function hapusWisata(id) {
    const wisataBaru = wisata.filter((item) => item.id !== id)

    localStorage.setItem('dataWisata', JSON.stringify(wisataBaru))
    setWisata(wisataBaru)
  }

  return (
    <WisataContext.Provider
      value={{

        wisata,

        setWisata,

        loading,

        error,

        tambahWisata,
        hapusWisata
      }}
    >
      {children}

      
    </WisataContext.Provider>
 


)
}
