
import 
{ useState } from 'react'
import 
{ useNavigate } from 'react-router-dom'


import Navbar from '../components/navbar'
import useWisata from '../hooks/usewisata'

export default function TambahWisata() 
{
  const { tambahWisata, wisata 


  } = useWisata()
  const navigate = useNavigate()

  const [form, setForm] = useState(
    
    {
    judul: '',
    kategori: '',
    kabupaten: '',
    hargaTiket: '',
    jamBuka: ''
  })

  const [error, setError] = useState('')

  function handleChange(e) {
    const 
    { name, value } = e.target

    setForm(
        
        {
      ...form,
      [name]: value
    })
  }

  function handleSubmit(e) 
  {
    e.preventDefault()

    if (
      !form.judul.trim() ||
      !form.kategori.trim() ||
      !form.kabupaten.trim() ||
      !form.hargaTiket ||
      !form.jamBuka.trim()
    ) {
      setError('Semua kolom wajib diisi ya.')
      return
    }

    if (Number(form.hargaTiket) < 0) 
        
        {
      setError('Harga tiket gak boleh negatif.')
      return
    }

    const judulSudahAda = wisata.some(
      (item) => item.judul.toLowerCase() === form.judul.trim().toLowerCase()
    )

    if (judulSudahAda) {
      setError('Nama destinasi wisata udah ada nih.')
      return
    }

    const dataBaru = {
      id: Date.now().toString(),
      judul: form.judul.trim(),
      kategori: form.kategori.trim(),
      kabupaten: form.kabupaten.trim(),
      hargaTiket: Number(form.hargaTiket),
      jamBuka: form.jamBuka.trim()
    }

    tambahWisata(dataBaru)
    navigate('/koleksi')
  }

  return (
    <>
      <Navbar />

      <main className="container halaman-tambah">
        <section className="judul-halaman">
          <p className="label-hero">TAMBAHKAN DESTINASI</p>
          <h1>Tambah Wisata</h1>
          <p>Masukkan informasi destinasi wisata baru di Lampung.</p>
        </section>

        <form className="form-wisata" onSubmit={handleSubmit}>
          <label htmlFor="judul">Nama Wisata</label>
          <input
            id="judul"
            name="judul"
            value={form.judul}
            onChange={handleChange}
            placeholder="Contoh: Pantai Mutun"
          />

          <label htmlFor="kategori">Kategori</label>
          <input
            id="kategori"
            name="kategori"
            value={form.kategori}
            onChange={handleChange}
            placeholder="Contoh: Pantai"
          />

          <label htmlFor="kabupaten">Kabupaten/Kota</label>
          <input
            id="kabupaten"
            name="kabupaten"
            value={form.kabupaten}
            onChange={handleChange}
            placeholder="Contoh: Pesawaran"
          />

          <label htmlFor="hargaTiket">Harga Tiket (Rp)</label>
          <input
            id="hargaTiket"
            name="hargaTiket"
            type="number"
            min="0"
            value={form.hargaTiket}
            onChange={handleChange}
            placeholder="Contoh: 25000"
          />

          <label htmlFor="jamBuka">Jam Buka</label>
          <input
            id="jamBuka"
            name="jamBuka"
            value={form.jamBuka}
            onChange={handleChange}
            placeholder="Contoh: 08.00-18.00"
          />

          {error && <p className="pesan-error">{error}</p>}

          <button type="submit" className="tombol-utama">
            Simpan Wisata
          </button>
        </form>
      </main>
    </>
  )
}
