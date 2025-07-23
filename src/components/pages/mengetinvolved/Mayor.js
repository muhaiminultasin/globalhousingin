import React from 'react'
import Shapes01 from '../../../assets/image/shapes/shape-1.png'
import Gallery01 from '../../../assets/image/gallery/mayor-2.jpg'


function Mayor() {
  return (
    <>
        <section className="mayor-section">
            <div className="container">
                <div className="row">
                <div className="col-lg-6">
                    <div className="mayor-box">
                    <div className="section-title-box">
                        <div className="section-tagline">Engage
</div>
                        <h2 className="section-title">Be Part of the Housing Revolution
</h2>
                        <p>
                        At Global Housing Initiative, we believe real change starts with collective action. Whether you're an investor, policymaker, nonprofit, or individual, your involvement accelerates our mission. Join us in creating resilient, affordable housing and transforming communities through innovation, equity, and shared purpose.
                        </p>
                    </div>
                   
                    
                    </div>
                    
                </div>
                
                <div className="col-lg-6">
                    <div className="mayor-img">
                    <img src={Shapes01} className="floated-image-one" alt="img-7" />
                    <img src={Gallery01} alt="img-8" />
                    <div className="mayor-name">Housing Initiative</div>     
                </div>
                    
                </div>
                
                </div>
                
            </div>
        </section>
    </>
  )
}

export default Mayor