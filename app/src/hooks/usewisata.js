import 
{ useContext } 
from 'react'



import 
{ WisataContext } from '../context/wisatacontext'

export default function useWisata
(

) 
{
  const context = useContext(WisataContext)

  if (!context) {

    throw new Error('useWisata harus digunakan di dalam WisataProvider yaaa:)')
  }

  return context


}