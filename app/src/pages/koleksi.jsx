
import Navbar from '../components/navbar'
import KartuWisata from '../components/kartuwisata'
import useWisata from '../hooks/usewisata'
import usePencarian from '../hooks/usepencarian'
import { Link } from 'react-router-dom'

export default function Koleksi() 


{
  const { wisata, loading, error, hapusWisata } = useWisata()

  const { kataKunci, setKataKunci, hasilPencarian } = usePencarian(wisata)

  return (
    <>
      <Navbar />

      <main className="container halaman-koleksi">
        <section className="judul-halaman">

          <p className="label-hero">JELAJAHI LAMPUNG YUK</p>
          <h1>Koleksi Wisata</h1>
          <p>Temukan berbagai destinasi menarik di Provinsi Lampung.</p>
        </section>

        <section className="pencarian">
            <input

            type="search"
            aria-label="Cari wisata"
            placeholder="Cari nama destinasi wisata..."
            value={kataKunci}
            onChange={(e) => setKataKunci(e.target.value)}
          />
          <p>Ditemukan {hasilPencarian.length} destinasi wisata</p>

        </section>

        {loading && <p>Memuat data wisata...</p>}


        {error && <p>{error}</p>}

        {!loading && !error && (
          <div className="grid-wisata">


            {hasilPencarian.length > 0 ? (
              hasilPencarian.map((item) => (
  <div key={item.id}>
    <KartuWisata item={item} />

    <button
      className="tombol-hapus"
      onClick={() => {
        const yakin = window.confirm(
          `Apakah kamu yakin ingin menghapus ${item.judul}?`
        )

        if (yakin) {
          hapusWisata(item.id)
        }
      }}
    >
      Hapus Wisata
    </button>
  </div>
))
            ) : (



              <p>Wisata yang kamu cari tidak ditemukan.</p>
            )}

          </div>

        )}


      </main>
    </>
  )
}
