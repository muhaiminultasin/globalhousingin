import React, { useEffect } from 'react'
import Header from '../../headerone/Main'
import Bredcom from '../../Bredcom/Main'
import First from './First'


function Main() {

  useEffect(() => {
    document.getElementById("title").innerHTML="Culture, Community & Resilience || TownGov";
  }, [])


  return (
    <>
        <Header/>

        <div className="page-wrapper">
        <Bredcom 
            subtitle="Home"
            title="culture-Community"
            subtitledown="Culture, Community & Resilience"
           />
            <First/>
        </div>
    </>
  )
}

export default Main