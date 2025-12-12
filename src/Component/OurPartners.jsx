// import FintrexLogo from "../assets/partners/Fintrex.png";
// import EducoreLogo from "../assets/partners/Educore.png";
// import WULogoWhite from "../assets/partners/WULogoWhite.png";
// import LINGAYA from "../assets/partners/LINGAYA.png";
// import KHASRAPAT from "../assets/partners/KHASRAPAT.png";
// import ICTAcademy from "../assets/partners/ICTAcademy.png";
// import Education_Future_One from "../assets/partners/Education_Future_One.png";
// import lamrin from "../assets/partners/Lamrin.png";
// import SMT from "../assets/partners/SMT.png";
// import Avanse from "../assets/partners/Avanse.jpg";
// import Gifting from "../assets/partners/Gifting.png";



// const OurPartners = () => {
//   const styles = `
//     .partner-section {
//       background: linear-gradient(135deg, #152a49 0%, #0f1f35 100%);
//       padding: 60px 40px;
//       min-height: 100vh;
//     }

//     .partner-container {
//       max-width: 1400px;
//       margin: 0 auto;
//       width: 100%;
//     }

//     .partner-header {
//       text-align: center;
//       margin-bottom: 50px;
//     }

//     .partner-title {
//       font-size: 48px;
//       font-weight: 800;
//       color: #fff;
//       margin-bottom: 10px;
//     }

//     .partner-divider {
//       width: 100px;
//       height: 4px;
//       background: #00bfff;
//       margin: 0 auto;
//     }

//     /* FIRST ROW (3 CARDS) */
//     .partner-grid.first-row {
//       display: grid;
//       grid-template-columns: repeat(3, 1fr);
//       gap: 35px;
//       margin-bottom: 60px;
//     }

//     /* SECOND ROW (4 CARDS) */
//     .partner-grid.second-row {
//   display: grid;
//   grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
//   gap: 35px;
//   justify-items: center;
//   justify-content: center;
//   margin-bottom: 60px;
// }


//     .partner-card {
//       background: #ffffff;
//       border-radius: 0px;     /* RECTANGLE LIKE WEBSITE */
//       padding: 20px;
//       height: 160px;          /* SHORTER */
//       display: flex;
//       flex-direction: column;
//       justify-content: center;
//       align-items: center;
//       position: relative;
//       border-bottom: 6px solid  #cae3ffff;
//       transition: border-color 0.3s ease;
//     }

//     .partner-card:hover {
//       border-bottom: 6px solid  #0077ffff;;
//     }

//     .partner-name {
//       position: absolute;
//       top: -35px;
//       width: 100%;
//       text-align: center;
//       color: #ffffffff;
//       font-size: 20px;
//       font-weight: 700;
//       text-transform: uppercase;
//     }

// .partner-logo {
//     width: 274px;
//     height: 141px;
//     transition: transform 0.3s ease;
//     object-fit: contain;
// }

//     /* FIRST ROW — BIGGER LOGOS */
//   .first-row .partner-logo {
//     width: 211px;
//     height: 138px;
// }

//     .partner-card:hover .partner-logo {
//       transform: scale(1.12);
//     }

//     /* Responsive */
//     @media (max-width: 900px) {
//       .partner-grid.first-row,
//       .partner-grid.second-row {
//         grid-template-columns: repeat(2, 1fr);
//       }
//     }

//     @media (max-width: 600px) {
//       .partner-grid.first-row,
//       .partner-grid.second-row {
//         grid-template-columns: repeat(1, 1fr);
//       }
//     }
//   `;

//   const partnerCategories = [
//     {
//       className: "first-row",
//       partners: [
//         { name: "Organiser", logo: FintrexLogo, link: "https://fintrexmedia.com/" },
//         { name: "Knowledge Partner", logo: EducoreLogo, link: "#" },
//         { name: "Presenting Partner", logo: WULogoWhite, link: "#" },
//       ],
//     },
//     {
//       className: "second-row",
//       partners: [
//         { name: "Networking Partner", logo: Education_Future_One, link: "#" },
//         { name: "University Partner", logo: LINGAYA, link: "#" },
//         { name: "University Partner", logo: lamrin, link: "#" },
//         { name: "Institute Partner", logo: SMT, link: "#" },
//       ],
//     },
//     {
//       className: "second-row",
//       partners: [
//         { name: "Student Success Partner", logo: Avanse, link: "#" },
//         { name: "Gifting Partner", logo: Gifting, link: "#" },
//         // { name: "University Partner", logo: lamrin, link: "#" },
//         // { name: "Institute Partner", logo: SMT, link: "#" },
//       ],
//     },
//   ];

//   return (
//     <>
//       <style>{styles}</style>

//       <section className="partner-section">
//         <div className="partner-container">
//           <div className="partner-header">
//             <h2 className="partner-title">Our Partners</h2>
//             <div className="partner-divider"></div>
//           </div>

//           {partnerCategories.map((row, rowIndex) => (
//             <div key={rowIndex} className={`partner-grid ${row.className}`}>
//               {row.partners.map((partner, index) => (
//                 <a
//                   key={index}
//                   href={partner.link}
//                   className="partner-link"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   <div className="partner-card">
//                     <p className="partner-name">{partner.name}</p>
//                     <img
//                       src={partner.logo}
//                       alt={partner.name}
//                       className="partner-logo"
//                     />
//                   </div>
//                 </a>
//               ))}
//             </div>
//           ))}
//         </div>
//       </section>
//     </>
//   );
// };

// export default OurPartners;
import FintrexLogo from "../assets/partners/Fintrex.png";
import EducoreLogo from "../assets/partners/Educore.png";
import WULogoWhite from "../assets/partners/WULogoWhite.png";
import LINGAYA from "../assets/partners/LINGAYA.png";
import KHASRAPAT from "../assets/partners/KHASRAPAT.png";
import ICTAcademy from "../assets/partners/ICTAcademy.png";
import Education_Future_One from "../assets/partners/Education_Future_One.png";
import lamrin from "../assets/partners/Lamrin.png";
import SMT from "../assets/partners/SMT.png";
import Avanse from "../assets/partners/Avanse.jpg";
import Gifting from "../assets/partners/Gifting.png";

const OurPartners = () => {
  const styles = `
    .partner-section {
      background: linear-gradient(135deg, #152a49 0%, #0f1f35 100%);
      padding: 60px 40px;
      min-height: 100vh;
    }

    .partner-container {
      max-width: 1400px;
      margin: 0 auto;
      width: 100%;
    }

    .partner-header {
      text-align: center;
      margin-bottom: 50px;
    }

    .partner-title {
      font-size: 48px;
      font-weight: 800;
      color: #fff;
      margin-bottom: 10px;
    }

    .partner-divider {
      width: 100px;
      height: 4px;
      background: #00bfff;
      margin: 0 auto;
    }

    /* FIRST ROW (3 CARDS) */
    .partner-grid.first-row {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 35px;
      margin-bottom: 60px;
    }

    /* SECOND ROW (4 CARDS) */
    .partner-grid.second-row {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 35px;
      justify-items: center;
      justify-content: center;
      margin-bottom: 60px;
    }

    /* THIRD ROW — CENTERED 2 CARDS */
    .partner-grid.third-row {
      display: flex;
      justify-content: center;
      gap: 35px;
      margin-bottom: 60px;
    }

    .partner-card {
      background: #ffffff;
      border-radius: 0px;
      padding: 20px;
      height: 160px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      position: relative;
      border-bottom: 6px solid #cae3ffff;
      transition: border-color 0.3s ease;
    }

    .partner-card:hover {
      border-bottom: 6px solid #0077ffff;
    }

    .partner-name {
      position: absolute;
      top: -35px;
      width: 100%;
      text-align: center;
      color: #ffffffff;
      font-size: 20px;
      font-weight: 700;
      text-transform: uppercase;
    }

    .partner-logo {
      width: 274px;
      height: 141px;
      transition: transform 0.3s ease;
      object-fit: contain;
    }

    /* FIRST ROW — BIGGER LOGOS */
    .first-row .partner-logo {
      width: 211px;
      height: 138px;
    }

    .partner-card:hover .partner-logo {
      transform: scale(1.12);
    }

    /* Responsive */
    @media (max-width: 900px) {
      .partner-grid.first-row,
      .partner-grid.second-row {
        grid-template-columns: repeat(2, 1fr);
      }

      .partner-grid.third-row {
        flex-direction: column;
        align-items: center;
      }
    }

    @media (max-width: 600px) {
      .partner-grid.first-row,
      .partner-grid.second-row {
        grid-template-columns: repeat(1, 1fr);
      }

      .partner-grid.third-row {
        flex-direction: column;
        align-items: center;
      }
    }
  `;

  const partnerCategories = [
    {
      className: "first-row",
      partners: [
        { name: "Organiser", logo: FintrexLogo, link: "https://fintrexmedia.com/" },
        { name: "Knowledge Partner", logo: EducoreLogo, link: "#" },
        { name: "Presenting Partner", logo: WULogoWhite, link: "#" },
      ],
    },
    {
      className: "second-row",
      partners: [
        { name: "Networking Partner", logo: Education_Future_One, link: "#" },
        { name: "University Partner", logo: LINGAYA, link: "#" },
        { name: "University Partner", logo: lamrin, link: "#" },
        { name: "Institute Partner", logo: SMT, link: "#" },
      ],
    },
    {
      className: "third-row", // FIXED ROW CLASS
      partners: [
        { name: "Student Success Partner", logo: Avanse, link: "#" },
        { name: "Gifting Partner", logo: Gifting, link: "#" },
      ],
    },
  ];

  return (
    <>
      <style>{styles}</style>

      <section className="partner-section">
        <div className="partner-container">
          <div className="partner-header">
            <h2 className="partner-title">Our Partners</h2>
            <div className="partner-divider"></div>
          </div>

          {partnerCategories.map((row, rowIndex) => (
            <div key={rowIndex} className={`partner-grid ${row.className}`}>
              {row.partners.map((partner, index) => (
                <a
                  key={index}
                  href={partner.link}
                  className="partner-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="partner-card">
                    <p className="partner-name">{partner.name}</p>
                    <img src={partner.logo} alt={partner.name} className="partner-logo" />
                  </div>
                </a>
              ))}
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default OurPartners;
