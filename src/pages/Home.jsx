import { useState } from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import Categories from '../components/Categories'
import Products from '../components/Products'
import Brands from '../components/Brands'
import WhyChooseUs from '../components/WhyChooseUs'
import Contact from '../components/Contact'

export default function Home() {
  const [activeCategory, setActiveCategory] = useState(null)

  return (
    <>
      <Hero />
      <About />
      <Categories onSelectCategory={setActiveCategory} />
      <Products activeCategory={activeCategory} onClearCategory={() => setActiveCategory(null)} />
      <Brands />
      <WhyChooseUs />
      <Contact />
    </>
  )
}
