import React, { useRef } from "react";
import Gallery01 from "../../../assets/image/impact.jpg";
import Shapes01 from "../../../assets/image/shapes/shape-1.png";

function First() {
  // Create refs for each section
  const ppceRef = useRef(null);
  const timRef = useRef(null);
  const carRef = useRef(null);
  const cisRef = useRef(null);
  const urvRef = useRef(null);
  const rlpRef = useRef(null);

  // Smooth scroll function
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
                  <i className="flaticon-education" />
                </div>
                <div className="service-one-card-content">
                  <h4>Public-Private Collaboration Engine</h4>
                  <p>
                    <i>Aligning technology with civic needs</i>
                  </p>
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
                  <i className="flaticon-charity" />
                </div>
                <div className="service-one-card-content">
                  <h4>Tech-Integrated Manufacturing</h4>
                  <p>
                    <i>Factory-built for efficiency and resilience</i>
                  </p>
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
                  <i className="flaticon-donation" />
                </div>
                <div className="service-one-card-content">
                  <h4>Culture, Community & Resilience</h4>
                  <p>
                    <i>Rebuilding lives, one home at a time</i>
                  </p>
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
                  <i className="flaticon-loan" />
                </div>
                <div className="service-one-card-content">
                  <h4>Community Investment System</h4>
                  <p>
                    <i>Affordable financing, circular value</i>
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-xl-4">
              <div
                className="service-one-card"
                onClick={() => scrollToSection(urvRef)}
                style={{ cursor: "pointer" }}
              >
                <div className="service-one-icon">
                  <i className="flaticon-home" />
                </div>
                <div className="service-one-card-content">
                  <h4>Urban Resilience Villages</h4>
                  <p>
                    <i>Permanent housing as a human right</i>
                  </p>
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
                  <i className="flaticon-care" />
                </div>
                <div className="service-one-card-content">
                  <h4>Rebuilding Lives Program</h4>
                  <p>
                    <i>Empowering through shelter and support</i>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTIONS */}
      <section ref={ppceRef} className="service-section">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-5">
              <div className="about-image">
                <img src={Gallery01} className="img-fluid" alt="Public-Private" />
              </div>
            </div>
            <div className="col-lg-6">
              <h2 className="section-title text-white">Public-Private Collaboration Engine</h2>
              <i>Aligning technology with civic needs</i>
              <p>
                Our development tools are designed to integrate seamlessly with city planning and public infrastructure...
              </p>
            </div>
          </div>
        </div>
      </section>

      <section ref={timRef} className="service-section">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-5">
              <img src={Gallery01} className="img-fluid" alt="Tech-Integrated" />
            </div>
            <div className="col-lg-6">
              <h2 className="section-title text-white">Tech-Integrated Manufacturing</h2>
              <i>Factory-built for efficiency and resilience</i>
              <p>
                Our PolyFRAME system leverages automation and modular design to reduce costs...
              </p>
            </div>
          </div>
        </div>
      </section>

      <section ref={carRef} className="service-section">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-5">
              <img src={Gallery01} className="img-fluid" alt="Culture and Resilience" />
            </div>
            <div className="col-lg-6">
              <h2 className="section-title text-white">Culture, Community & Resilience</h2>
              <i>Rebuilding lives, one home at a time</i>
              <p>
                We believe culture and community are the foundation of recovery...
              </p>
            </div>
          </div>
        </div>
      </section>

      <section ref={cisRef} className="service-section">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-5">
              <img src={Gallery01} className="img-fluid" alt="Community Investment" />
            </div>
            <div className="col-lg-6">
              <h2 className="section-title text-white">Community Investment System</h2>
              <i>Affordable financing, circular value</i>
              <p>
                GHI’s financing system allows for zero-interest lending, promoting inclusive ownership...
              </p>
            </div>
          </div>
        </div>
      </section>

      <section ref={urvRef} className="service-section">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-5">
              <img src={Gallery01} className="img-fluid" alt="Urban Villages" />
            </div>
            <div className="col-lg-6">
              <h2 className="section-title text-white">Urban Resilience Villages</h2>
              <i>Permanent housing as a human right</i>
              <p>
                URVs are permanent, affordable communities built with trauma-informed design and green technology...
              </p>
            </div>
          </div>
        </div>
      </section>

      <section ref={rlpRef} className="service-section">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-5">
              <img src={Gallery01} className="img-fluid" alt="Rebuilding Lives" />
            </div>
            <div className="col-lg-6">
              <h2 className="section-title text-white">Rebuilding Lives Program</h2>
              <i>Empowering through shelter and support</i>
              <p>
                This program combines housing with job training, peer support, and wraparound services for sustained recovery...
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default First;
