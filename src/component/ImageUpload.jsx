import React from 'react'

function ImageUpload({UploadImageHandler}) {
  const ShowImageHandler=(e)=>{
    const file=e.target.files[0];
    if (file) {
      UploadImageHandler(file)
    }

  }
  return (
    <div className='bg-white shadow-lg rounded-2xl p-6 w-full max-w-2xl'>
      <label
        htmlFor="fileInput"
        className='block w-full cursor-pointer border-2 border-dashed border-gray-300 rounded-lg p-4 text-center hover:bg-red-500 transition-colors'
      >
        <input className='hidden'  type="file" id="fileInput" onChange={ShowImageHandler} />
        <p>Click and Drag to upload image</p>
      </label>
    </div>
  )
}

export default ImageUpload
