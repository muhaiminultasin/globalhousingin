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
                  <Link to="#">
                    <i className="flaticon-education" />
                  </Link>
                </div>

                <div className="service-one-card-content">
                  <h4>
                    <Link to="#">Public-Private Collaboration Engine</Link>
                  </h4>
                  <p>
                    Aligning technology with civic needs
Our development tools are designed to integrate seamlessly with city planning and public infrastructure. GHI’s PolyFRAME system enables municipalities and nonprofits to adopt factory-built resilience at scale, simplifying zoning, permitting, and project execution.

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
                    Bridging workforce development with advanced fabrication
Our facilities double as training centers, where workers learn to fabricate and assemble PolyFRAME components using CNC press brakes, robotic cutting, and pre-engineered assembly logic. Each step creates jobs and builds community capacity.

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
                    <Link to="#">Disaster-Resilient Structural System
</Link>
                  </h4>
                  <p>
                    Stronger buildings through steel–concrete composite innovation
PolyFRAME columns and beams are built using a multi-layered steel core embedded in reinforced concrete. This patent-pending system resists fire, seismic, flood, and high-wind hazards, offering long-term safety for communities facing climate extremes.

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
                    <Link to="#">Smart Modular Design & Deployment
</Link>
                  </h4>
                  <p>
                    Precision-built systems for any location
From 4-story towers to urban infill sites, our modules are engineered to fit diverse land use constraints. By combining octagonal, square, and hexagonal units, we eliminate the need for custom structural engineering, making scalable design accessible.

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
                    <Link to="#"> Integrated Urban Village Model
</Link>
                  </h4>
                  <p>
                  Technology meets culture, care, and inclusion.
Each Urban Village combines PolyFRAME’s structural core with inclusive site design: shared green space, community services, and wellness-focused infrastructure. Our technology enables not just buildings, but whole ecosystems of equity and opportunity.

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
                    Innovations that protect from within
Our structural columns include built-in misting for wildfire defense, water drainage for flood control, and seismic isolation at the column base. GHI’s systems are more than structural—they’re proactive safety tools for the future of housing.

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
