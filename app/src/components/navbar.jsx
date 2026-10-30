import 
{ Link 

} from 'react-router-dom'

export default function Navbar() 

{
  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        Jalan Lampung
      </Link>

      <div className="menu">

        <Link to="/">Beranda</Link>
        <Link to="/koleksi">Koleksi Wisata</Link>

        
        <Link to="/statistik">Statistik</Link>
        <Link to="/tentang">Tentang</Link>
      </div>
    </nav>
  )
}