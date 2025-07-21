import React from "react";
import { Link } from "react-router-dom";
import Bgone from "../../assets/image/Slider/Img-13.jpg";
import Bgtwo from "../../assets/image/Slider/NPT.jpg";
import Bgthree from "../../assets/image/Slider/Urban.jpg";
import OwlCarousel from "react-owl-carousel";

function Slider() {
  const settings = {
    loop: true,
    autoplay: true,
    nav: true,
    items: 1,
    dots: false,
    navText: [
      '<i class="fa-solid fa-arrow-left-long"></i>',
      '<i class="fa-solid fa-arrow-right-long"></i>',
    ],
  };

  return (
    <>
      <section className="main-slider">
        <OwlCarousel
          className="main-slider-swiper owl-carousel owl-theme"
          {...settings}
        >
          <div
            className="item"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <div
              className="item-slider-bg"
              style={{ backgroundImage: `url(${Bgone})` }}
            />
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="slider-content">
                    {" "}
                    
                    <h1 className="section-title">
                      {" "}
                      Global Housing Initiative (GHI)
                    </h1>
                    <div className="slider-tagline" style={{ marginBottom: ' 20px' }}>GHI</div>
                    <Link to="/about" className="btn btn-primary">
                      {" "}
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className="item"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <div
              className="item-slider-bg"
              style={{ backgroundImage: `url(${Bgtwo})` }}
            />
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="slider-content">
                    <h1 className="section-title">
                      {" "}
                      Global Housing Initiative (GHI){" "}
                    </h1>
                    <div
                      className="slider-tagline"
                      style={{ marginBottom: " 20px" }}
                    >
                      {" "}
                      GHI{" "}
                    </div>
                    <Link to="/contact" className="btn btn-primary">
                      {" "}
                      Partner With Us{" "}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="item"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <div
              className="item-slider-bg"
              style={{ backgroundImage: `url(${Bgthree})` }}
            />
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="slider-content">
                    <h1 className="section-title">
                      {" "}
                      Urban Village Initiative (UVI){" "}
                    </h1>
                    <div
                      className="slider-tagline"
                      style={{ marginBottom: " 20px" }}
                    >
                      {" "}
                      GHI{" "}
                    </div>
                    <Link to="/donate" className="btn btn-primary">
                      {" "}
                      Donate Us{" "}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </OwlCarousel>
      </section>

      <section className="department-section">
        <div className="container">
          <div className="department-section-inner">
            <div className="row row-gutter-y-40">
              <div className="col-xl-2 col-lg-4 col-md-6">
                <div className="department-card">
                  <div className="department-card-icon">
                    <Link to="/community-partners">
                      <i className="flaticon-handshake" />
                    </Link>
                  </div>

                  <div className="department-card-content">
                    <h5>
                      <Link to="/community-partners">
                        Your Community & Local Partners{" "}
                      </Link>
                    </h5>
                  </div>
                </div>
              </div>

              <div className="col-xl-2 col-lg-4 col-md-6">
                <div className="department-card">
                  <div className="department-card-icon">
                    <Link to="/workforce-development">
                      <i className="fas fa-users" />
                    </Link>
                  </div>

                  <div className="department-card-content">
                    <h5>
                      <Link to="/workforce-development">
                        Jobs & Workforce Development{" "}
                      </Link>
                    </h5>
                  </div>
                </div>
              </div>

              <div className="col-xl-2 col-lg-4 col-md-6">
                <div className="department-card">
                  <div className="department-card-icon">
                    <Link to="/innovation">
                     <i class="fas fa-industry"></i>
                    </Link>
                  </div>

                  <div className="department-card-content">
                    <h5>
                      <Link to="/innovation">Innovation & Industry </Link>
                    </h5>
                  </div>
                </div>
              </div>

              <div className="col-xl-2 col-lg-4 col-md-6">
                <div className="department-card">
                  <div className="department-card-icon">
                    <Link to="/infrastructure">
                      <i className="fas fa-building" />
                    </Link>
                  </div>

                  <div className="department-card-content">
                    <h5>
                      <Link to="/infrastructure">
                        Infrastructure & Housing Access{" "}
                      </Link>
                    </h5>
                  </div>
                </div>
              </div>

              <div className="col-xl-2 col-lg-4 col-md-6">
                <div className="department-card">
                  <div className="department-card-icon">
                    <Link to="/culture-community">
                      <i className="fas fa-landmark" />
                    </Link>
                  </div>

                  <div className="department-card-content">
                    <h5>
                      <Link to="/culture-community">
                        Culture, Community & Resilience{" "}
                      </Link>
                    </h5>
                  </div>
                </div>
              </div>

              <div className="col-xl-2 col-lg-4 col-md-6">
                <div className="department-card">
                  <div className="department-card-icon">
                    <Link to="/safety-law">
                      <i className="flaticon-balance-1" />
                    </Link>
                  </div>

                  <div className="department-card-content">
                    <h5>
                      <Link to="/safety-law">Justice, Safety Law</Link>
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="department-search-section">
          <div className="container">
            <form className="department-search-form">
              <input
                type="text"
                placeholder="Get our quick services from the city municipal"
                name="search"
              />

              <button type="submit">Search</button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default Slider;
