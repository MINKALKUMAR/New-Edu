import { useState } from 'react';

// Remove direct imports and use dynamic imports with error handling
const speakerImages = {
  Anshu: new URL('../assets/speakers/Anshu.jpeg', import.meta.url).href,
  Parvinder: new URL('../assets/speakers/Parvinder.jpeg', import.meta.url).href,
  Picheswar: new URL('../assets/speakers/Picheswar.jpeg', import.meta.url).href,
  Manoj: new URL('../assets/speakers/Manoj.jpeg', import.meta.url).href,
  Manpreet: new URL('../assets/speakers/Manpreet.jpeg', import.meta.url).href,
  Sanjay: new URL('../assets/speakers/Sanjay.jpeg', import.meta.url).href,
  Murari: new URL('../assets/speakers/Murari.jpeg', import.meta.url).href,
  Devendra: new URL('../assets/speakers/Devendra.jpeg', import.meta.url).href,
  Akansha: new URL('../assets/speakers/Akansha.jpeg', import.meta.url).href,
  Suresh: new URL('../assets/speakers/Suresh.jpeg', import.meta.url).href,
  Jayanand: new URL('../assets/speakers/Jayanand.jpeg', import.meta.url).href,
  Jagtar: new URL('../assets/speakers/Jagtar.jpeg', import.meta.url).href,
  Raghuveer: new URL('../assets/speakers/Raghuveer.jpeg', import.meta.url).href,
  Gurpreet: new URL('../assets/speakers/Gurpreet.jpeg', import.meta.url).href,
  Ankur: new URL('../assets/speakers/Ankur.jpeg', import.meta.url).href,
  Pankaj: new URL('../assets/speakers/Pankaj.jpeg', import.meta.url).href,
  PankajKumar: new URL('../assets/speakers/PankajKumar.jpeg', import.meta.url).href,
  Ramandeep: new URL('../assets/speakers/Ramandeep.jpeg', import.meta.url).href,
  Honey: new URL('../assets/speakers/Honey.jpeg', import.meta.url).href,
  Vijay: new URL('../assets/speakers/Vijay.jpeg', import.meta.url).href,
  Harpal: new URL('../assets/speakers/Harpal.jpeg', import.meta.url).href,
  Amit: new URL('../assets/speakers/Amit.jpeg', import.meta.url).href,
  SubarnoBhattacharyya: new URL('../assets/speakers/SubarnoBhattacharyya.jpeg', import.meta.url).href,
  Shankar: new URL('../assets/speakers/Shankar.jpeg', import.meta.url).href,
  Anand: new URL('../assets/speakers/Anand.jpeg', import.meta.url).href,
  Rajanikant: new URL('../assets/speakers/Rajanikant.jpeg', import.meta.url).href,
};

// Restored: horizontally auto-scrolling "Legend Visionaries" carousel
// - Keeps your theme colors and hover effects
// - Preserves image error fallbacks (initials + gradient)
// - Cleaner logic: duplicates are created at render-time for seamless looping
export default function Speakers() {
  const [failedImages, setFailedImages] = useState({});
const visionaries = [
  {
    id: 1,
    name: "Dr. Anshu Kataria",
    title: "Chairman",
    imagePath: speakerImages.Anshu,
    designation: "Aryan Group of Colleges",
  },
  {
    id: 2,
    name: "Prof.(Dr.) Parvinder Singh",
    title: "Chairman & Director",
    imagePath: speakerImages.Parvinder,
    designation:
      "Confederation of Indian Private Universities & International Academic Affairs-Chandigarh",
  },
  {
    id: 3,
    name: "Dr. Picheswar Gadde",
    title: "Chancellor",
    imagePath: speakerImages.Picheswar,
    designation: "Lingaya’s Vidyapeeth, Lingaya's Group, Haryana",
  },
  {
    id: 4,
    name: "Dr. Manoj Manuja",
    title: "Vice Chancellor",
    imagePath: speakerImages.Manoj,
    designation: "Geeta University",
  },
  {
    id: 5,
    name: "Prof (Dr.) Manpreet Singh Manna",
    title: "Vice Chancellor",
    imagePath: speakerImages.Manpreet,
    designation: "Chandigarh University",
  },
  {
    id: 6,
    name: "Dr. Sanjay Bahl",
    title: "Vice Chancellor",
    imagePath: speakerImages.Sanjay,
    designation: "Indus International University",
  },
  {
    id: 7,
    name: "Prof. (Dr.) Murari Lal Gaur",
    title: "Chief Advisor",
    imagePath: speakerImages.Murari,
    designation:
      "Rawatpura Sarkar Group of Institutions, MP | Academic Board Member, Banaras Hindu University",
  },
  {
    id: 8,
    name: "Prof (Dr.) Devendra Sharma",
    title: "Vice Chancellor",
    imagePath: speakerImages.Devendra,
    designation: "HRIT University",
  },
  {
    id: 9,
    name: "Dr. Akansha Jain",
    title: "Co-Founder",
    imagePath: speakerImages.Akansha,
    designation: "EFOS.in",
  },
  {
    id: 10,
    name: "Suresh Babu Lakshmanan",
    title: "Associate Vice President",
    imagePath: speakerImages.Suresh,
    designation: "ICT Academy",
  },
  {
    id: 11,
    name: "Prof. Jayanand",
    title: "Pro Vice Chancellor",
    imagePath: speakerImages.Jayanand,
    designation: "Shobhit Deemed University",
  },
  {
    id: 12,
    name: "Prof. (Dr.) Pankaj Kumar Mishra",
    title: "Pro Vice Chancellor",
    imagePath: speakerImages.PankajKumar,
    designation: "Future University",
  },
  {
    id: 13,
    name: "Dr. Jagtar Singh Dhiman",
    title: "Pro Vice Chancellor",
    imagePath: speakerImages.Jagtar,
    designation: "Guru Kashi University, Punjab",
  },
  {
    id: 14,
    name: "Dr. Raghuveer VR",
    title: "Pro Vice Chancellor – Academic Affairs",
    imagePath: speakerImages.Raghuveer,
    designation: "Chandigarh University",
  },
  {
    id: 15,
    name: "Prof.(Dr.) Gurpreet Singh",
    title: "Founder Director",
    imagePath: speakerImages.Gurpreet,
    designation: "Chandigarh University Online",
  },
  {
    id: 16,
    name: "Ankur Gill",
    title: "Director of Operations",
    imagePath: speakerImages.Ankur,
    designation: "Swami Vivekanand Group of Institutes (SVGOI)",
  },
  {
    id: 17,
    name: "Prof.(Dr.) Pankaj Gupta",
    title: "Executive Director (CESM)",
    imagePath: speakerImages.Pankaj,
    designation: "O. P. Jindal Global University",
  },
  {
    id: 18,
    name: "Prof.(Dr.) Ramandeep Saini",
    title: "Director-Principal",
    imagePath: speakerImages.Ramandeep,
    designation: "Chandigarh Business School of Administration",
  },
  {
    id: 19,
    name: "Dr. Honey Sharma",
    title: "Campus Director",
    imagePath: speakerImages.Honey,
    designation: "Gulzar Group Of Institutes",
  },
  {
    id: 20,
    name: "Prof. Dr. Vijay Kumar Banga",
    title: "Director",
    imagePath: speakerImages.Vijay,
    designation:
      "Govind Ballabh Pant Institute of Engineering & Technology, Pauri Garhwal, Uttarakhand",
  },
  {
    id: 21,
    name: "Dr. Harpal Thethi",
    title:
      "Professor & Executive Dean - Corporate Relations & Career Planning",
    imagePath: speakerImages.Harpal,
    designation: "Lovely Professional University",
  },
  {
    id: 22,
    name: "Dr. Amit Jain",
    title: "Director",
    imagePath: speakerImages.Amit,
    designation: "Inderprastha Engineering College (IES)",
  },
  {
    id: 23,
    name: "Subarno Bhattacharyya",
    title: "Assistant Director",
    imagePath: speakerImages.SubarnoBhattacharyya,
    designation:
      "O.P. Jindal Global (Institution of Eminence) Deemed-to-be-University",
  },
  {
    id: 24,
    name: "Prof. Shankar Iyer",
    title: "Head - Centre for Placements and Career Guidance",
    imagePath: speakerImages.Shankar,
    designation:
      "Christ University Pune Lavasa Campus, Maharashtra",
  },
  {
    id: 25,
    name: "Dr. Anand Kr Shukla",
    title: "Dean",
    imagePath: speakerImages.Anand,
    designation: "Lovely Professional University",
  },
  {
    id: 26,
    name: "Prof. Rajanikant Verma",
    title: "Professor",
    imagePath: speakerImages.Rajanikant,
    designation: "Zakir Husain Delhi College, University of Delhi",
  },
];


  // Duplicate at render-time for smooth seamless loop
  const looped = [...visionaries, ...visionaries];

  const styles = {
    section: {
      padding: '80px 0',
      backgroundColor: '#0b1f3d',
      position: 'relative',
      overflow: 'hidden',
    },
    container: {
      maxWidth: '1400px',
      margin: '0 auto',
      padding: '0 20px',
      position: 'relative',
    },
    headingContainer: {
      textAlign: 'center',
      marginBottom: '60px',
      position: 'relative',
    },
    headingTop: {
      color: '#4facfe',
      fontSize: '1.2rem',
      fontWeight: '600',
      marginBottom: '8px',
      textTransform: 'uppercase',
      letterSpacing: '4px',
      opacity: '0.9',
    },
    headingMain: {
           fontSize: '50px',
          fontWeight: '700',
          color: 'white',
          marginBottom: '10px'
    },
    headingLine: {
      content: '""',
      position: 'absolute',
      bottom: '-15px',
      left: '50%',
      transform: 'translateX(-50%)',
      width: '150px',
      height: '4px',
      background: 'linear-gradient(90deg, #4facfe 0%, #00f2fe 100%)',
      borderRadius: '2px',
    },
    scrollContainer: {
      position: 'relative',
      width: '100%',
      overflow: 'hidden',
      padding: '20px 0',
    },
    scrollTrack: {
      display: 'flex',
      width: 'max-content',
      animation: 'scrollHorizontal 60s linear infinite', // Changed from 30s to 60s
    },
    card: {
      flex: '0 0 350px',
      height: '400px',
      margin: '0 15px',
      borderRadius: '15px',
      overflow: 'hidden',
      position: 'relative',
      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.5)',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
      backgroundColor: '#102a4d',
    },
    image: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      transition: 'transform 0.3s ease',
      display: 'block',
    },
    overlay: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      background: 'linear-gradient(transparent, rgba(11, 31, 61, 0.95))',
      padding: '30px 25px',
      color: '#ffffff',
    },
    name: {
      fontSize: '1.4rem',
      fontWeight: 600,
      margin: 0,
      marginBottom: '8px',
      lineHeight: 1.3,
    },
    title: {
      fontSize: '1.2rem',
      fontWeight: 500,
      margin: 0,
      marginBottom: '4px',
      lineHeight: 1.3,
    },
    designation: {
      fontSize: '0.95rem',
      opacity: 0.9,
      margin: 0,
      lineHeight: 1.5,
      fontWeight: 400,
    },
    gradientLeft: {
      position: 'absolute',
      left: 0,
      top: 0,
      bottom: 0,
      width: '120px',
      background: 'linear-gradient(90deg, #0b1f3d 0%, rgba(11,31,61,0) 100%)',
      zIndex: 2,
      pointerEvents: 'none',
    },
    gradientRight: {
      position: 'absolute',
      right: 0,
      top: 0,
      bottom: 0,
      width: '120px',
      background: 'linear-gradient(270deg, #0b1f3d 0%, rgba(11,31,61,0) 100%)',
      zIndex: 2,
      pointerEvents: 'none',
    },
    styleTag: `
      @keyframes scrollHorizontal {
        0% { transform: translateX(0); }
        100% { transform: translateX(-50%); }
      }
      .visionary-card:hover {
        transform: scale(1.05);
        box-shadow: 0 15px 40px rgba(0, 0, 0, 0.7);
      }
      @media (max-width: 1024px) {
        .visionary-card { flex-basis: 300px !important; height: 360px !important; }
      }
      @media (max-width: 640px) {
        .visionary-card { flex-basis: 260px !important; height: 320px !important; }
      }
    `,
  };

  const getPlaceholderColor = (index) => {
    const colors = [
      'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
      'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
      'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
      'linear-gradient(135deg, #5ee7df 0%, #b490ca 100%)',
      'linear-gradient(135deg, #d299c2 0%, #fef9d7 100%)',
    ];
    return colors[index % colors.length];
  };

  const getInitials = (name) =>
    name
      .split(' ')
      .filter(Boolean)
      .map((w) => w[0])
      .join('')
      .toUpperCase();

  return (
    <section id="past-speakers" style={styles.section}>
      <style dangerouslySetInnerHTML={{ __html: styles.styleTag }} />
      <div style={styles.container}>
        <div style={styles.headingContainer}>
          {/* <p style={styles.headingTop}>Expert Speakers</p> */}
          <h2 style={styles.headingMain}>
            Past Speakers
            <span style={styles.headingLine}></span>
          </h2>
        </div>

        <div style={styles.scrollContainer}>
          <div style={styles.gradientLeft} />
          <div style={styles.gradientRight} />

          <div style={styles.scrollTrack}>
            {looped.map((visionary, index) => (
              <div key={`${visionary.name}-${index}`} className="visionary-card" style={styles.card}>
                {!failedImages[index] ? (
                  <img
                    src={visionary.imagePath}
                    alt={visionary.name}
                    className="visionary-image"
                    style={styles.image}
                    onError={() => {
                      console.warn(`Failed to load image for ${visionary.name}`);
                      setFailedImages(prev => ({ ...prev, [index]: true }));
                    }}
                  />
                ) : (
                  <div
                    style={{
                      ...styles.image,
                      background: getPlaceholderColor(index),
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#ffffff',
                      fontSize: '3rem',
                      fontWeight: 'bold',
                    }}
                  >
                    {getInitials(visionary.name)}
                  </div>
                )}

                <div style={styles.overlay}>
                  <h3 style={styles.name}>{visionary.name}</h3>
                  <p style={styles.title}>{visionary.title}</p>
                  <p style={styles.designation}>{visionary.designation}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
