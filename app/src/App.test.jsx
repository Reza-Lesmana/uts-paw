
import 
{ render, screen } from '@testing-library/react'
import 
{ MemoryRouter } from 'react-router-dom'
import 
{ expect, test } from 'vitest'


import App from './App.jsx'

// Contoh test. Tambahkan minimal 5 test buatan sendiri (butir rubrik F1).
test('rute tidak dikenal menampilkan 404', () => {
  render(
    <MemoryRouter initialEntries={['/tidak-ada']}>
      <App />
    </MemoryRouter>,
  )
  expect(screen.getByRole('heading', { name: '404' })).toBeInTheDocument()
})





//test pertama saya buat di Halaman Beranda
test('halaman beranda menampilkan judul wisata', () => {
  render(
    <MemoryRouter initialEntries={['/']}>
      <App />

    </MemoryRouter>,
  )
  expect(screen.getByRole('heading', 
    { name: 'Temukan Keindahan Wisata Lampung' })).toBeInTheDocument()
})



// test kedua saya buat dibagian halaman koleksi
test('halaman koleksi menampilkan judul', () => {
  render(
    <MemoryRouter initialEntries={['/koleksi']}>
      <App />

    </MemoryRouter>,
  )
  expect(screen.getByRole('heading', { name: 'Koleksi Wisata' })).toBeInTheDocument()
})




// test ketiga untuk halaman nambah wisata
test('halaman tambah wisata menampilkan form', () => {
  render(
    <MemoryRouter initialEntries={['/tambah']}>

      
      <App />


    </MemoryRouter>,
  )
  expect(screen.getByRole('heading', { name: 'Tambah Wisata' })).toBeInTheDocument()
})



// test keempat untuk halaman statistik
test('halaman statistik menampilkan judul', () => {
  render(
    <MemoryRouter initialEntries={['/statistik']}>
      <App />


    </MemoryRouter>,
  )
  expect(screen.getByRole('heading', { name: 'Statistik Wisata' })).toBeInTheDocument()
})





// testt kelima pengujian halaman tentang
test('halaman tentang menampilkan identitas pengembang', () => {
  render(
    <MemoryRouter initialEntries={['/tentang']}>
      <App />


    </MemoryRouter>,
  )
  expect(screen.getByRole('heading', { name: 'Identitas Pengembang' })).toBeInTheDocument()
})
