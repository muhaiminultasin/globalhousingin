// import React from "react";
// import Accordion from "./Accordion";

// function Accordionsection() {
//   // const QS = [
//   //   {
//   //     id: 1,
//   //     title: "What makes GHI different?",
//   //     ans: "GHI integrates cutting-edge engineering with community empowerment. As an operating nonprofit, we directly build scalable, disaster-resilient housing solutions with a long-term focus on social impact and affordability.",
//   //   },
//   //   {
//   //     id: 2,
//   //     title: "What’s unique about PolyFRAME?",
//   //     ans: "PolyFRAME is a modular steel-concrete system designed for rapid construction and unmatched resilience against earthquakes, fires, floods, and wind. It’s engineered for scalability, durability, and long-term housing security.",
//   //   },
//   //   {
//   //     id: 3,
//   //     title: "How to invest or join UVI?",
//   //     ans: "You can invest through our Urban Village Initiative Community Fund or join as a resident or supporter. Visit the “Get Involved” page to explore opportunities and sign up.",
//   //   },
//   //   {
//   //     id: 4,
//   //     title: "Steps to partner with GHI?",
//   //     ans: "Reach out via our “Partner With Us” form. We collaborate with cities, nonprofits, and institutions to co-develop policy, pilot programs, and scalable housing projects tailored to community needs.",
//   //   },
//   // ];

// const QS = [
//   {
//     id: 8,
//     title: "What are the components of an Urban Village?",
//     ans: `
//       <p>Each Urban Village may include:</p>
//       <ul>
//         <li>Multi-story housing (PolyFRAME towers)</li>
//         <li>Community gardens, green space, and solar power</li>
//         <li>Job training centers and educational spaces</li>
//         <li>On-site childcare and shared mobility infrastructure</li>
//         <li>Mixed-income units with community ownership opportunities</li>
//       </ul>
//     `
//   }
// ];



//   return (
//     <>
//       <section className="contact-section">
//         <div className="container">
//           <div className="row">
//             <div className="col-lg-4">
//               <div className="contact-box">
//                 <div className="section-tagline"> Find Clarity Here</div>

//                 <h1 className="section-title">Your Questions Answered</h1>
//                 <p>Get to know how the Global Housing Initiative operates, what drives our innovation, and how you can invest, join, or partner in building a resilient housing future.</p>
//               </div>
//             </div>

//             <div className="col-lg-8">
//               <section className="faq-section">
//                 <div className="faq-container">
//                   <div>
//                     <div className="faq-list">
//                       {QS.map(({ id, title, ans }) => (
//                         <Accordion key={id} ques={title} ans={ans} />
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//               </section>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* <div className="contact-gmap-section">
//             <div className="container">
//             <div className="responsive-map">
//                 <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12083.735079362054!2d-74.01702461732008!3d40.785470167558394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c258131938b8d5%3A0xe39c30a8afef2d96!2sWest%20New%20York%2C%20NJ%2007093%2C%20USA!5e0!3m2!1sen!2sin!4v1668832966742!5m2!1sen!2sin"
//                 width={600} height={450} title="latest" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
//             </div>
            
//             </div>
   
//         </div>

//         <div className="cta-four-section">
//             <div className="container">
//             <div className="cta-four-inner">
//                 <div className="row row-gutter-y-20 ">
//                 <div className="col-12 col-lg-6 col-xl-3">
//                     <div className="cta-four-content">
//                     <i className="flaticon-help" />
//                     <div className="cta-four-content-box">
//                         <span>Have Question?</span>
//                         <p>Free +92 (8800) 6802</p>
//                     </div>
                    
//                     </div>
                   
//                 </div>
               
//                 <div className="col-12 col-md-6 col-lg-6 col-xl-3">
//                     <div className="cta-four-content">
//                     <i className="flaticon-envelope-3" />
//                     <div className="cta-four-content-box">
//                         <span>Write Email</span>
//                         <p>needhelp@company.com</p>
//                     </div>
                    
//                     </div>
                   
//                 </div>
               
//                 <div className="col-12 col-lg-6 col-xl-4">
//                     <div className="cta-four-content">
//                     <i className="flaticon-location-pin" />
//                     <div className="cta-four-content-box">
//                         <span>Visit Office</span>
//                         <p>30 Broklyn Golden Street. USA</p>
//                     </div>
                    
//                     </div>
                   
//                 </div>
               
//                 <div className="col-12 col-lg-6 col-xl-2">
//                     <div className="cta-four-content">
//                     <div className="cta-four-widget-socials">
//                         <a href="https://twitter.com/">
//                             <i className="fa-brands fa-twitter" />
//                         </a>
//                         <a href="https://www.facebook.com/">
//                             <i className="fa-brands fa-facebook" />
//                         </a>
//                         <a href="https://in.pinterest.com/">
//                             <i className="fa-brands fa-pinterest-p" />
//                         </a>
//                         <a href="https://www.instagram.com/">
//                             <i className="fa-brands fa-instagram" />
//                         </a>
//                     </div>
                   
//                     </div>
                   
//                 </div>
                
//                 </div>
                
//             </div>
            
//             </div>
            
//         </div> */}
//     </>
//   );
// }

// export default Accordionsection;


import React from "react";
import Accordion from "./Accordion";

function Accordionsection() {
  const QS = [
    {
      id: 1,
      title: "What is the Global Housing Initiative (GHI)?",
      ans: [
        {
          paragraph:
            "GHI is a 501(c)(3) nonprofit organization dedicated to solving the affordable housing crisis by developing disaster-resilient, modular housing communities using our proprietary PolyFRAME system. We combine innovation, community equity, and local collaboration to address housing, climate resilience, and economic opportunity."
        }
      ]
    },
    {
      id: 2,
      title: "What services does GHI provide?",
      ans: [
        {
          paragraph: "We provide a full spectrum of nonprofit development services, including:" 
        },
        {
          list: [
            "Design and development of mid-rise resilient housing",
            "Community engagement and equity-based planning",
            "Project management from predevelopment through occupancy",
            "Partnerships with cities to deploy affordable housing solutions",
            "Workforce integration through our Rebuilding Lives Program"
          ]
        }
      ]
    },
    {
      id: 3,
      title: "Where does GHI operate?",
      ans: [
        {
          paragraph:
            "GHI is based in California, with plans to expand across the U.S. and internationally. Our pilot project will launch in Northern California, with future Urban Villages planned wherever housing need and community partnership align."
        }
      ]
    },
    {
      id: 4,
      title: "What is the Urban Village Initiative?",
      ans: [
        {
          paragraph:
            "GHI’s Urban Village Initiative (UVI) is a scalable model of walkable, mixed-use, and modularly built communities that integrate affordable housing, economic hubs, and green infrastructure. Each Urban Village is designed to be self-sustaining, climate-resilient, and socially inclusive."
        }
      ]
    },
    {
      id: 5,
      title: "What are the components of an Urban Village?",
      ans: [
        {
          paragraph: "Each Urban Village may include:"
        },
        {
          list: [
            "Multi-story housing (PolyFRAME towers)",
            "Community gardens, green space, and solar power",
            "Job training centers and educational spaces",
            "On-site childcare and shared mobility infrastructure",
            "Mixed-income units with community ownership opportunities"
          ]
        }
      ]
    },
    {
      id: 6,
      title: "How do cities partner with GHI on Urban Villages?",
      ans: [
        {
          paragraph: "We welcome partnerships with cities, counties, and regional agencies to:" 
        },
        {
          list: [
            "Provide or entitle land",
            "Coordinate zoning and permitting",
            "Access funding through housing bonds or ESG programs",
            "Co-develop long-term, impact-driven housing infrastructure"
          ]
        }
      ]
    },
    {
      id: 7,
      title: "What is the Rebuilding Lives Program?",
      ans: [
        {
          paragraph: "RLP is GHI’s temporary housing and reintegration initiative designed for individuals experiencing homelessness or displacement. Participants receive safe housing, job training, and wraparound services as a pathway to permanent housing and stability."
        }
      ]
    },
    {
      id: 8,
      title: "What support services are included?",
      ans: [
        {
          list: [
            "Vocational training in construction and maintenance",
            "Case management and mental health referrals",
            "Pathways to permanent housing within Urban Villages",
            "Opportunities to contribute to building and community life"
          ]
        }
      ]
    },
    {
      id: 9,
      title: "What is the Community Investment Fund?",
      ans: [
        {
          paragraph: "The CIF enables community members to invest in GHI’s affordable housing developments through small-dollar contributions (e.g., $500 or more) under Regulation Crowdfunding (Reg CF) or Regulation A+ crowdfunding regulations. Instead of a donation, contributors earn equity that can be applied toward future rent or long-term returns."
        }
      ]
    },
    {
      id: 10,
      title: "How is the CIF different from a donation?",
      ans: [
        {
          paragraph: "Donations are tax-deductible gifts, while CIF contributions are investments with the potential for equity appreciation, rental offsets, or return of principal. CIF enables inclusive participation in real estate that has traditionally been inaccessible to working-class communities."
        }
      ]
    },
    {
      id: 11,
      title: "How can I participate?",
      ans: [
        {
          paragraph: "Once launched, you can join CIF by visiting our 'Invest With Us' page, reviewing the offering materials, and contributing through a secure platform."
        }
      ]
    },
    {
      id: 12,
      title: "What is the PolyFRAME system?",
      ans: [
        {
          paragraph: "PolyFRAME is GHI’s proprietary steel–concrete composite structural system designed for fast, resilient, and modular construction. It is engineered to withstand earthquakes, wildfires, floods, and high winds, making it ideal for mid-rise affordable housing."
        }
      ]
    },
    {
      id: 13,
      title: "Can we integrate our architect into a PolyFRAME project?",
      ans: [
        {
          paragraph: "Yes. We work closely with your design team to integrate PolyFRAME as the structural backbone of your building. We offer Revit/CAD modules, service sleeves, and stamped engineering drawings for seamless coordination."
        }
      ]
    },
    {
      id: 14,
      title: "How does the system accommodate MEP, balconies, and open spaces?",
      ans: [
        {
          paragraph: "The system features vertical shafts and beam penetrations for MEP, as well as modular supports for balconies, and can span open-plan ground floors for lobbies or training centers."
        }
      ]
    },
    {
      id: 15,
      title: "What is the typical building size and height?",
      ans: [
        {
          paragraph: "Most towers are 4–6 stories, with 32–72 units per building."
        }
      ]
    },
    {
      id: 16,
      title: "Is this suitable for cities with strict seismic or fire codes?",
      ans: [
        {
          paragraph: "Absolutely. The system is being tested for ICC Evaluation and meets California’s highest safety standards. Its columns feature integrated fire-misting systems, seismic base isolation, and complete concrete embedment."
        }
      ]
    },
    {
      id: 17,
      title: "How can cities or nonprofits partner with GHI?",
      ans: [
        {
          list: [
            "Land contributions or joint venture development",
            "Public funding partnerships (HCD, SGC, ESG grants)",
            "Pilot sites for RLP or Urban Villages",
            "Shared equity or operating partnerships"
          ]
        }
      ]
    },
    {
      id: 18,
      title: "How can I support or donate?",
      ans: [
        {
          paragraph: "You can visit our Donate page to make a one-time or monthly gift. All donations are fully tax-deductible. Or explore our Community Investment Fund if you'd like to build equity while helping us build housing."
        }
      ]
    },
    {
      id: 19,
      title: "What makes GHI different from traditional developers?",
      ans: [
        {
          paragraph: "We are a mission-driven, nonprofit developer using proprietary, resilient technology to create community-owned, equity-centered housing. We reinvest all surplus into expanding our impact, not shareholder profits."
        }
      ]
    }
  ];

  return (
    <section className="contact-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="contact-box">
              <div className="section-tagline">Find Clarity Here</div>
              <h1 className="section-title">Your Questions Answered</h1>
              <p>
                Get to know how the Global Housing Initiative operates, what drives our
                innovation, and how you can invest, join, or partner in building a
                resilient housing future.
              </p>
            </div>
          </div>

          <div className="col-lg-8">
            <section className="faq-section">
              <div className="faq-container">
                <div className="faq-list">
                  {QS.map(({ id, title, ans }) => (
                    <Accordion key={id} ques={title} ans={ans} />
                  ))}
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Accordionsection;
