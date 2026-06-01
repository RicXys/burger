import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Menu from './components/Menu'
import BrandStory from './components/BrandStory'
import Gallery from './components/Gallery'
import Location from './components/Location'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Menu />
        <BrandStory />
        <Gallery />
        <Location />
      </main>
      <Footer />
    </>
  )
}
