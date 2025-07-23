import React, { useEffect } from 'react'
import Header from '../headerone/Main'
import Bredcom from '../../components/Bredcom/Main'

function Main() {

  useEffect(() => {
    document.getElementById("title").innerHTML="Terms & Conditions || GHI";
  }, [])

  return (
    <>
        <Header/>

        <div className="page-wrapper">
          <Bredcom 
            subtitle="Home"
            title="Terms & Conditions"
            subtitledown="Terms & Conditions"
           />

<div className="privacy-policy">
  <h1>Terms & Conditions</h1>
  <ul>
    <li>Rule: By accessing this website, you agree to be bound by these Terms and Conditions and all applicable laws and regulations.</li>
    <li>Rule: You must be at least 13 years old to use this website.</li>
    <li>Rule: All content on this site is the intellectual property of the site owner unless otherwise stated. You may not copy, reproduce, or distribute without permission.</li>
    <li>Rule: You may not use this website for any illegal or unauthorized purpose.</li>
    <li>Rule: We reserve the right to modify or discontinue any part of this website without notice at any time.</li>
    <li>Rule: Any links to third-party websites are provided for your convenience only. We are not responsible for their content or practices.</li>
    <li>Rule: Your use of this site is at your own risk. We provide all content “as is” without any warranties or guarantees.</li>
    <li>Rule: We are not liable for any damages or losses resulting from your use or inability to use this website.</li>
    <li>Rule: You agree not to submit false or misleading information through any forms or communication on the website.</li>
    <li>Rule: We may suspend or terminate your access to the site if you violate these Terms and Conditions.</li>
    <li>Rule: Any disputes related to these Terms shall be governed by the laws of [Your Country/State], without regard to its conflict of law principles.</li>
    <li>Rule: By using this site, you also consent to our Privacy Policy.</li>
    <li>Rule: These Terms may be updated at any time. It is your responsibility to check this page periodically for changes.</li>
    <li>Rule: Continued use of the website after any changes constitutes your acceptance of the new Terms.</li>
    <li>Rule: If any part of these Terms is found to be unenforceable, the remaining sections will remain in effect.</li>
    <li>Rule: You agree not to engage in any activity that could harm the functionality or security of the website.</li>
    <li>Rule: We do not guarantee that the website will be available at all times or be free of errors or viruses.</li>
    <li>Rule: Comments or reviews submitted on the site must not contain offensive, abusive, or misleading content.</li>
    <li>Rule: You may not use automated systems (like bots or scripts) to interact with the website.</li>
    <li>Rule: For any questions or concerns about these Terms, please contact us using the information provided on the Contact page.</li>
  </ul>
</div>

        </div>
    </>
  )
}

export default Main