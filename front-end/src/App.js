import React from "react"
import { BrowserRouter, Router, Route } from "react-router-dom"

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

          <Router>
            <Route path='/' exact>
              <Welcome />
            </Route>
            <Route path='/contact' exact>
              <Contact />
            </Route>
            <Route path='/info' exact>
              <Info />
            </Route>

            <Route path='/gallery' exact>
              <Gallery />
            </Route>

            <Route path='/exhibitions' exact>
              <Exhibitions />
            </Route>
            <Route path='/guestbook' exact>
              <Guestbookapp />
            </Route>
          </Router>
        </main>
      </>
    </BrowserRouter>
  )
}

export default App
