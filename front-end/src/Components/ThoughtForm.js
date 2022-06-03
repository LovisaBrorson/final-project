import React from "react"

export const ThoughtForm = ({ onFormSubmit, newThought, setNewThought }) => {
  return (
    <div className='form-card'>
      <form onSubmit={onFormSubmit}>
        <label htmlFor='newThought' className='form-heading'>
          What makes you happy?{" "}
        </label>
        <textarea
          className='textarea'
          id='newThougt'
          type='text'
          maxLength='140'
          rows='4'
          value={newThought}
          onChange={(event) => setNewThought(event.target.value)}
        />
        <button
          disabled={newThought.length < 5}
          type='submit'
          className='heart-beat'
        >
          <span className='read-heart'>❤</span>
          {""} Send happy thought <span className='read-heart'>❤</span>
          {""}
        </button>
        <span className='caracters-left'>
          {" "}
          Caracters left: {140 - newThought.length}{" "}
        </span>
      </form>
    </div>
  )
}
