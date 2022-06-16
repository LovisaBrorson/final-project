import React, { useState } from "react"
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom"

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
  const [openLinks, setOpenLinks] = useState(true)

  return (
    <BrowserRouter
      openLinks={openLinks}
      onClick={() => setOpenLinks(!openLinks)}
    >
      <Navbar />

      <Routes>
        <Route path='/' element={<Welcome />} openLinks={openLinks} />

        <Route path='/contact' element={<Contact />} />

        <Route path='/info' element={<Info />} />

        <Route path='/gallery' element={<Gallery />} />

        <Route path='/exhibit' element={<Exhibit />} />

        <Route path='/guestbook' element={<Guestbookapp />} />

        <Route path='/404' element={<NotFond />} />

        <Route path='*' element={<Navigate to='/404' replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
