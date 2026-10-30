
import Navbar from '../components/navbar'
import mahasiswa from '../../mahasiswa.json'

export default function Tentang() 

{
  return (
    <>
      <Navbar />

      <main className="container halaman-tentang">
        <section className="judul-halaman">

            
          <p className="label-hero">TENTANG WEBSITE</p>
          <h1>Jelajah Lampung</h1>
          <p>
            Website informasi destinasi wisata di Provinsi Lampung
            yang aku membantu kamu menemukan tempat wisata menarik.
          </p>
        </section>

        <section className="profil-mahasiswa">
          <h2>Identitas Pengembang</h2>

          <div className="profil-item">
            <span>Nama</span>
            <p>{mahasiswa.nama}</p>
          </div>

          <div className="profil-item">
            <span>NIM</span>
            <p>{mahasiswa.nim}</p>
          </div>

          <div className="profil-item">
            <span>Kelas</span>
            <p>{mahasiswa.kelas}</p>
          </div>

          <div className="profil-item">


            <span>Tema UTS</span>
            <p>{mahasiswa.tema}</p>
          </div>
        </section>

        <section className="informasi-proyek">
          <h2>Tentang Proyek</h2>


          <p>
            Website ini dibuat sebagai proyek Ujian Tengah Semester
            mata kuliah Pengembangan Aplikasi Web. Website dikembangkan
            menggunakan React untuk menampilkan, mencari, menambahkan,
            dan mengelola informasi destinasi wisata di Lampung. Diharapkan website ini bisa berkembang beneran.
          </p>
        </section>
      </main>
    </>
  )
}
