import 
{ Link, useParams, useNavigate

} from 'react-router-dom'

import Navbar from '../components/navbar'


import useWisata from '../hooks/usewisata'

export default function DetailWisata() 

{
  const 
  { id } = useParams()
  const navigate = useNavigate()

  const 
  { wisata, loading, error, hapusWisata 


  } = useWisata()

  const item = wisata.find((data) => data.id === id)

  function handleHapus() {
    const yakin = window.confirm(
      `Apakah kamu yakin ingin menghapus ${item.judul}?`
    )

    if (yakin) {
      hapusWisata(item.id)
      navigate('/koleksi')
    }
  }

  return (
    <>
      <Navbar />


      <main className="container halaman-detail">



        {loading && <p>Memuat data wisata...</p>}

        {error && <p>{error}</p>}

        {!loading && !error && !item && (
          <section className="pesan-kosong">
            <h1>Wisata Tidak Ditemukan</h1>

            <p>Destinasi wisata tidak ditemukan.</p>


            <Link to="/koleksi" className="tombol-utama">
              Kembali ke Koleksi
            </Link>
          </section>
        )

        }

        {!loading && !error && item && (
          <section className="detail-konten">
            <Link to="/koleksi">← Kembali ke Koleksi</Link>

            <p className="label-hero">INFORMASI DESTINASI</p>
            <h1>{item.judul}</h1>


            <span className="kartu-kategori">{item.kategori}</span>

            <div className="detail-informasi">
              <div>
                <h3>Kabupaten/Kota</h3>
                <p>{item.kabupaten}</p>
              </div>

              <div>
                <h3>Harga Tiket</h3>
                <p>Rp{Number(item.hargaTiket).toLocaleString('id-ID')}</p>
              </div>

              <div>
                <h3>Jam Buka</h3>
                <p>{item.jamBuka}</p>
              </div>
            </div>

            <button
              type="button"
              className="tombol-hapus"
              onClick={handleHapus}
            >
              Hapus Wisata
            </button>
          </section>
        )


        }
      </main>
    </>
  )


}