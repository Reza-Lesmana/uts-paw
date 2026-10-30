
import 
{ Link 

} from 'react-router-dom'

export default function KartuWisata(
    { item 
        
    }) {
  return (

    <article className="kartu-wisata">



      <div className="kartu-kategori">{item.kategori}</div>

      <h3>{item.judul}</h3>


      <p>📍 {item.kabupaten}</p>



      <p>🎟️ Rp{Number(item.hargaTiket).toLocaleString('id-ID')}</p>

      <p>🕒 {item.jamBuka}</p>

      <Link to={`/koleksi/${item.id}`} className="tombol-detail">
        Lihat Detail
      </Link>
    </article>
  )
}
