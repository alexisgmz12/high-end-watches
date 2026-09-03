import React from 'react'
import Header from './components/Header'
import HeroParallax from './components/HeroParallax'
import ProductList from './components/ProductList'
import Footer from './components/Footer'
import { ProductProvider } from './context/ProductContext'

const App: React.FC = () => (
  <ProductProvider>
    <Header />
    {/* Fulfil the placeholder data */}
    <HeroParallax
      headline='Luxury Watches for the Elite. For you'
      ctaText='Buy now. Limited offer'
      imageUrl='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYXGT1PZzhgaA8GcWFAR2aJRbDoQt12tcsZyTPDJ8xHw&s'
      key={'Parallax-1'}
      subHeadline='Only Elite'
     />
    <ProductList />
    <Footer />
  </ProductProvider>
)
export default App
