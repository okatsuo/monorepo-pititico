import type { NextPage } from 'next'
import { Navbar } from '../components/navbar'
import { Footer } from '../components/footer';
import { Shortener } from '../components/shortener';

const Home: NextPage = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100vh' }}>
      <Navbar />
      <Shortener />
      <Footer />
    </div>
  )
}

export default Home
