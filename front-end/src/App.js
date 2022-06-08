import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"

import "./guestbook.css"

import { Exhibitions } from "./components/exhibition"
import { Contact } from "./components/contact"
import { Gallery } from "./components/gallery"
import { Info } from "./components/infoaboutBorje"
import { Navbar } from "./components/navbar"
import { Welcome } from "./components/welcome"
import Guestbookapp from "./components/guestbookapp"
import NotFond from "./components/notfond"

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

        <Route path='/exhibitions' element={<Exhibitions />} />

        <Route path='/guestbook' element={<Guestbookapp />} />
      </Routes>
    </BrowserRouter>
  )
}

// export const App = () => {
//   return <div>Hello</div>
// }

export default App
