import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import { Exhibitions } from "./components/exhibition"
import { Contact } from "./components/contact"
import { Gallery } from "./components/gallery"
import { Info } from "./components/infoaboutBorje"
import { Navbar } from "./components/navbar"
import { Welcome } from "./components/welcome"
import Guestbookapp from "./components/guestbookapp"

export const App = () => {
  return (
    <BrowserRouter>
      <>
        <main>
          <Navbar />

          <Routes>
            <Route path='/' element={<Welcome />} />

            <Route path='/contact' element={<Contact />} />

            <Route path='/info' element={<Info />} />

            <Route path='/gallery' element={<Gallery />} />

            <Route path='/exhibitions' element={<Exhibitions />} />

            <Route path='/guestbook' element={<Guestbookapp />} />
          </Routes>
        </main>
      </>
    </BrowserRouter>
  )
}

export default App
