import React from "react"
import CookieConsent from "react-cookie-consent"

export const Cookie = () => {
  return (
    <div>
      <CookieConsent
        debug={true}
        location='bottom'
        style={{
          background: "#b4cfb0",
          color: " #66806a",
          fontSize: "20px",
        }}
        buttonStyle={{
          background: "#66806a",
          color: "#fff",
          fontSize: "20px",
          padding: "15px",
        }}
        buttonText='Jag gillar kakor!'
        expires={150}
      >
        Den här sidan använder små goda kakor 🍪
      </CookieConsent>
    </div>
  )
}
