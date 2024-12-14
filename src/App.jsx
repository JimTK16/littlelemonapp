import './App.css'
import Footer from './components/Footer'
import Hero from './components/Hero'
import MenuCategories from './components/MenuCategories'
import MenuDishes from './components/MenuDishes'
import Navigation from './components/Navigation'

function App() {
  return (
    <>
      <Navigation />
      <Hero />
      <MenuCategories />
      <MenuDishes />
      <Footer />
    </>
  )
}

export default App
