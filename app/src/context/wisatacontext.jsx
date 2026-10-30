import 

{ createContext, useEffect, useState } from 'react'

export const WisataContext = createContext

(

)


export function WisataProvider({ children }) {

  const [wisata, setWisata] = useState([])

  const [loading, setLoading]    = useState(true)



  const [error, setError] = useState('')

  useEffect(() => 
    {
    async function ambilData() {

      try 
      {
        const dataTersimpan = localStorage.getItem('dataWisata')

        if (dataTersimpan) 
            
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
        setLoading(false)
      }
    }

    ambilData()
  }, [])

  useEffect(() => {
    if (!loading) {
      localStorage.setItem
      ('dataWisata', JSON.stringify(wisata))
    }
  }, [wisata, loading])

  function tambahWisata(dataBaru) {
    setWisata([...wisata, dataBaru])
  }

  function hapusWisata(id) {
    setWisata(wisata.filter
        ((item) => item.id !== id)
    )
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