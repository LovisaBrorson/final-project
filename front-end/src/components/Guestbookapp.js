import React, { useEffect, useState } from "react"
import { API_URL } from "../utils/urls"
import { GreetingForm } from "./GreetingForm"
import { GreetingItem } from "./GreetingItem"
import Loader from "./Loader"

export const Guestbookapp = () => {
  const [greetings, setGreetings] = useState([])
  const [newGreeting, setNewGreeting] = useState("")
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
    setGreetings(data)
    setLoading(false)
  }

  const handleFormSubmit = (event) => {
    event.preventDefault()
    setLoading(false)

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message: newGreeting }),
    }

    fetch(API_URL, options)
      .then((res) => res.json())
      .then((data) => setGreetings((prev) => [data.response, ...prev]))
      .finally(() => {
        setNewGreeting("")
      })
  }

  const handleLikeIncrease = (greetingId) => {
    const options = {
      method: "POST",
    }
    fetch(
      `https://borjebrorson.herokuapp.com/greetings/${greetingId}/like`,
      options
    )
      .then((res) => res.json())
      .then((data) => {
        const updatedGreetings = greetings.map((item) => {
          if (item._id === data.response._id) {
            item.hearts = Number(item.hearts) + 1
            return item
          } else {
            return item
          }
        })
        setGreetings(updatedGreetings)
      })
  }

  return (
    <div className='container'>
      {loading && <Loader />}
      <GreetingForm
        onFormSubmit={handleFormSubmit}
        newGreeting={newGreeting}
        setNewGreeting={setNewGreeting}
      />

      {!loading &&
        greetings.map((greeting) => (
          <GreetingItem
            key={greeting?._id}
            greeting={greeting}
            onLikeIncrease={handleLikeIncrease}
          />
        ))}
    </div>
  )
}

export default Guestbookapp
