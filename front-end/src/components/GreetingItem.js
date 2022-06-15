import React from "react"
import moment from "moment"

export const GreetingItem = ({ greeting, onLikeIncrease }) => {
  return (
    <div className='greeting-card'>
      <p className='greeting-message'> {greeting.message} </p>

      <div className='likesWrapper'>
        <div className='button-and-like'>
          <button
            onClick={() => onLikeIncrease(greeting._id)}
            className='heart-button'
          >
            {""}
            <span>&hearts;</span>
          </button>
          <p className='numberOfLikes'> x {greeting.hearts} </p>
        </div>
        <p className='date'> {moment(greeting.createdAt).fromNow()}</p>
      </div>
    </div>
  )
}
