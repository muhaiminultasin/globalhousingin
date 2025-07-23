import React, {  useRef, useEffect } from "react";
import Gallery01 from "../../../assets/image/impact.jpg";
import Shapes01 from "../../../assets/image/shapes/shape-1.png";
import { Link, useLocation } from "react-router-dom";

function First() {

  const location = useLocation();

  const ppceRef = useRef(null);
  const timRef = useRef(null);
  const carRef = useRef(null);
  const cisRef = useRef(null);
  const urvRef = useRef(null);
  const rlpRef = useRef(null);

  // 👉 this ensures scroll on hash load
  useEffect(() => {
    const hash = location.hash.replace("#", "");

    const scrollTo = {
      ppce: ppceRef,
      tim: timRef,
      car: carRef,
      cis: cisRef,
      urv: urvRef,
      rlp: rlpRef,
    };

    const targetRef = scrollTo[hash];

    if (targetRef && targetRef.current) {
      setTimeout(() => {
        targetRef.current.scrollIntoView({ behavior: "smooth" });
      }, 100); // wait till DOM is ready
    }
  }, [location]);

  // 👉 used for onClick scrolling within same page
  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      {/* BOXES */}
      <section className="service-one-section">
        <div className="container">
          <div className="row row-gutter-30">
            <div className="col-lg-6 col-xl-4">
              <div
                className="service-one-card"
                onClick={() => scrollToSection(ppceRef)}
                style={{ cursor: "pointer" }}
              >
                <div className="service-one-icon">
                  <Link><i className="flaticon-education" /></Link>
                </div>
                <div className="service-one-card-content">
                  <h4>Public-Private Collaboration Engine</h4>
                 
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-xl-4">
              <div
                className="service-one-card"
                onClick={() => scrollToSection(timRef)}
                style={{ cursor: "pointer" }}
              >
                <div className="service-one-icon">
                  <Link><i className="flaticon-public-transport-1" /></Link>
                </div>
                <div className="service-one-card-content">
                  <h4>Tech-Integrated Manufacturing</h4>
                
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-xl-4">
              <div
                className="service-one-card"
                onClick={() => scrollToSection(carRef)}
                style={{ cursor: "pointer" }}
              >
                <div className="service-one-icon">
                  <Link><i className="flaticon-agriculture" /></Link>
                </div>
                <div className="service-one-card-content">
                  <h4>Culture, Community & Resilience</h4>
                 
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-xl-4">
              <div
                className="service-one-card"
                onClick={() => scrollToSection(cisRef)}
                style={{ cursor: "pointer" }}
              >
                <div className="service-one-icon">
                  <Link><i className="flaticon-businessman" /></Link>
                </div>
                <div className="service-one-card-content">
                  <h4>Community Investment System</h4>
                  
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-xl-4">
              <div
                className="service-one-card"
                onClick={() => scrollToSection(cisRef)}
                style={{ cursor: "pointer" }}
              >
                <div className="service-one-icon">
                  <Link><i className="flaticon-home" /></Link>
                </div>
                <div className="service-one-card-content">
                  <h4>Urban Resilience Villages</h4>
                  
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-xl-4">
              <div
                className="service-one-card"
                onClick={() => scrollToSection(rlpRef)}
                style={{ cursor: "pointer" }}
              >
                <div className="service-one-icon">
                  <Link><i className="flaticon-clinic" /></Link>
                </div>
                <div className="service-one-card-content">
                  <h4>Rebuilding Lives Program</h4>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTIONS1 */}
      <section ref={ppceRef} id="ppce" className="service-section">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-5">
              <div className="about-image">
                <img
                  src={Gallery01}
                  className="img-fluid"
                  alt="Public-Private"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <h2 className="section-title text-white">
                Public-Private Collaboration Engine
              </h2>
              <i>Aligning technology with civic needs</i>
              <p>
                Our development tools are designed to integrate seamlessly with city planning and public infrastructure. GHI’s PolyFRAME system enables municipalities and nonprofits to adopt factory-built resilience at scale, simplifying zoning, permitting, and project execution.
              </p>
            </div>
          </div>
        </div>
      </section>
{/* SECTION2 */}
     <section ref={timRef} id="tim" className="mayor-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="mayor-box">
                <div className="section-title-box">
                  <div className="section-tagline">Training-Integrated Manufacturing
</div>
                  <h1 className="">
                    Bridging workforce development with advanced fabrication

                  </h1>
                  <p>
                    Our facilities double as training centers, where workers learn to fabricate and assemble PolyFRAME components using CNC press brakes, robotic cutting, and pre-engineered assembly logic. Each step creates jobs and builds community capacity.

                  </p>
                </div>
                
              </div>
            </div>

            <div className="col-lg-6">
              <div className="mayor-img">
                <img src={Shapes01} className="floated-image-one" alt="img-7" />
                <img src={Gallery01} alt="img-8" />
                
              </div>
            </div>
          </div>
        </div>
      </section>
{/* SECTION3 */}
      <section ref={carRef} id="car" className="service-section">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-5">
              <img
                src={Gallery01}
                className="img-fluid"
                alt="Culture and Resilience"
              />
            </div>
            <div className="col-lg-6">
              <h2 className="section-title text-white">
               Disaster-Resilient Structural System

              </h2>
              <i>Stronger buildings through steel–concrete composite innovation
</i>
              <p>
                PolyFRAME columns and beams are built using a multi-layered steel core embedded in reinforced concrete. This patent-pending system resists fire, seismic, flood, and high-wind hazards, offering long-term safety for communities facing climate extremes.

              </p>
            </div>

            
          </div>
        </div>
      </section>
{/* SECTION4 */}
      <section ref={cisRef} id="cis" className="mayor-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="mayor-box">
                <div className="section-title-box">
                  <div className="section-tagline"> Smart Modular Design & Deployment

</div>
                  <h1 className="">
                    
Precision-built systems for any location
                  </h1>
                  <p>
                  From 4-story towers to urban infill sites, our modules are engineered to fit diverse land use constraints. By combining octagonal, square, and hexagonal units, we eliminate the need for custom structural engineering, making scalable design accessible.

                  </p>
                </div>
                
              </div>
            </div>

            <div className="col-lg-6">
              <div className="mayor-img">
                <img src={Shapes01} className="floated-image-one" alt="img-7" />
                <img src={Gallery01} alt="img-8" />
                
              </div>
            </div>
          </div>
        </div>
      </section>

      <section ref={urvRef} id="urv" className="service-section">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-5">
              <img src={Gallery01} className="img-fluid" alt="Urban Villages" />
            </div>
            <div className="col-lg-6">
              <h2 className="section-title text-white">
                Integrated Urban Village Model
              </h2>
              <i>Technology meets culture, care, and inclusion.
</i>
              <p>
                Each Urban Village combines PolyFRAME’s structural core with inclusive site design: shared green space, community services, and wellness-focused infrastructure. Our technology enables not just buildings, but whole ecosystems of equity and opportunity.

              </p>
            </div>
          </div>
        </div>
      </section>

      <section ref={rlpRef}  id="rlp" className="mayor-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="mayor-box">
                <div className="section-title-box">
                  <div className="section-tagline">Embedded Safety & Monitoring Systems</div>
                  <h1 className="">
                    Innovations that protect from within
                  </h1>
                  <p>
                    Our structural columns include built-in misting for wildfire defense, water drainage for flood control, and seismic isolation at the column base. GHI’s systems are more than structural—they’re proactive safety tools for the future of housing.
                  </p>
                </div>
                
              </div>
            </div>

            <div className="col-lg-6">
              <div className="mayor-img">
                <img src={Shapes01} className="floated-image-one" alt="img-7" />
                <img src={Gallery01} alt="img-8" />
                
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default First;
