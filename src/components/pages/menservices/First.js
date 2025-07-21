import React from "react";
import { Link } from "react-router-dom";
import Gallery01 from "../../../assets/image/impact.jpg";

function First() {
  return (
    <>
      <section className="service-one-section">
        <div className="container">
          <div className="row row-gutter-30">
            <div className="col-lg-6 col-xl-4">
              <div className="service-one-card">
                <div className="service-one-icon">
                  <Link>
                    <i className="flaticon-education" />
                  </Link>
                </div>

                <div className="service-one-card-content">
                  <h4>
                    Community & Local Partnerships
                  </h4>
                  <p>
                    Working hand-in-hand with cities and public agencies GHI
                    collaborates with local governments and mission-driven
                    organizations to accelerate housing development. Through
                    planning alignment and public-private partnerships, we help
                    communities develop scalable, inclusive, and affordable
                    housing solutions that are ready to serve those most in
                    need.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-xl-4">
              <div className="service-one-card">
                <div className="service-one-icon">
                  <Link to=" ">
                    <i className="flaticon-public-transport-1" />
                  </Link>
                </div>

                <div className="service-one-card-content">
                  <h4>
                    Workforce Development & Jobs
                  </h4>
                  <p>
                    Empowering people through hands-on training Through programs
                    like the Rebuilding Lives Initiative, GHI creates pathways
                    to employment by training individuals in modern construction
                    methods and sustainable building practices. Our projects
                    provide not just homes, but hope, dignity, and economic
                    opportunity.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-xl-4">
              <div className="service-one-card">
                <div className="service-one-icon">
                  <Link to=" ">
                    <i className="flaticon-agriculture" />
                  </Link>
                </div>

                <div className="service-one-card-content">
                  <h4>
                  Innovation in Housing & Industry
                  </h4>
                  <p>
                    Disrupting conventional housing through breakthrough design
                    We develop and deploy the PolyFRAME steel–concrete composite
                    system, engineered to withstand earthquakes, wildfires, and
                    floods. Our advanced building technologies open doors to
                    industry collaboration and manufacturing innovation,
                    reducing costs and increasing impact.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-xl-4">
              <div className="service-one-card">
                <div className="service-one-icon">
                  <Link to="">
                    <i className="flaticon-factory" />
                  </Link>
                </div>

                <div className="service-one-card-content">
                  <h4>
                    Infrastructure & Housing Access
                  </h4>
                  <p>
                    Innovative design meets community connectivity. PolyFRAME
                    towers are built with purpose—designed for high-density
                    urban zones and walkable communities. GHI’s integrated
                    housing systems enhance access to transportation, schools,
                    and services—building stronger foundations for life, not
                    just housing.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-xl-4">
              <div className="service-one-card">
                <div className="service-one-icon">
                  <Link to="">
                    <i className="flaticon-businessman" />
                  </Link>
                </div>

                <div className="service-one-card-content">
                  <h4>
                    Cultural Integrity & Community Life
                  </h4>
                  <p>
                    Designing with humanity at the core GHI’s Urban Village
                    model honors cultural values and community identity through
                    inclusive spaces. We incorporate shared gardens, learning
                    areas, and wellness design into each project, fostering a
                    sense of belonging for residents across generations.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-xl-4">
              <div className="service-one-card">
                <div className="service-one-icon">
                  <Link to="">
                    <i className="flaticon-clinic" />
                  </Link>
                </div>

                <div className="service-one-card-content">
                  <h4>
                    
                      Resilience, Safety & Justice
                    
                  </h4>
                  <p>
                    Protecting lives through resilient design Housing is a
                    matter of justice, and safety is non-negotiable. Our
                    buildings are designed with embedded fire prevention
                    systems, seismic isolation, and flood mitigation. GHI is
                    committed to protecting the most vulnerable through
                    climate-resilient housing solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="service-section">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-5">
              <div className="about-image">
                <div className="about-image-inner img-one">
                  <img src={Gallery01} className="img-fluid" alt="img-2" />
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="section-title-box">
                <div className="section-tagline">Why We're Different</div>

                <h2 className="section-title text-white">
                  Manufacturing for Scalable Impact
                </h2>
                <div className="section-text">
                  <p>
                    At the Global Housing Initiative and NeoPOLYGON Technology,
                    we are establishing our in-house steel fabrication system to
                    produce all core components of the PolyFRAME structural
                    system. This includes beams, columns, and connection members
                    made from 8-gauge steel, utilizing advanced CNC press brakes
                    and precision cutting technology.
                  </p>
                  <p>
                    Most importantly, the system is fully scalable and can be
                    installed locally, allowing us to launch projects within
                    California and across the globe with complete control over
                    quality, cost, and speed.
                  </p>
                  <p>
                    This capability is central to our vision: delivering
                    resilient, affordable housing through a globally replicable
                    model that starts with smart, localized manufacturing.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default First;
