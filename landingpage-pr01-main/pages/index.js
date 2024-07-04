import Head from 'next/head'
import Banner from '../components/banner'
import Benefit from '../components/benefit'
import Company from '../components/company'
import Footer from '../components/footer'
import Navbar from '../components/navbar'
import Newsletter from '../components/newsletter'
import Pricing from '../components/pricing'
import Review from '../components/review'
import Transaction from '../components/transaction'

export default function Home() {
  return (
    <div className="font-Poppins">
      <Head>
        <title>BerBerPay - Home</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <header className='w-full h-[700px] md:h-[900px]  bg-gradient'>
        <Navbar />
        <Banner />
      </header>

      <article>
        <Benefit />
        <Transaction />
      </article>

      <footer>
        <Footer />
      </footer>
    </div>
  )
}
