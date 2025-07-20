// import React, { useState } from "react";

// function Accordion({ ques, ans }) {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleAccordion = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <div className="accordion-item">
//       <button onClick={toggleAccordion} className="accordion-toggle">
//         <span>{ques}</span>
//         <span>{isOpen ? "-" : "+"}</span>
//       </button>

//       {isOpen && (
//         <div className="accordion-content">
//           <p className="accordion-answer">{ans}</p>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Accordion;



import React, { useState } from "react";

function Accordion({ ques, ans }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion-item">
      <button onClick={toggleAccordion} className="accordion-toggle">
        <span>{ques}</span>
        <span>{isOpen ? "-" : "+"}</span>
      </button>

      {isOpen && (
        <div className="accordion-content">
          {Array.isArray(ans) ? (
            ans.map((section, index) => (
              <div key={index}>
                {section.heading && <strong>{section.heading}</strong>}
                {section.paragraph && <p>{section.paragraph}</p>}
                {section.list && (
                  <ul>
                    {section.list.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))
          ) : (
            <p>{ans}</p>
          )}
        </div>
      )}
    </div>
  );
}

export default Accordion;
