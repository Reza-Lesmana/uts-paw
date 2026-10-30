
import 

{ Route, Routes } from 'react-router-dom'
import mahasiswa from '../mahasiswa.json'
import 
{ WisataProvider } from './context/wisatacontext'

import Beranda from './pages/beranda'
import Koleksi from './pages/koleksi'


import DetailWisata from './pages/detailwisata'

import TambahWisata from './pages/tambahwisata'
import Statistiknya from './pages/statistiknya'
import Tentang from './pages/tentang'

// Titik awal ujian. Baca soal lengkap di https://uts-paw.mhabibalgifari.web.id/soal
// dan contoh setiap kode yang diminta di https://uts-paw.mhabibalgifari.web.id/contoh
// Rute wajib: /, /koleksi, /koleksi/:id, /tambah, /statistik, /tentang, dan *.
// Provider Context diletakkan di dalam komponen App ini.

function TidakDitemukan(

) {
  return (
    <main>
      <h1>404</h1>
      <p>Halaman tidak ditemukan - Not Found</p>
      <a href="/">Kembali ke Beranda - New Era</a>
    </main>
  )
}

export default function App() 

{
  return (
    <WisataProvider>
      <Routes>
        <Route path="/" element={<Beranda />} />


        <Route path="/koleksi" element={<Koleksi />} />

        <Route path="/koleksi/:id" element={<DetailWisata />}
         />
        <Route path="/tambah" element={<TambahWisata />} />

        <Route path="/statistik" element={<Statistiknya />} />
        
        <Route path="/tentang" element={<Tentang />} />
        
        <Route path="*" element={<TidakDitemukan />} />
      </Routes>
    </WisataProvider>
  )
}
