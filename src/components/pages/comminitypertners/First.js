import React,{useState} from 'react'
import { Link } from 'react-router-dom';
import Department01 from '../../../assets/image/department/dep-1.jpg'


function First() {

  const [Faq, setFaq] = useState(0);

  const Drop = [
    {
        Que: "What material are used for house building?",
        Answer: "Sed rhoncus facilisis purus, at accumsan purus sagittis vitae. Nullam acelit at eros imperdiet pulvinar velut nisl. Pellentesque sit placerat neque amet sapien semper tempus."
    },
    {
        Que: "What are the easiest way to get qoute?",
        Answer: " Sed rhoncus facilisis purus, at accumsan purus sagittis vitae. Nullam acelit at eros imperdiet pulvinar velut nisl. Pellentesque sit placerat neque amet sapien semper tempus."
    },
    {
        Que: "How much time will I save on a renovation?",
        Answer: " Sed rhoncus facilisis purus, at accumsan purus sagittis vitae. Nullam acelit at eros imperdiet pulvinar velut nisl. Pellentesque sit placerat neque amet sapien semper tempus. "
    }
]

  return (
    <>
        <section className="department-details-section">
            <div className="container">
              <div className="row">
                
                <div className="col-12 col-lg-4 col-xl-4">
                  <div className="sidebar">
                    <div className="sidebar-widget-list-inner">
                      <ul>
                        <li>
                          <Link to="/community-partners">
                            Your Community & Local Partners
                            <i className="fa-solid fa-arrow-right-long" />
                          </Link>
                        </li>
                        <li>
                          <Link to="/workforce-development">
                            Jobs & Workforce Development
                            <i className="fa-solid fa-arrow-right-long" />
                          </Link>
                        </li>
                        <li>
                          <Link to="/innovation">
                           Innovation & Industry
                            <i className="fa-solid fa-arrow-right-long" />
                          </Link>
                        </li>
                        <li>
                          <Link to="/infrastructure">
                            Infrastructure & Housing Access
                            <i className="fa-solid fa-arrow-right-long" />
                          </Link>
                        </li>
                        <li>
                          <Link to="/culture-community">
                            Community & Resilience
                            <i className="fa-solid fa-arrow-right-long" />
                          </Link>
                        </li>
                        <li>
                          <Link to="/safety-law">
                            Justice, Safety Law
                            <i className="fa-solid fa-arrow-right-long" />
                          </Link>
                        </li>
                      </ul>
                      
                    </div>
                    
                    <div className="sidebar-widget sidebar-widget-card">
                      <div className="sidebar-widget-card-icon">
                        <i className="flaticon-question" />
                      </div>
                      
                      <div className="sidebar-widget-card-content">
                        <h3>
                          <Link to="/contact">Get Any Help?</Link>
                        </h3>
                        <p>
                          We’re ready to help — reach out anytime!
                        </p>
                      </div>
                      
                    </div>
                    
                    <div className="sidebar-widget">
                      <div className="sidebar-widget-box-icon">
                        <i className="flaticon-pdf" />
                      </div>
                      
                     <div className="sidebar-widget-box-content">
                    <h3>
                      Learn more about our Mission, Vision, and the Global Housing Initiative (GHI).
                    </h3>
                    <Link to="/departmentdetails" className="btn btn-primary">
                      About Us
                    </Link>
                  </div>
                      
                    </div>
                    
                  </div>
                  
                </div>
                
                <div className="col-lg-8">
                  <div className="department-details-imgbox">
                    <img src={Department01} className="img-fluid" alt="img-159" />
                    <Link to="#" />
                    <div className="department-details-img-icon">
                      <i className="flaticon-police-badge-1" />
                    </div>
                  
                  </div>
                  
                  <div className="department-details-content-box">
                    <h4 className="department-details-title">Building Together: Cities, Nonprofits, and You
</h4>
                    <p>
                      We collaborate with city governments, local agencies, and mission-aligned partners to provide affordable housing solutions to those who need them most. GHI collaborates directly with public entities to streamline planning, permitting, and community engagement processes.

                    </p>
                  </div>
                  
          
                </div>
               
              </div>
            </div>
        </section>
    </>
  )
}

export default First