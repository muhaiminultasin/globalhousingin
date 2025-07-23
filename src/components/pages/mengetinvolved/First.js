import React from "react";
import { Link } from "react-router-dom";

function First() {
  return (
    <>
      <section className="service-one-section">
        <div className="container">
          <div className="row row-gutter-30">
            <div className="col-lg-6 col-xl-4">
              <div className="service-one-card">
                <div className="service-one-icon">
                  <i className="flaticon-education" />
                </div>

                <div className="service-one-card-content">
                  <h4>Public-Private Collaboration Engine</h4>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-xl-4">
              <div className="service-one-card">
                <div className="service-one-icon">
                  <i className="flaticon-public-transport-1" />
                </div>

                <div className="service-one-card-content">
                  <h4>Tech-Integrated Manufacturing</h4>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-xl-4">
              <div className="service-one-card">
                <div className="service-one-icon">
                  <i className="flaticon-agriculture" />
                </div>

                <div className="service-one-card-content">
                  <h4>Culture, Community & Resilience</h4>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-xl-4">
              <div className="service-one-card">
                <div className="service-one-icon">
                  <i className="flaticon-factory" />
                </div>

                <div className="service-one-card-content">
                  <h4>Community Investment System</h4>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-xl-4">
              <div className="service-one-card">
                <div className="service-one-icon">
                  <i className="flaticon-businessman" />
                </div>

                <div className="service-one-card-content">
                  <h4>Urban Resilience Villages</h4>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-xl-4">
              <div className="service-one-card">
                <div className="service-one-icon">
                  <i className="flaticon-clinic" />
                </div>

                <div className="service-one-card-content">
                  <h4>Rebuilding Lives Program</h4>
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
                    City Goverment Offers a Wide <br />
                    Range of Online Services
                  </h2>
                  <Link to="/servicedetails" className="btn btn-primary">
                    {" "}
                    Discover More{" "}
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
