import React, { useState } from "react";
import { Link } from "react-router-dom";
import Department01 from "../../../assets/image/department/dep-1.jpg";

function First() {
  const [Faq, setFaq] = useState(0);

  const Drop = [
    {
      Que: "What material are used for house building?",
      Answer:
        "Sed rhoncus facilisis purus, at accumsan purus sagittis vitae. Nullam acelit at eros imperdiet pulvinar velut nisl. Pellentesque sit placerat neque amet sapien semper tempus.",
    },
    {
      Que: "What are the easiest way to get qoute?",
      Answer:
        " Sed rhoncus facilisis purus, at accumsan purus sagittis vitae. Nullam acelit at eros imperdiet pulvinar velut nisl. Pellentesque sit placerat neque amet sapien semper tempus.",
    },
    {
      Que: "How much time will I save on a renovation?",
      Answer:
        " Sed rhoncus facilisis purus, at accumsan purus sagittis vitae. Nullam acelit at eros imperdiet pulvinar velut nisl. Pellentesque sit placerat neque amet sapien semper tempus. ",
    },
  ];

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
                    <p>We’re ready to help — reach out anytime!</p>
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
                <h4 className="department-details-title">
                  Training People. Building Futures.
                </h4>
                <p>
                  Through programs like our Rebuilding Lives Initiative, we
                  offer job training, construction apprenticeships, and skills
                  certification in modern building technologies—empowering
                  individuals to rebuild their lives while helping us build
                  resilient homes.
                </p>
              </div>

              {/* <div className="department-details-box">
                    <div className="department-details-policy">
                      <span>
                        We stand for quality, safety &amp; credibility, so you could be
                        trust us fully about private jet charters and our working process.
                      </span>
                     
                    </div>
                   
                    <p>
                      Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
                      suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis
                      autem vel eum iure reprehenderit qui in ea voluptate velit esse quam
                      nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo
                      voluptas nulla pariatur iste natus error sit voluptatem accusantium
                      totam rem aperiam, eaque ipsa quae.
                    </p>
                  </div> */}

              {/* <div className="department-details-benefits-inner-box">
                    <div className="row row-gutter-30">
                      <div className="col-lg-6">
                        <div className="department-details-benefits-box-image">
                          <img src={Department02} className="img-fluid" alt={160} />
                        </div>
                        
                      </div>
                      
                      <div className="col-lg-6">
                        <div className="department-details-benefits-box">
                          <h3>Our Benefits</h3>
                          <p>
                            Duis aute irure dolor in reprehenderit in voluptate velit esse
                            cillum.
                          </p>
                          <ul className="list-unstyled list-style">
                            <li>
                              <i className="fa-solid fa-circle-arrow-right" />
                              <h5>Praesent efficitur quam sit amet</h5>
                            </li>
                            
                            <li>
                              <i className="fa-solid fa-circle-arrow-right" />
                              <h5>Nunc cursus dolor id purus euismod</h5>
                            </li>
                            
                            <li>
                              <i className="fa-solid fa-circle-arrow-right" />
                              <h5>Quisque tincidunt eros ac place viverra</h5>
                            </li>
                            
                          </ul>
                          
                        </div>
                        
                      </div>
                      
                    </div>
                    
                  </div> */}

              {/* <div className="department-details-law-box">
                    <h4>Europeon Government Law:</h4>
                    <p>
                      Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse
                      quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat
                      quo voluptas nulla pariatur iste natus error sit voluptatem
                      accusantium totam rem aperiam, eaque ipsa quae.
                    </p>
                  </div> */}

              {/* <div className="department-details-skill-box">
                    <div className="row">
                      <div className="col-12 col-lg-6">
                        <div className="service-one-card">
                          <div className="service-one-icon">
                            <Link to="#">
                              <i className="flaticon-education" />
                            </Link>
                          </div>
                          
                          <div className="service-one-card-content">
                            <h4>
                              <Link to="/servicedetails">Education &amp; Skills</Link>
                            </h4>
                            <p>
                              When nothing prevents our being able to we like best every.
                            </p>
                          </div>
                          
                        </div>
                       
                      </div>
                     
                      <div className="col-12 col-lg-6">
                        <div className="service-one-card">
                          <div className="service-one-icon">
                            <Link to="#">
                              <i className="flaticon-public-transport-1" />
                            </Link>
                          </div>
                          
                          <div className="service-one-card-content">
                            <h4>
                              <Link to="/servicedetails">
                                Roads &amp; Transportation
                              </Link>
                            </h4>
                            <p>
                              When nothing prevents our being able to we like best every.
                            </p>
                          </div>
                          
                        </div>
                       
                      </div>
                      
                    </div>
                    
                  </div> */}

              
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default First;
