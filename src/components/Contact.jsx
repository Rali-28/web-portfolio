import React from 'react'

const Contact = () => {
  return (

    // * Main container div for the contact section
    <div>

      {/* 
        // * Container div for arranging and styling the contact section
      */}
      <div>

        {/* 
          // * Header container
        */}
        <div>
          <p>Contact</p>
          <p>Send me a message to get in touch.</p>
        </div>

        {/* 
          // * Forms container
          // * Forms that will enable the viewer to send me a message
        */}
        <div>
          <form action=''>

            {/* Name of Sender Input */}
            <input 
              type='text'
              name='name'
              placeholder='Enter your name'
              className='contact__form-input'
            />

            {/* Email address of sender Input */}
            <input 
              type='text'
              name='email'
              placeholder='Enter your email'
              className='contact__form-input'
            />

            {/* Message Subject Input */}
            <input 
              type='text'
              name='subject'
              placeholder='Subject'
              className='contact__form-input'
            />
            {/* Message input */}
            <textarea 
              name="message" 
              rows="10"
              className='contact__form-input'
            >
              
            </textarea>
          </form>
        </div>
      </div>
      {/* // * End container div */}
    </div> // * End main div
  )
}

export default Contact