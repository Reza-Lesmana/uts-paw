
import Navbar from '../components/navbar'

import useWisata from '../hooks/usewisata'

export default function Statistiknya() {
  const 
  { wisata, loading, error 

  } = useWisata()

  const totalWisata = wisata.length

  const totalTiket = wisata.reduce(
    (total, item) => total + Number(item.hargaTiket),
    0
  )

  const kategoriUnik = [...new Set(wisata.map((item) => item.kategori))]

  return (
    <>
      <Navbar />

      <main className="container halaman-statistik">
        <section className="judul-halaman">
          <p className="label-hero">DATA DESTINASI</p>
          <h1>Statistik Wisata</h1>
          <p>Ringkasan data destinasi wisata yang tersedia di Lampung.</p>
        </section>



        {loading && <p>Memuat data wisata...</p>}
        
        
        
        {error && <p>{error}</p>}

        {!loading && !error && (
          <>
            <section className="ringkasan-statistik">

              <div className="kartu-statistik">
                <h3>Total Wisata</h3>
                <p>{totalWisata}</p>
              </div>

              <div className="kartu-statistik">
                <h3>Jumlah Kategori</h3>


                <p>{kategoriUnik.length}</p>
              </div>

              <div className="kartu-statistik">

                <h3>Total Harga Tiket</h3>
                <p>Rp{totalTiket.toLocaleString('id-ID')}</p>
              </div>
            </section>

            <section className="tabel-statistik">
              <h2>Daftar Destinasi Wisata</h2>

              <div className="tabel-scroll">
                <table>
                  <thead>
                    <tr>
                      <th>No.</th>
                      <th>Nama Wisata</th>
                      <th>Kategori</th>
                      <th>Kabupaten/Kota</th>
                      <th>Harga Tiket</th>
                      <th>Jam Buka</th>
                    </tr>
                  </thead>

                  <tbody>
                    {wisata.map((item, index) => (
                      <tr key={item.id}>
                        <td>{index + 1}</td>
                        <td>{item.judul}</td>
                        <td>{item.kategori}</td>
                        <td>{item.kabupaten}</td>
                        <td>
                          Rp{Number(item.hargaTiket).toLocaleString('id-ID')}
                        </td>
                        <td>{item.jamBuka}</td>
                      </tr>
                    ))}

                    
                  </tbody>
                </table>
              </div>
            </section>
          </>
        )}
      </main>
    </>
  )
}
