import React from 'react'

const About = () => {
  return (
    // * Main container for the About Section
    <div id='about' name='about' className='w-full h-screen text-white bg-gradient-to-b from-gray-800 to-black'>

      {/* 
        // * About Section container for Headers and Texts 
      */}
      <div className='flex flex-col justify-center w-full h-full max-w-screen-lg p-4 mx-auto'>

        {/* //* About Section Header */}
        <div className='pb-8'>
          <p className='inline text-4xl font-bold border-b-4 border-gray-500'>
            About
          </p>
        </div>

        {/* 
          // TODO: Put a professional "About Me" statements in here.
        */}
        <p className='mt-20 text-xl'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates aliquid a facere quis dolores expedita qui, illo est nulla cum suscipit natus non, earum reiciendis deleniti inventore doloribus fugit odio.
        </p>

        <br />

        <p className='text-xl'>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo itaque, sapiente voluptatem omnis amet tenetur aperiam. Laudantium a sapiente iusto dolor adipisci! Necessitatibus minima est corporis ullam aspernatur ipsum distinctio?
        </p>

      </div>

    </div>
  )
}

export default About