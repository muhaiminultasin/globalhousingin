import React from 'react'
import Clint01 from '../../assets/image/Client-1.jpg'
import Clint02 from '../../assets/image/Client-2.jpg'
import Clint03 from '../../assets/image/Client-3.jpg'
import Clint04 from '../../assets/image/Client-4.jpg'
import Clint05 from '../../assets/image/Client-5.jpg'
import Clint06 from '../../assets/image/Client-6.jpg'
import OwlCarousel from 'react-owl-carousel';

function Client() {

    const settings = {
        items: 1,
			nav:false,
			margin: 80,
			loop: true,
			autoplay:true,
			smartSpeed:2000,
			responsive:{
				0:{
						items:1,
				},
				375:{
						items:2,
				},
				767:{
						items:3,
				},
				991:{
						items:4,
				},
				1199: {
					items:5
				}
			}
      };

      
  return (
    <>
        <section className="client-section">
            <h5 className="client-text">Our partners &amp; suppoters</h5>
            <div className="container">
                <OwlCarousel className="client-carousel owl-carousel owl-theme" {...settings}>

                    <div className="item">
                        <img src={Clint01} className="img-fluid" alt="img-13" />
                    </div>
                    
                    <div className="item">
                        <img src={Clint02} className="img-fluid" alt="img-14" />
                    </div>
                    
                    <div className="item">
                        <img src={Clint03} className="img-fluid" alt="img-15" />
                    </div>
                    
                    <div className="item">
                        <img src={Clint04} className="img-fluid" alt="img-16" />
                    </div>
                    <div className="item">
                        <img src={Clint05} className="img-fluid" alt="img-16" />
                    </div>
                    <div className="item">
                        <img src={Clint06} className="img-fluid" alt="img-16" />
                    </div>

                </OwlCarousel>  
            </div>
        </section>
    </>
  )
}

export default Client