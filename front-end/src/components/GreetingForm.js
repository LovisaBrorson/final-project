import React from "react"

export const GreetingForm = ({ onFormSubmit, newGreeting, setNewGreeting }) => {
  return (
    <div className='form-card'>
      <form onSubmit={onFormSubmit}>
        <label htmlFor='newGreeting' className='form-heading'>
          <h2>Gästbok</h2>
          Skriv en hälsning{" "}
        </label>
        <textarea
          className='textarea'
          id='newGreeting'
          type='text'
          minLength='5'
          maxLength='200'
          rows='5'
          value={newGreeting}
          onChange={(event) => setNewGreeting(event.target.value)}
        />
        <button
          disabled={newGreeting.length < 5}
          type='submit'
          className='send-button'
        >
          Sänd hälsning
        </button>
        <span className='caracters-left'>
          {" "}
          Caracters left: {200 - newGreeting.length}{" "}
        </span>
      </form>
    </div>
  )
}
