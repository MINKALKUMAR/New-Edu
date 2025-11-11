import Amit from '../assets/SpeakersSection/Amit.png';
import Picheswar from '../assets/SpeakersSection/Picheswar.png';
import  SubarnoBhattacharyya from '../assets/SpeakersSection/SubarnoBhattacharyya.png';
import Neeta from '../assets/SpeakersSection/Dr. Neeta Bali.png';
import Isha from '../assets/SpeakersSection/Isha Verma Behl.png';
import MohdAzhar from '../assets/SpeakersSection/Mohd. Azhar.png';
import Nancy from '../assets/SpeakersSection/Nancy Juneja.png';
import Sandeep from '../assets/SpeakersSection/Sandeep Khanna.png';
import Vikrant from '../assets/SpeakersSection/Vikrant Sharma.png';
import Hari from '../assets/SpeakersSection/Dr. Hari Krishna Maram.png';
import Pranav from '../assets/SpeakersSection/Pranav Mishra.png';
import pramod from '../assets/SpeakersSection/Prof. (Dr.) Pramod Kumar Sharma.png';
import Neha from '../assets/SpeakersSection/Neha Singh.png';
import PankajKumar from '../assets/SpeakersSection/Pankaj Kumar.png';
import ParmaNand from '../assets/SpeakersSection/Parma Nand.png';
import Jaskiran from '../assets/SpeakersSection/Jaskiran kaur.png';
import Anu from '../assets/SpeakersSection/Anu Kaushal.png';
import Akansha from '../assets/SpeakersSection/Akansha.png';

const SpeakersSection = () => {
  const speakers = [
      {
      id: 2,
      name: "Dr. Picheswar Gadde",
      designation: "Chancellor",
      company: "Lingaya’s Vidyapeeth, Lingaya's Group, Haryana",
      image: Picheswar,
    },
    {
      id: 10,
      name: "Dr. Hari Krishna Maram",
      designation: "Vice Chancellor",
      company: "Global Digital University",
      image: Hari,
    },

    {
      id: 11,
      name: "Prof. (Dr.) Pramod Kumar Sharma",
      designation: "Vice-Chancellor",
      company: "Swami Vivekanand Subharti University",
      image: pramod,
    },
  
    {
      id: 12,
      name: "Prof. (Dr). Pankaj Kumar Mishra",
      designation: "Pro vice chancellor",
      company: "Future university",
      image: PankajKumar,
    },
    {
      id: 13,
      name: "Prof. (Dr.) Parma Nand",
      designation: "Pro Vice-Chancellor",
      company: "Sharda University",
      image: ParmaNand,
    },
    {
      id: 1,
      name: "Dr. Amit Jain",
      designation: "Director",
      company: "Inderprastha  Engineering  College  (IPEC)",
      image: Amit,
    },
  
    {
      id: 11,
      name: "Dr Pranav Mishra",
      designation: "Director",
      company: "Lingaya’s Lalita Devi Institute of Management & Sciences",
      image:Pranav,
    },
    {
      id: 14,
      name: "Dr. Jaskiran Kaur",
      designation: "Director",
      company: "IMS Ghaziabad (University Courses Campus)",
      image:Jaskiran,
    },
    {
      id: 3,
      name: "Subarno Bhattacharyya",
      designation: "Assistant Director",
      company: "O.P. Jindal Global (Institution of Eminence) Deemed-to-be-University",
      image: SubarnoBhattacharyya
    },
     {
      id: 15,
      name: "Anu Kaushal",
      designation: "Director Training & Communication",
      company: "Lamrin Tech Skills University Punjab",
      image: Anu,
    },
   
    {
      id: 16,
      name: "Dr. Akansha Jain",
      designation: "Co- Founder",
      company: "EFOS.in",
      image: Akansha,
    },
      {
      id: 7,
      name: "Dr Nancy Juneja",
      designation: "Mentor of Change",
      company: "Niti Ayog",
      image: Nancy,
    },
    {
      id: 9,
      name: "Vikrant Sharma",
      designation: "Director Principal",
      company: "Littlewood Public School",
      image: Vikrant,
    },
    {
      id: 12,
      name: "Ms. Neha Singh",
      designation: "Director-Advisor",
      company: "St Kabir's School and Siddharth International School",
      image: Neha,
    },
     {
      id: 6,
      name: "Mohd. Azhar",
      designation: "Principal",
      company: "Knowledge Academy School",
      image: MohdAzhar,
    },
  
    {
      id: 8,
      name: "Sandeep Khanna",
      designation: "Principal",
      company: "Shirdi Sai Public School",
      image: Sandeep,
    },
    {   
      id: 4,
      name: "Dr. Neeta Bali",
      designation: "Director Academics",
      company: "MVN Group of Schools",
      image: Neeta,
    },
    {
      id: 5,
      name: "Isha Verma Behl",
      designation: "Senior School Head",
      company: "Scottish High International School",
      image: Isha,
    },
  ];

  return (
    <section className="speakers-section" id="speakers">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Our Speakers</h2>
          <div className="section-divider"></div>
          {/* <p className="section-subtitle">
            Meet our distinguished panel of education experts and thought leaders
          </p> */}
        </div>
        
        <div className="speakerss-grid">
          {speakers.map((speaker) => (
            <SpeakerCard key={speaker.id} speaker={speaker} />
          ))}
        </div>
      </div>
    </section>
  );
};

const SpeakerCard = ({ speaker }) => {
  return (
    <div className="speaker-card">
      <div className="speaker-image-wrapper">
        <div className="speaker-image-container">
          <img 
            src={speaker.image} 
            alt={speaker.name}
            className="speaker-image"
          />
          <div className="image-overlay"></div>
        </div>
        <div className="social-links">
          <a href="#" className="social-link">
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a href="#" className="social-link">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="social-link">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
      
      <div className="speaker-info">
        <h3 className="speaker-name">{speaker.name}</h3>
        <p className="speaker-designation">{speaker.designation}</p>
        <p className="speaker-company">{speaker.company}</p>
      </div>
    </div>
  );
};

export default SpeakersSection;