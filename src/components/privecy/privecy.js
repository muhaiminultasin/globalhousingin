import React, { useEffect } from 'react'
import Header from '../headerone/Main'
import Bredcom from '../../components/Bredcom/Main'

function Main() {

  useEffect(() => {
    document.getElementById("title").innerHTML="Privacy Policy || GHI";
  }, [])

  return (
    <section>
        <Header/>

        <div className="page-wrapper">
          <Bredcom 
            subtitle="Home"
            title="Privacy Policy"
            subtitledown="Privacy Policy"
           />

<div className="privacy-policy">
  <h1>Privacy Policy</h1>
  <p><strong>Last Updated:</strong> [Insert Date]</p>

  <p>We care about your privacy. This page explains what we do with your information when you visit our website.</p>

  <h1>What We Collect</h1>
  <p>Your name, email, or message (if you fill out a form).</p>
  <p>Basic browsing data like pages you visit (using cookies).</p>

  <h1>How We Use It</h1>
  <p>To reply to your messages or questions.</p>
  <p>To send updates if you subscribed.</p>
  <p>To improve our website experience.</p>

  <h1>We Don’t</h1>
  <p>Share or sell your information.</p>
  <p>Collect any financial or sensitive data.</p>

  <h1>Cookies</h1>
  <p>Our site uses cookies to understand how people use it. You can disable cookies in your browser anytime.</p>

  <h1>Your Choices</h1>
  <p>You can ask us to delete your information or stop emails at any time by contacting us.</p>
</div>

        </div>
    </section>
  )
}

export default Main