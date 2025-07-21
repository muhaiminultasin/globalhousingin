// import React, { useEffect } from "react";

// const Donationform = () => {
//   useEffect(() => {
//     const script = document.createElement("script");
//     script.src = "https://donorbox.org/widget.js";
//     script.async = true;
//     script.defer = true;
//     document.body.appendChild(script);

//     return () => {
//       document.body.removeChild(script);
//     };
//   }, []);

//   return (
//     <section className="contact-section">
//       <div>
//   <div>
//     <h2>Support Our Mission</h2>
//     <p>
//       At the Global Housing Initiative (GHI), we’re building more than homes—we’re
//       building hope, resilience, and opportunity for communities in need. Your
//       donation fuels our work to develop safe, sustainable housing solutions for
//       vulnerable families facing housing insecurity, disasters, or displacement.
//     </p>
//     <p>
//       Whether you give once or become a recurring supporter, every contribution
//       brings us one step closer to making affordable, disaster-resilient housing a
//       global reality.
//     </p>
//   </div>
// </div>
// <br></br>
// <br></br>
// <br></br>
// <br></br>
//       <div className="container">
//         <div className="row">
          
//           <div className="col-lg-8 order-lg-2 order-1">
//             <div
//               className="donorbox-embed-wrapper"
//               style={{
//                 display: "flex",
//                 justifyContent: "flex-end", 
//                 paddingLeft: "30px",       
//               }}
//             >
//               <iframe
//                 src="https://donorbox.org/embed/global-housing-initiative?"
//                 name="donorbox"
//                 allow="payment"
//                 allowPaymentRequest="true"
//                 seamless
//                 frameBorder="0"
//                 scrolling="no"
//                 height="900px"
//                 width="100%"
//                 style={{
//                   maxWidth: "500px",
//                   minWidth: "250px",
//                   maxHeight: "none",
//                   width: "100%",
//                 }}
//                 title="Donorbox Donation Form"
//               ></iframe>
//             </div>
//           </div>

        
//           <div className="col-lg-4 order-lg-1 order-2">
//             <div className="donation-goal-box">
//               <h3>Help Us Reach Our Goal</h3>
//               <p><strong>Goal:</strong> $10,000</p>
//               <p><strong>Raised:</strong> $7,560</p>
//               <p><strong>Progress:</strong> ▓▓▓▓▓▓▓▓▓░ 75%</p>
//             </div>

//             <div className="donation-impact-box">
//               <h3>Your Impact</h3>
//               <ul>
//                 <li>Launch our first 48-unit PolyFRAME Tower in Northern California</li>
//                 <li>Support local job creation through sustainable building practices</li>
//                 <li>Equip families with safe, dignified places to live</li>
//                 <li>Expand our outreach to new communities in crisis</li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Donationform;


import React, { useEffect } from "react";

const Donationform = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://donorbox.org/widget.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section className="contact-section">
      <div>
        <div>
          <h2>Support Our Mission</h2>
          <p>
            At the Global Housing Initiative (GHI), we’re building more than homes—we’re
            building hope, resilience, and opportunity for communities in need. Your
            donation fuels our work to develop safe, sustainable housing solutions for
            vulnerable families facing housing insecurity, disasters, or displacement.
          </p>
          <p>
            Whether you give once or become a recurring supporter, every contribution
            brings us one step closer to making affordable, disaster-resilient housing a
            global reality.
          </p>
        </div>
      </div>

      <br />
      <br />
      <br />
      <br />

      <div className="container">
        <div className="row">
          <div className="col-lg-8 order-lg-2 order-1">
            
            <div
              className="donorbox-embed-wrapper"
              style={{
                display: "flex",
                justifyContent: "flex-end",
                paddingLeft: "30px",
              }}
            >
              <iframe
                src="https://donorbox.org/embed/global-housing-initiative?"
                name="donorbox"
                allow="payment"
                allowPaymentRequest="true"
                seamless
                frameBorder="0"
                scrolling="no"
                height="900px"
                width="100%"
                style={{
                  maxWidth: "500px",
                  minWidth: "250px",
                  maxHeight: "none",
                  width: "100%",
                }}
                title="Donorbox Donation Form"
              ></iframe>
            </div>
          </div>

          <div className="col-lg-4 order-lg-1 order-2">
            <div className="donation-goal-box">
              <h3>Help Us Reach Our Goal</h3>
              <p><strong>Goal:</strong> $10,000</p>
              <p><strong>Raised:</strong> $7,560</p>
              <p><strong>Progress:</strong> ▓▓▓▓▓▓▓▓▓░ 75%</p>
            </div>

            <div className="donation-impact-box">
              <h3>Your Impact</h3>
              <ul>
                <li>Launch our first 48-unit PolyFRAME Tower in Northern California</li>
                <li>Support local job creation through sustainable building practices</li>
                <li>Equip families with safe, dignified places to live</li>
                <li>Expand our outreach to new communities in crisis</li>
              </ul>
            </div>
            <div style={{  paddingTop: "20px" }}>
        <h2>Make a Difference Today</h2>
        <p>
          Please donate now to join a global movement transforming how we build,
          live, and care for one another.
        </p>
        <p style={{textTransform:"uppercase", fontWeight:"bold" , color:"#2DCD7C"}}>Donate Now</p>
      </div>
          </div>
        </div>
      </div>

      
    </section>
  );
};

export default Donationform;
