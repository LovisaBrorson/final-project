import React from "react"
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom"
import CookieConsent from "react-cookie-consent"

import "./guestbook.css"

import { Exhibit } from "./components/Exhibit"
import { Contact } from "./components/Contact"
import { Gallery } from "./components/Gallery"
import { Info } from "./components/InfoaboutBorje"
import { Navbar } from "./components/Navbar"
import { Welcome } from "./components/Welcome"
import Guestbookapp from "./components/Guestbookapp"
import NotFond from "./components/Notfond"

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path='/' element={<Welcome />} />

          <Route path='/contact' element={<Contact />} />

          <Route path='/info' element={<Info />} />

          <Route path='/gallery' element={<Gallery />} />

          <Route path='/exhibit' element={<Exhibit />} />

          <Route path='/guestbook' element={<Guestbookapp />} />

          <Route path='/404' element={<NotFond />} />

          <Route path='*' element={<Navigate to='/404' replace />} />
        </Routes>
      </BrowserRouter>
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
        expires={10}
      >
        Den här sidan använder små goda kakor 🍪
      </CookieConsent>
    </>
  )
}

export default App
