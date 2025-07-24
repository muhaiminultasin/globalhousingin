

import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import Gallery01 from "../../../assets/image/impact.jpg";
import Shapes01 from "../../../assets/image/shapes/shape-1.png";

function First() {
  const navigate = useNavigate();

  const goToSection = (sectionId) => {
    navigate(`/technology#${sectionId}`);
  };

  return (
    <>
      <section className="service-one-section">
        <div className="container">
          <div className="row row-gutter-30">
            <div className="col-lg-6 col-xl-4">
              <div className="service-one-card" onClick={() => goToSection("ppce")} style={{ cursor: "pointer" }}>
                <div className="service-one-icon">
                  <Link> <i className="flaticon-education" /></Link>
                </div>
                <div className="service-one-card-content">
                  <h4>Public-Private Collaboration Engine</h4>
                  <h6>Lorem ipsum dolor sit amet</h6>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-xl-4">
              <div className="service-one-card" onClick={() => goToSection("tim")} style={{ cursor: "pointer" }}>
                <div className="service-one-icon">
                  <Link> <i className="flaticon-public-transport-1" /></Link>
                </div>
                <div className="service-one-card-content">
                  <h4>Tech-Integrated Manufacturing</h4>
                  <h6>Lorem ipsum dolor sit amet</h6>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-xl-4">
              <div className="service-one-card" onClick={() => goToSection("car")} style={{ cursor: "pointer" }}>
                <div className="service-one-icon">
                  <Link><i className="flaticon-agriculture" /></Link>
                </div>
                <div className="service-one-card-content">
                  <h4>Culture, Community & Resilience</h4>
                  <h6>Lorem ipsum dolor sit amet</h6>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-xl-4">
              <div className="service-one-card" onClick={() => goToSection("cis")} style={{ cursor: "pointer" }}>
                <div className="service-one-icon">
                  <Link><i className="flaticon-factory" /></Link>
                </div>
                <div className="service-one-card-content">
                  <h4>Community Investment System</h4>
                  <h6>Lorem ipsum dolor sit amet</h6>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-xl-4">
              <div className="service-one-card" onClick={() => goToSection("urv")} style={{ cursor: "pointer" }}>
                <div className="service-one-icon">
                  <Link><i className="flaticon-businessman" /></Link>
                </div>
                <div className="service-one-card-content">
                  <h4>Urban Resilience Villages</h4>
                  <h6>Lorem ipsum dolor sit amet</h6>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-xl-4">
              <div className="service-one-card" >
                <div className="service-one-icon">
                  <Link><i className="flaticon-clinic" /></Link>
                </div>
                <div className="service-one-card-content">
                  <Link to={"/donate"}>
                  <h4>Rebuilding Lives Program</h4>
                  </Link>
                  <h6>Lorem ipsum dolor sit amet</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-three">
        <div className="cta-three-inner">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="cta-three-content text-center">
                  <h2 className="section-title text-white">
                    Stay Connected and Learn More About the Global Housing Initiative
                  </h2>
                  <Link to="/about" className="btn btn-primary">
                    {" "} About Us {" "}
                  </Link>
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
