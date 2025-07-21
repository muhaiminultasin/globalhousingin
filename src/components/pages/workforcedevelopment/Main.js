import React, { useEffect } from 'react'
import Header from '../../headerone/Main'
import Bredcom from '../../Bredcom/Main'
import First from './First'


function Main() {

  useEffect(() => {
    document.getElementById("title").innerHTML="Jobs & Workforce Development || TownGov";
  }, [])


  return (
    <>
        <Header/>

        <div className="page-wrapper">
        <Bredcom 
            subtitle="Home"
            title="orkforce-development"
            subtitledown="Jobs & Workforce Development"
           />
            <First/>
        </div>
    </>
  )
}

export default Main