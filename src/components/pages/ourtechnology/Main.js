import React, { useEffect } from 'react'
import Header from '../../headerone/Main'
import Bredcom from '../../Bredcom/Main'
import First from './First'
import Mayor from '../../menhome/Mayor'
import Client from '../../menhome/Client'

function Main() {

  useEffect(() => {
    document.getElementById("title").innerHTML="Our Technology || GHI";
  }, [])

  return (
    <>
        <Header/>

        <div className="page-wrapper">
          <Bredcom 
            subtitle="Home"
            title="Our Technology"
            subtitledown="Our Technology"
           />
            <First/>
            <Mayor/>
            <Client/>
        </div>
    </>
  )
}

export default Main