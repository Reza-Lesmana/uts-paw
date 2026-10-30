import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <header>
      <nav className="navbar">
        <Link to="/" className="logo">
          TIYUH EXPLORE
        </Link>
        <div className="menu">
          <Link to="/">Beranda</Link>
          <Link to="/koleksi">Koleksi</Link>
          <Link to="/tambah">Tambah Wisata</Link>
          <Link to="/statistik">Statistik</Link>
          <Link to="/tentang">Tentang</Link>
        </div>
      </nav>
    </header>
  )
}