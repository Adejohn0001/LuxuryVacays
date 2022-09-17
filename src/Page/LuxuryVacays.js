import React from 'react'
import Experience from '../components/Experience'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Ratings from '../components/Ratings'
import Relax from '../components/Relax'
import Services from '../components/Services'
import Summer from '../components/Summer'
import Tourism from '../components/Tourism'
import Nav from './Nav'


const LuxuryVacays = () => {
  return (
    <div>
        <Nav />
        <Header />
        <Services />
        <Summer />
        <Relax />
        <Experience />
        <Tourism />
        <Ratings />
        <Footer />
    </div>
  )
}

export default LuxuryVacays