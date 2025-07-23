import React, { useEffect } from 'react'
import Header from '../../headerone/Main'
import Bredcom from '../../Bredcom/Main'
import First from '../mengetinvolved/First'
import Mayor from '../mengetinvolved/Mayor'
// import Second from '../mengetinvolved/Second'
import Client from '../../menhome/Client'

function Main() {

  useEffect(() => {
    document.getElementById("title").innerHTML="Get Involved || GHI";
  }, [])

  return (
    <>
        <Header/>

        <div className="page-wrapper">
          <Bredcom 
            subtitle="Home"
            title="Get Involved"
            subtitledown="Get Involved"
           />
            <First/>
            <Mayor/>
            <Client/>
        </div>
    </>
  )
}

export default Main