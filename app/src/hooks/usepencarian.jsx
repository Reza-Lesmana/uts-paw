import 
{ useState 

} from 'react'

export default 
function usePencarian
(data) 
{
  const [kataKunci, setKataKunci] 
  = useState('')

  const hasilPencarian = data.filter((item) =>

    item.judul.toLowerCase

    ().includes(kataKunci.toLowerCase()
)
  )

  return {


    kataKunci,
    setKataKunci,
    hasilPencarian


  
}
}