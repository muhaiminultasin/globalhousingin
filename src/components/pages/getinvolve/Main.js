import React, { useEffect } from 'react'
import Header from '../../headerone/Main'
import Bredcom from '../../Bredcom/Main'
import First from '../mengetinvolved/First'
import Mayor from '../../menhome/Mayor'
import Second from '../mengetinvolved/Second'

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
            <Second/>
        </div>
    </>
  )
}

export default Main