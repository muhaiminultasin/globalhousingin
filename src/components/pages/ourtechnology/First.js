import React from "react";
import { Link } from "react-router-dom";
import Gallery01 from "../../../assets/image/impact.jpg";
import Shapes01 from "../../../assets/image/shapes/shape-1.png";

function First() {
  return (
    <>
      <section className="service-one-section">
        <div className="container">
          <div className="row row-gutter-30">
            <div className="col-lg-6 col-xl-4">
              <div className="service-one-card">
                <div className="service-one-icon">
                  <Link to="#">
                    <i className="flaticon-education" />
                  </Link>
                </div>

                <div className="service-one-card-content">
                  <h4>
                    <Link to="#">Public-Private Collaboration Engine</Link>
                  </h4>
                  <p>
                    <i>Aligning technology with civic needs</i>
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-xl-4">
              <div className="service-one-card">
                <div className="service-one-icon">
                  <Link to="#">
                    <i className="flaticon-public-transport-1" />
                  </Link>
                </div>

                <div className="service-one-card-content">
                  <h4>
                    <Link to="#">Training-Integrated Manufacturing</Link>
                  </h4>
                  <p>
                    <i>Bridging workforce development with advanced fabrication</i>
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-xl-4">
              <div className="service-one-card">
                <div className="service-one-icon">
                  <Link to="#">
                    <i className="flaticon-agriculture" />
                  </Link>
                </div>

                <div className="service-one-card-content">
                  <h4>
                    <Link to="#">Disaster-Resilient Structural System</Link>
                  </h4>
                  <p>
                    <i>Stronger buildings through steel–concrete composite
                    innovation</i>
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-xl-4">
              <div className="service-one-card">
                <div className="service-one-icon">
                  <Link to="#">
                    <i className="flaticon-factory" />
                  </Link>
                </div>

                <div className="service-one-card-content">
                  <h4>
                    <Link to="#">Smart Modular Design & Deployment</Link>
                  </h4>
                  <p>
                    <i>Precision-built systems for any location</i>
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-xl-4">
              <div className="service-one-card">
                <div className="service-one-icon">
                  <Link to="#">
                    <i className="flaticon-businessman" />
                  </Link>
                </div>

                <div className="service-one-card-content">
                  <h4>
                    <Link to="#"> Integrated Urban Village Model</Link>
                  </h4>
                  <p>
                    <i>Technology meets culture, care, and inclusion</i>
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-xl-4">
              <div className="service-one-card">
                <div className="service-one-icon">
                  <Link to="#">
                    <i className="flaticon-clinic" />
                  </Link>
                </div>

                <div className="service-one-card-content">
                  <h4>
                    <Link to="service-details">
                      Embedded Safety & Monitoring Systems
                    </Link>
                  </h4>
                  <p>
                    <i>Innovations that protect from within</i>
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
                <div className="section-tagline"></div>

                <h2 className="section-title text-white">
                  Public-Private Collaboration Engine
                </h2>
                <i>Aligning technology with civic needs</i>
                <div className="section-text">
                  
                  <br></br>
                  <p>
                   Our development tools are designed to integrate seamlessly with city planning and public infrastructure. GHI’s PolyFRAME system enables municipalities and nonprofits to adopt factory-built resilience at scale, simplifying zoning, permitting, and project execution.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mayor-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="mayor-box">
                <div className="section-title-box">
                  <div className="section-tagline"></div>
                  <h1 className="">
                    Training-Integrated Manufacturing
                  </h1>
                  <i>Bridging workforce development with advanced fabrication</i>
                  <p>

                     <br></br>
                    Our facilities double as training centers, where workers learn to fabricate and assemble PolyFRAME components using CNC press brakes, robotic cutting, and pre-engineered assembly logic. Each step creates jobs and builds community capacity.
                  </p>
                </div>
                
              </div>
            </div>

            <div className="col-lg-6">
              <div className="mayor-img">
                <img src={Shapes01} className="floated-image-one" alt="img-7" />
                <img src={Gallery01} alt="img-8" />
                <div className="mayor-name">Mr. Kevin Martin</div>
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
                <div className="section-tagline"></div>

                <h2 className="section-title text-white">
                  Disaster-Resilient Structural System
                </h2>
                <i>Stronger buildings through steel–concrete composite innovation</i>
                <div className="section-text">
                  
                  <br></br>
                  <p>
                   Our development tools are designed to integrate seamlessly with city planning and public infrastructure. GHI’s PolyFRAME system enables municipalities and nonprofits to adopt factory-built resilience at scale, simplifying zoning, permitting, and project execution.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mayor-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="mayor-box">
                <div className="section-title-box">
                  <div className="section-tagline"></div>
                  <h1 className="">
                    Smart Modular Design & Deployment
                  </h1>
                  <i>Precision-built systems for any location</i>
                  <p>

                     <br></br>
                    From 4-story towers to urban infill sites, our modules are engineered to fit diverse land use constraints. By combining octagonal, square, and hexagonal units, we eliminate the need for custom structural engineering, making scalable design accessible.
                  </p>
                </div>
                
              </div>
            </div>

            <div className="col-lg-6">
              <div className="mayor-img">
                <img src={Shapes01} className="floated-image-one" alt="img-7" />
                <img src={Gallery01} alt="img-8" />
                <div className="mayor-name">Mr. Kevin Martin</div>
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
                <div className="section-tagline"></div>

                <h2 className="section-title text-white">
                  Integrated Urban Village Model
                </h2>
                <i>Technology meets culture, care, and inclusion.</i>
                <div className="section-text">
                  
                  <br></br>
                  <p>
                   Each Urban Village combines PolyFRAME’s structural core with inclusive site design: shared green space, community services, and wellness-focused infrastructure. Our technology enables not just buildings, but whole ecosystems of equity and opportunity.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mayor-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="mayor-box">
                <div className="section-title-box">
                  <div className="section-tagline"></div>
                  <h1 className="">
                   Embedded Safety & Monitoring Systems
                  </h1>
                  <i>Innovations that protect from within</i>
                  <p>

                     <br></br>
                    Our structural columns include built-in misting for wildfire defense, water drainage for flood control, and seismic isolation at the column base. GHI’s systems are more than structural—they’re proactive safety tools for the future of housing.
                  </p>
                </div>
                
              </div>
            </div>

            <div className="col-lg-6">
              <div className="mayor-img">
                <img src={Shapes01} className="floated-image-one" alt="img-7" />
                <img src={Gallery01} alt="img-8" />
                <div className="mayor-name">Mr. Kevin Martin</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default First;
