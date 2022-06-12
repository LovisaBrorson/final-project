import React, { useEffect, useState } from "react"
import { API_URL } from "../utils/urls"
import { GreetingForm } from "./GreetingForm"
import { GreetingItem } from "./GreetingItem"

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

    fetch("http://localhost:8080/greetings", options)
      .then((res) => res.json())
      .then((data) => setGreetings((prev) => [...prev, data.response]))
      .finally(() => {
        setNewGreeting("")
      })
  }

  const handleLikeIncrease = (greetingId) => {
    const options = {
      method: "POST",
    }
    fetch(
      `https://happythoughts-api-lovisa.herokuapp.com/greetings/${greetingId}/like`,
      options
    )
      //fetch(`https://happy-greetings-technigo.herokuapp.com/greetings/${thoughtId}/like`, options)
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

// import React, { useEffect, useState } from "react"
// import { API_URL } from "../utils/urls"
// import { ThoughtForm } from "./ThoughtForm"
// import { ThoughtItem } from "./ThoughtItem"

// export const Guestbookapp = () => {
//   const [greetings, setGreetings] = useState([])
//   const [newGreeting, setNewGreeting] = useState("")
//   const [loading, setLoading] = useState(true)

//   useEffect(() => {
//     if (loading) {
//       fetchTexts()
//     }
//   }, [loading])

//   const fetchTexts = async () => {
//     setLoading(true)
//     const response = await fetch(API_URL)
//     const data = await response.json()
//     setGreetings(data)
//     console.log(data)
//     setLoading(false)
//   }

//   const handleFormSubmit = (event) => {
//     event.preventDefault()

//     const options = {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ message: newGreeting }),
//     }

//     fetch(API_URL, options)
//       .then((res) => res.json())
//       .then((data) => setGreetings([data.response, ...greetings]))
//       .finally(() => setNewGreeting(""))
//   }

//   const handleLikeIncrease = (thoughtId) => {
//     const options = {
//       method: "POST",
//     }
//     fetch(
//       `https://happythoughts-api-lovisa.herokuapp.com/greetings/${thoughtId}/like`,
//       options
//     )
//       //fetch(`https://happy-greetings-technigo.herokuapp.com/greetings/${thoughtId}/like`, options)
//       .then((res) => res.json())
//       .then((data) => {
//         const updatedThoughts = greetings.map((item) => {
//           if (item._id === data.response._id) {
//             item.hearts = Number(item.hearts) + 1
//             return item
//           } else {
//             return item
//           }
//         })
//         setGreetings(updatedThoughts)
//       })
//   }

//   return (
//     <div className='container'>
//       <ThoughtForm
//         onFormSubmit={handleFormSubmit}
//         newGreeting={newGreeting}
//         setNewGreeting={setNewGreeting}
//       />

//       {!loading &&
//         greetings.map((thought) => (
//           <ThoughtItem
//             key={thought?._id}
//             thought={thought}
//             onLikeIncrease={handleLikeIncrease}
//           />
//         ))}
//     </div>
//   )
// }

// export default Guestbookapp
