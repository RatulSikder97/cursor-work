import React from 'react'
import Header from "../components/layouts/Header";
import Hero from '../components/Hero';
import Service from '../components/Service';
import Specialization from '../components/Specialization';
import WorkProcess from '../components/WorkProcess';
const home = () => {
  return (
    <>
      <Header />
      <Hero />
      <Service />
      <Specialization />
      <WorkProcess />
    </>
  )
}

export default home