
import 
{ Link } from 'react-router-dom'
import Navbar from '../components/navbar'

import KartuWisata 
from '../components/kartuwisata'
import useWisata from '../hooks/usewisata'

export default 
function Beranda() 
{
  const 
  { wisata, loading, error 

  } = useWisata()

  return (
    <>
      <Navbar />

      <main className="container">

        <section className="hero">
          <p className="label-hero">JELAJAHI LAMPUNG YUK</p>
          <h1>Temukan Keindahan Wisata Lampung</h1>
          <p>
            Dari pantai yang memukau hingga wisata alam yang menenangkan,
            temukan destinasi menarik untuk perjalananmu bestie
          </p>

          <Link to="/koleksi" className="tombol-utama">
            Jelajahi Wisata

          </Link>
        </section>

        <section className="bagian-wisata">

          <div className="judul-bagian">



            <div>
              <p className="label-hero">REKOMENDASI</p>


              <h2>Destinasi Wisata</h2>

            </div>

            <Link to="/koleksi">Lihat semua →</Link>

          </div>

          {loading && <p>Memuat data wisata...</p>}


          {error && <p>{error}</p>}

          {!loading && !error && (
            <div className="grid-wisata">


              {wisata.slice(0, 3).map((item) => (


                <KartuWisata key={item.id} item={item} />

              ))}
            </div>
          )}
        </section>
      </main>
    </>
  )
}
