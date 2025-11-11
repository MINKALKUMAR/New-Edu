import FintrexLogo from "../assets/partners/Fintrex.png"
import EducoreLogo from "../assets/partners/Educore.png"
import WULogoWhite from "../assets/partners/WULogoWhite.png"
import LINGAYA from "../assets/partners/LINGAYA.png"
import KHASRAPAT from "../assets/partners/KHASRAPAT.png"
import ICTAcademy from "../assets/partners/ICTAcademy.png"
import Education_Future_One from "../assets/partners/Education_Future_One.png"
import lamrin from "../assets/partners/Lamrin.png"

const OurPartners = () => {
  const styles = `
    .partner-section {
      background: linear-gradient(135deg, #152a49 0%, #0f1f35 100%);
      padding: 60px 20px;
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .partner-container {
      max-width: 1200px;
      width: 100%;
      margin: 0 auto;
    }
    .partner-header {
      text-align: center;
      margin-bottom: 60px;
    }

    .partner-title {
      font-size: 48px;
      font-weight: 700;
      color: #ffffff;
      margin: 0 0 20px 0;
      letter-spacing: -0.5px;
    }

    .partner-divider {
      width: 80px;
      height: 4px;
      background: linear-gradient(90deg, #00bfff 0%, #0099cc 100%);
      margin: 0 auto;
      border-radius: 2px;
    }

    .partner-categories {
      display: flex;
      flex-direction: column;
      gap: 26px;
      padding: 0px 6vw;
    }

    .partner-category {
      display: flex;
      flex-direction: column;
    }

    .partner-category-title {
      font-size: 24px;
      font-weight: 600;
      color: #00bfff;
      margin: 0;
      text-align: center;
    }

    .partner-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      width: 100%;
    }

    .partner-card-wrapper {
      display: flex;
      justify-content: center;
    }

    .partner-link {
      text-decoration: none;
      width: 100%;
      max-width: 280px;
    }

    .partner-card {
      background: #fff;
      border: 1px solid rgba(0, 191, 255, 0.2);
      border-radius: 12px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 20px;
      transition: all 0.3s ease;
      cursor: pointer;
      min-height: 167px;
    }

    .partner-card:hover {
      border-color: rgba(0, 191, 255, 0.5);
      transform: translateY(-8px);
      box-shadow: 0 20px 40px rgba(0, 191, 255, 0.15);
    }

    .partner-name {
      font-size: 14px;
      font-weight: 600;
      color: #00bfff;
      margin: 0;
      text-align: center;
      text-transform: uppercase;
      letter-spacing: 1px;
    }

    .partner-logo {
      max-width: 120px;
      max-height: 80px;
      width: auto;
      height: auto;
      object-fit: contain;
      filter: brightness(0.9) contrast(1.1);
      transition: filter 0.3s ease;
    }

    /* ✅ Make Lamrin logo slightly larger */
    .partner-logo.special-logo {
      max-width: 180px;
      max-height: 100px;
    }

    // .partner-card:hover .partner-logo {
    //   filter: brightness(1.2) contrast(1.2);
    // }

    @media (max-width: 768px) {
      .partner-title {
        font-size: 36px;
      }

      .partner-grid {
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 20px;
      }

      .partner-card {
        padding: 20px 15px;
        min-height: 160px;
      }

      .partner-section {
        padding: 40px 15px;
      }
    }

    @media (max-width: 480px) {
      .partner-title {
        font-size: 28px;
      }

      .partner-grid {
        grid-template-columns: 1fr;
      }

      .partner-card {
        padding: 20px;
      }
    }
  `

  const partnerCategories = [
    {
      title: "",
      partners: [
        {
          name: "Organiser",
          logo: FintrexLogo,
          link: "https://fintrexmedia.com/",
        },
        {
          name: "Knowledge Partner",
          logo: EducoreLogo,
          link: "#",
        },
        {
          name: "Presenting Partner",
          logo: WULogoWhite,
          link: "#",
        },
      ],
    },
    {
      title: "",
      partners: [
      
        {
          name: "Networking Partner",
          logo: Education_Future_One,
          link: "#",
        },
          {
          name: "University Partner",
          logo: LINGAYA,
          link: "#",
        },
        {
          name: "University Partner",
          logo: lamrin,
          link: "#",
          className: "special-logo", // ✅ added class for last logo
        },
      ],
    },
  ]

  return (
    <>
      <style>{styles}</style>
      <section className="partner-section">
        <div className="partner-container">
          <div className="partner-header">
            <h2 className="partner-title">Our Partners</h2>
            <div className="partner-divider"></div>
          </div>

          <div className="partner-categories">
            {partnerCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="partner-category">
                <h3 className="partner-category-title">{category.title}</h3>

                <div className="partner-grid">
                  {category.partners.map((partner, partnerIndex) => (
                    <div key={partnerIndex} className="partner-card-wrapper">
                      <a
                        href={partner.link}
                        className="partner-link"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <div className="partner-card">
                          <p className="partner-name">{partner.name}</p>
                          <img
                            src={partner.logo || "/placeholder.svg"}
                            alt={partner.name}
                            className={`partner-logo ${partner.className || ""}`}
                          />
                        </div>
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default OurPartners
