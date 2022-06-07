import React, { useEffect, useState } from "react"
import { API_URL } from "../utils/urls"
import { ThoughtForm } from "./thoughtForm"
import { ThoughtItem } from "./thoughtItem"
//import "./guestbook.css"

export const Guestbookapp = () => {
  const [thoughts, setThoughts] = useState([])
  const [newThought, setNewThought] = useState("")
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (loading) {
      fetchTexts()
    }
  }, [loading])

  const fetchTexts = async () => {
    setLoading(true)
    const response = await fetch(API_URL)
    const data = await response.json()
    setThoughts(data)
    console.log(data)
    setLoading(false)
  }

  const handleFormSubmit = (event) => {
    event.preventDefault()

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message: newThought }),
    }

    fetch(API_URL, options)
      .then((res) => res.json())
      .then((data) => setThoughts([data.response, ...thoughts]))
      .finally(() => setNewThought(""))
  }

  const handleLikeIncrease = (thoughtId) => {
    const options = {
      method: "POST",
    }
    fetch(
      `https://happythoughts-api-lovisa.herokuapp.com/thoughts/${thoughtId}/like`,
      options
    )
      //fetch(`https://happy-thoughts-technigo.herokuapp.com/thoughts/${thoughtId}/like`, options)
      .then((res) => res.json())
      .then((data) => {
        const updatedThoughts = thoughts.map((item) => {
          if (item._id === data.response._id) {
            item.hearts = Number(item.hearts) + 1
            return item
          } else {
            return item
          }
        })
        setThoughts(updatedThoughts)
      })
  }

  return (
    <div className='container'>
      <ThoughtForm
        onFormSubmit={handleFormSubmit}
        newThought={newThought}
        setNewThought={setNewThought}
      />

      {!loading &&
        thoughts.map((thought) => (
          <ThoughtItem
            key={thought?._id}
            thought={thought}
            onLikeIncrease={handleLikeIncrease}
          />
        ))}
    </div>
  )
}

export default Guestbookapp
