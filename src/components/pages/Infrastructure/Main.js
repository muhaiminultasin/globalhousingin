import React, { useEffect } from 'react'
import Header from '../../headerone/Main'
import Bredcom from '../../Bredcom/Main'
import First from './First'


function Main() {

  useEffect(() => {
    document.getElementById("title").innerHTML="Infrastructure & Housing Access || TownGov";
  }, [])


  return (
    <>
        <Header/>

        <div className="page-wrapper">
        <Bredcom 
            subtitle="Home"
            title="infrastructure"
            subtitledown="Infrastructure & Housing Access"
           />
            <First/>
        </div>
    </>
  )
}

export default Main