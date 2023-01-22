import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ChartSection from '../components/ChartSection'

const Home: NextPage = () => {
  return (
    <> 
      <Head>
        <title>Inflation Charts</title>
      </Head>

      <div className='flex h-screen'>
        {/* Header */}
        <Header />

        {/* Chart */}
        <ChartSection />

        {/* Footer */}
        <Footer />

      </div>

    </>
  )
}

export default Home
