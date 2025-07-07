import React from 'react'
import Home from './component/Home'
function App() {
  return (<>
    <div className='flex flex-col items-center justify-center min-h-screen bg-gray-100'>
     <div className='text-center mb-8'>
<h1 className='text-5xl font-bold text-gray-800'>AI Image Enhancer</h1>
    <p className='text-lg text-gray-500 pt-3 '>Powered by Manank</p>
     </div>
     
     header
      <Home />
      <div className='text-sm text-gray-500 mt-6'>
        Welcome to the Image Enhancer App
        Upload your images and enhance them with ease!
      </div>
    footer
    </div></>
  )
}

export default App
