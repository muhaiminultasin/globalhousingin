import React, { useState, useEffect } from "react";
import Header from "../../headerone/Main";
// import shape2 from "../../images/about/shape2.svg";
// import shape3 from "../../images/cta-shap-3.svg";
import Bredcom from "../../Bredcom/Main";
import Donationform from "../../Donationform/Main";

const DonatePage = () => {
  useEffect(() => {
    document.getElementById("title").innerHTML = "Donation || GHI";
  }, []);

  const [selectedAmount, setSelectedAmount] = useState("");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    message: "",
  });

  const handleAmountClick = (amount) => {
    setSelectedAmount(`$${amount}`);
  };

  const handleInputChange = (e) => {
    setSelectedAmount(e.target.value);
  };

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="donate-section section-padding">
      <Header />
      <Bredcom subtitle="Home" title="Donation" subtitledown="Donation" />
      <div className="container">
        {/* Top Text */}
        <div className="donation-from">
          {/* Doner details  */}
          <Donationform
            selectedAmount={selectedAmount}
            handleAmountClick={handleAmountClick}
            handleInputChange={handleInputChange}
          />

          {/* Donation Amounts */}

          {/* Donate Button */}
          {/* <div className="donate-now">
            <div className="donation-one__btn-box">
              <a href="#" className="donation-one__btn theme-btn ">
                Donate Now <i className="flaticon-heart"></i>
              </a>
            </div>
          </div> */}
        </div>
      </div>

      {/* Background Shapes */}
      {/* <div className="shape"> <img src={shape2} alt="shape" /> 
        
      </div> */}
      {/* <div className="right-text">
        <h2 className="">Donate Now</h2>
        <div className="shape-2">{/* <img src={shape3} alt="shape" /> */}

      {/* </div> */}
      {/* </div>  */}
    </section>
  );
};

export default DonatePage;

