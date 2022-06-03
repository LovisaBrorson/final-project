import React from "react"
import moment from "moment"

export const ThoughtItem = ({ thought, onLikeIncrease }) => {
  return (
    <div className='thoughts-card'>
      <p className='thoughts-message'> {thought.message} </p>

      <div className='likesWrapper'>
        <div className='button-and-like'>
          <button
            onClick={() => onLikeIncrease(thought._id)}
            className='heart-button'
          >
            {""}
            <span>&hearts;</span>
          </button>
          <p className='numberOfLikes'> x {thought.hearts} </p>
        </div>
        <p className='date'> {moment(thought.createdAt).fromNow()}</p>
      </div>
    </div>
  )
}
