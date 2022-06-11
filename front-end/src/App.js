import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"

import "./guestbook.css"

import { Exhibition } from "./components/Exhibition"
import { Contact } from "./components/Contact"
import { Gallery } from "./components/Gallery"
import { Info } from "./components/InfoaboutBorje"
import { Navbar } from "./components/Navbar"
import { Welcome } from "./components/Welcome"
import Guestbookapp from "./components/Guestbookapp"
import NotFond from "./components/Notfond"

export const App = () => {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path='/404' element={<NotFond />} />

        <Route path='/' element={<Welcome />} />

        <Route path='/contact' element={<Contact />} />

        <Route path='/info' element={<Info />} />

        <Route path='/gallery' element={<Gallery />} />

        <Route path='/exhibition' element={<Exhibition />} />

        <Route path='/guestbook' element={<Guestbookapp />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
