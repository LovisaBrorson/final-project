import React from "react"

export const GreetingForm = ({ onFormSubmit, newGreeting, setNewGreeting }) => {
  return (
    <div className='form-card'>
      <form onSubmit={onFormSubmit}>
        <label htmlFor='newGreeting' className='form-heading'>
          Skicka en hälsning{" "}
        </label>
        <textarea
          className='textarea'
          id='newGreeting'
          type='text'
          minLength='5'
          maxLength='200'
          rows='4'
          value={newGreeting}
          onChange={(event) => setNewGreeting(event.target.value)}
        />
        <button
          disabled={newGreeting.length < 5}
          type='submit'
          className='heart-beat'
        >
          <span className='read-heart'></span>
          {""} Sänd hälsning <span className='read-heart'></span>
          {""}
        </button>
        <span className='caracters-left'>
          {" "}
          Caracters left: {200 - newGreeting.length}{" "}
        </span>
      </form>
    </div>
  )
}
