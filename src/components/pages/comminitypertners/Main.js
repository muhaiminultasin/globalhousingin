import React, { useEffect } from 'react'
import Header from '../../headerone/Main'
import Bredcom from '../../Bredcom/Main'
import First from './First'


function Main() {

  useEffect(() => {
    document.getElementById("title").innerHTML="Your Community & Local Partners || TownGov";
  }, [])


  return (
    <>
        <Header/>

        <div className="page-wrapper">
        <Bredcom 
            subtitle="Home"
            title="Your community-partners"
            subtitledown="Your Community & Local Partners"
           />
            <First/>
        </div>
    </>
  )
}

export default Main