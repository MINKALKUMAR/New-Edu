import React from "react";
import banner from "../assets/MailerPhoto.jpg"; // local image import

export default function EmailCopyBanner() {
  const hostedFallback = "https://www.edutomorrow.in/assets/MailerPhoto.jpg";
  const targetLink = "https://www.edutomorrow.in";

  // Convert image to Base64 (for reliable pasting)
  async function imageUrlToDataUrl(url) {
    const resp = await fetch(url, { cache: "no-cache" });
    if (!resp.ok) throw new Error("Failed to fetch image: " + resp.status);
    const blob = await resp.blob();
    return await new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result);
      reader.onerror = reject;
      reader.readAsDataURL(blob);
    });
  }

  // ✅ Responsive, email-safe HTML (using table for max compatibility)
  function buildHtml(imgSrc) {
    return `
      <!-- Responsive Email Banner -->
      <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="margin:0; padding:0;">
        <tr>
          <td align="center" style="text-align:center;">
            <a href="${targetLink}" target="_blank" rel="noopener noreferrer" style="text-decoration:none;">
              <img src="${imgSrc}"
                   alt="Edutomorrow"
                   width="100%"
                   style="display:block; width:100%; max-width:1100px; height:auto; border-radius:12px; cursor:pointer; margin:0 auto;" />
            </a>
          </td>
        </tr>
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
      const textContent = `Edutomorrow - ${targetLink}`;

      const clipboardItems = {};
      clipboardItems["text/html"] = new Blob([htmlContent], { type: "text/html" });
      clipboardItems["text/plain"] = new Blob([textContent], { type: "text/plain" });

      if (navigator.clipboard && window.ClipboardItem) {
        await navigator.clipboard.write([new ClipboardItem(clipboardItems)]);
        alert("✅ Copied successfully! Now paste in your email.");
      } else {
        const temp = document.createElement("textarea");
        temp.value = htmlContent;
        document.body.appendChild(temp);
        temp.select();
        document.execCommand("copy");
        document.body.removeChild(temp);
        alert("⚠️ Copied as plain text (use Chrome for best results).");
      }
    } catch (err) {
      console.error("Copy failed:", err);
      alert("❌ Copy failed. Check clipboard permissions or try Chrome/Edge.");
    }
  };

  return (
    <div style={styles.container}>
      <a href={targetLink} target="_blank" rel="noopener noreferrer">
        <img src={banner} alt="Edutomorrow" style={styles.image} />
      </a>

      <div style={{ marginTop: 18 }}>
        <button style={styles.button} onClick={handleCopy}>
          Copy Design for Email
        </button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    marginTop: "80px",
  },
  image: {
    width: "100%",
    maxWidth: "1100px", // Matches the email HTML size
    height: "auto",
    borderRadius: "12px",
    cursor: "pointer",
    boxShadow: "0 6px 24px rgba(0,0,0,0.18)",
    display: "block",
    margin: "0 auto",
  },
  button: {
    padding: "12px 24px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "16px",
    fontWeight: 600,
  },
};
