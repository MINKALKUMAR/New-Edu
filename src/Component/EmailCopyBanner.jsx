import React from "react";
import banner from "../assets/MailerPhoto.jpg";

export default function EmailCopyBanner() {
  const hostedFallback = "https://www.edutomorrow.in/assets/MailerPhoto.jpg";
  const targetLink = "https://www.edutomorrow.in";

  async function imageUrlToDataUrl(url) {
    const resp = await fetch(url, { cache: "no-cache" });
    if (!resp.ok) throw new Error("Failed to fetch image");
    const blob = await resp.blob();
    return await new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result);
      reader.onerror = reject;
      reader.readAsDataURL(blob);
    });
  }

  // EMAIL CARDS (NO IMAGES) + WEBSITE THEME COLORS
  function buildCardsHtml() {
    return `
      <table width="100%" cellpadding="0" cellspacing="0" style="margin-top:25px;background:white;">
        <tr>

          <!-- CARD 1 -->
          <td align="center" width="33%">
            <table cellpadding="0" cellspacing="0" 
              style="background:#ffffff;border-radius:12px;border:1px solid #d9e2f0;
              width:100%;max-width:300px;padding:20px;font-family:Arial;cursor:default;">

              <tr><td style="font-size:16px;font-weight:bold;color:#0066ff;text-align:center;">
                Sponsorship & Exhibition
              </td></tr>

              <tr><td style="font-size:14px;color:#555;text-align:center;padding-top:6px;">
                Priyansh Saharawat
              </td></tr>

              <tr><td style="font-size:14px;color:#0066ff;text-align:center;padding-top:4px;">
                priyansh@fintrexmedia.com
              </td></tr>

              <tr><td style="font-size:14px;color:#222;text-align:center;padding-top:4px;">
                7011499056
              </td></tr>

            </table>
          </td>

          <!-- CARD 2 -->
          <td align="center" width="33%">
            <table cellpadding="0" cellspacing="0" 
              style="background:#ffffff;border-radius:12px;border:1px solid #d9e2f0;
              width:100%;max-width:300px;padding:20px;font-family:Arial; cursor:default;">

              <tr><td style="font-size:16px;font-weight:bold;color:#0066ff;text-align:center;">
                Speaking & Award Nomination
              </td></tr>

              <tr><td style="font-size:14px;color:#555;text-align:center;padding-top:6px;">
                Priyanshi Choudhary
              </td></tr>

              <tr><td style="font-size:14px;color:#0066ff;text-align:center;padding-top:4px;">
                priyanshi@fintrexmedia.com
              </td></tr>

              <tr><td style="font-size:14px;color:#222;text-align:center;padding-top:4px;">
                8755676010
              </td></tr>

            </table>
          </td>

          <!-- CARD 3 -->
          <td align="center" width="33%">
            <table cellpadding="0" cellspacing="0" 
              style="background:#ffffff;border-radius:12px;border:1px solid #d9e2f0;
              width:100%;max-width:300px;padding:20px;font-family:Arial; cursor:default;">

              <tr><td style="font-size:16px;font-weight:bold;color:#0066ff;text-align:center;">
                Delegate Opportunity
              </td></tr>

              <tr><td style="font-size:14px;color:#555;text-align:center;padding-top:6px;">
                Basant Sharma
              </td></tr>

              <tr><td style="font-size:14px;color:#0066ff;text-align:center;padding-top:4px;">
                basant@fintrexmedia.com
              </td></tr>

              <tr><td style="font-size:14px;color:#222;text-align:center;padding-top:4px;">
                7505024107
              </td></tr>

            </table>
          </td>

        </tr>
      </table>
    `;
  }

  function buildHtml(imgSrc) {
    return `
      <table role="presentation" width="100%" cellspacing="0" cellpadding="0" 
      style="background:#f5f7fb;padding:20px 0;">
      
        <tr><td align="center">
          <a href="${targetLink}" target="_blank">
            <img src="${imgSrc}" width="100%" 
            style="display:block;margin:0 auto;max-width:1100px;border-radius:12px;" />
          </a>
        </td></tr>

        <tr><td>
          ${buildCardsHtml()}
        </td></tr>

      </table>
    `;
  }

  const handleCopy = async () => {
    try {
      let imgSrc;

      try {
        imgSrc = await imageUrlToDataUrl(window.location.origin + banner);
      } catch {
        try {
          imgSrc = await imageUrlToDataUrl(banner);
        } catch {
          imgSrc = hostedFallback;
        }
      }

      const htmlContent = buildHtml(imgSrc);

      await navigator.clipboard.write([
        new ClipboardItem({
          "text/html": new Blob([htmlContent], { type: "text/html" }),
          "text/plain": new Blob(["Edutomorrow Email Template"], { type: "text/plain" }),
        }),
      ]);

      alert("✅ Copied! Paste in Gmail / Outlook.");
    } catch {
      alert("❌ Copy failed. Try Chrome or Edge.");
    }
  };

  return (
    <div style={styles.wrapper}>
      <img src={banner} style={styles.image} alt="Edutomorrow" />

      <div style={styles.cardGrid}>
        <Card
          title="Sponsorship & Exhibition"
          name="Priyansh Saharawat"
          email="priyansh@fintrexmedia.com"
          phone="7011499056"
        />
        <Card
          title="Speaking & Award Nomination"
          name="Priyanshi Choudhary"
          email="priyanshi@fintrexmedia.com"
          phone="8755676010"
        />
        <Card
          title="Delegate Opportunity"
          name="Basant Sharma"
          email="basant@fintrexmedia.com"
          phone="7505024107"
        />
      </div>

      <button style={styles.button} onClick={handleCopy}>
        Copy Design for Email
      </button>
    </div>
  );
}

function Card({ title, name, email, phone }) {
  return (
    <div style={styles.card}>
      <h3 style={styles.cardTitle}>{title}</h3>
      <p style={styles.name}>{name}</p>
      <p style={styles.email}>{email}</p>
      <p style={styles.phone}>{phone}</p>
    </div>
  );
}

const styles = {
  wrapper: {
    textAlign: "center",
    marginTop: 80,
    backgroundColor: 'white',    // 🌟 Edutomorrow theme background
    paddingBottom: 40,
    paddingTop: 20,
  },
  image: {
    width: "100%",
    maxWidth: 1100,
    display: "block",
    margin: "0 auto",          // 🌟 Fix main image alignment
    borderRadius: 12,
    boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
    marginBottom: 30,
  },
  cardGrid: {
    display: "flex",
    justifyContent: "center",
    gap: 20,
    flexWrap: "wrap",
    marginBottom: 40,
  },
  card: {
    width: 260,
    background: "#fff",
    padding: 20,
    borderRadius: 12,
    border: "1px solid #d9e2f0",
    boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
    textAlign: "center",
    cursor:"default",
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#0066ff",
    marginBottom: 8,
  },
  name: {
    fontSize: 14,
    color: "#444",
  },
  email: {
    fontSize: 14,
    color: "#0066ff",
  },
  phone: {
    fontSize: 14,
    color: "#222",
  },
  button: {
    padding: "12px 24px",
    backgroundColor: "#0066ff",
    color: "#fff",
    border: "none",
    borderRadius: 6,
    cursor: "pointer",
    fontSize: 16,
    fontWeight: 600,
  },
};
