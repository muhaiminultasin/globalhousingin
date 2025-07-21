import React, { useEffect } from 'react'
import Header from '../../headerone/Main'
import Bredcom from '../../Bredcom/Main'
import First from './First'


function Main() {

  useEffect(() => {
    document.getElementById("title").innerHTML="Justice, Safety Law || TownGov";
  }, [])


  return (
    <>
        <Header/>

        <div className="page-wrapper">
        <Bredcom 
            subtitle="Home"
            title="safety-law"
            subtitledown="Justice, Safety Law"
           />
            <First/>
        </div>
    </>
  )
}

export default Main