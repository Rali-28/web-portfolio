# Website Portfolio

A single-page website that serves as a digital resume. Projects will be showcased in here, 
show what languages I am knowledgeable in using, a self-introduction, and presents 
my soft and hard skills.

This is to show my skills and also serves as a practice in using
different programming languages and also in creating apps.

## Technologies Used

### Node.js / NPM
  - Node Package Manager
  - the package manager that I use
### Vite 
  - front end tool
  - faster deployment
### React.js
  - javascript library for much more efficient programming
  - installed using vite react for faster install and build
      npm create vite@latest
      using javascript as the language
      npm install
      npm run dev
### TailwindCSS
  - CSS framework for faster styling
  - installing tailwind css for vite react project:
    - npm install -D tailwindcss postcss autoprefixer
      npx tailwindcss init -p

    - Connect tailwindcss to react project
      * add lines of code to tailwind.config.cjs / content:
        content: [
          "./index.html",
          "./src/**/*.{js,ts,jsx,tsx}",
        ],

      * Add lines of codes to index.css:
      @tailwind base;
      @tailwind components;
      @tailwind utilities;
  
### Google Fonts
  - @import url('https://fonts.googleapis.com/css2?family=Great+Vibes&family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
  - Fonts used:
    * Raleway * fonts styles
    * Great Vibes 
### React Icons
  - A library of different icons to be used for the web portfolio
  - npm install react-icons
    