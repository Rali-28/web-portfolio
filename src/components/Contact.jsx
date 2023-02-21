// * Important imports for using email js
import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'


const Contact = () => {

  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm('service_qw7b007', 'template_pvxo4xa', form.current, 'g43TL_zvA-sxTVN3B')
      .then((result) => {
        console.log(result.text)
      }, (error) => {
        console.log(error.text)
      }) 
  }

  return (

    // * Main container div for the contact section
    <div id='contact' name='contact' className='w-full h-full p-4 text-white bg-gradient-to-b from-black to-gray-800'>

      {/* 
        // * Container div for arranging and styling the contact section
      */}
      <div className='flex flex-col justify-center h-full max-w-screen-lg p-4 mx-auto'>

        {/* 
          // * Header container
        */}
        <div className='pb-8'>
          <p className='inline text-4xl font-bold border-b-4 border-gray-500'>Contact</p>
          <p className='py-6'>Send me a message to get in touch.</p>
        </div>

        {/* 
          // * Forms container
          // * Forms that will enable the viewer to send me a message
          // TODO: Use EmailJS to enable viewers to send me a message
        */}
        <div className='flex items-center justify-center'>
          <form ref={form} onSubmit={sendEmail} className='flex flex-col w-full md:w-1/2'>

            {/* Name of Sender Input */}
            <input 
              type='text'
              name='user_name'
              placeholder='Enter your name'
              className='contact__form-input'
            />

            {/* Email address of sender Input */}
            <input 
              type='text'
              name='user_email'
              placeholder='Enter your email'
              className='contact__form-input'
            />

            {/* Message Subject Input */}
            <input 
              type='text'
              name='user_subject'
              placeholder='Subject'
              className='contact__form-input'
            />
            {/* Message input */}
            <textarea 
              name="user_message" 
              rows="10"
              className='contact__form-input'
            >
              
            </textarea>

            {/* Button for submitting completed forms */}
            <input type='submit' value='Send' className='flex items-center px-6 py-3 mx-auto my-8 text-white duration-300 rounded-md cursor-pointer bg-gradient-to-b from-cyan-500 to-blue-500 hover:scale-110' />

          </form>
        </div>
      </div>
      {/* // * End container div */}
    </div> // * End main div
  )
}

export default Contact