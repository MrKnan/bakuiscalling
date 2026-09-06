import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import Canonical from './Canonical'

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Canonical />
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}