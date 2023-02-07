import React from 'react'
import Header from "../components/layouts/Header";
import Hero from '../components/Hero';
import Service from '../components/Service';
import Specialization from '../components/Specialization';
const home = () => {
  return (
    <>
      <Header />
      <Hero />
      <Service />
      <Specialization />
    </>
  )
}

export default home