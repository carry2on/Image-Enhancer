import React from "react";
import Loading from "./Loading";
function ImagePreview({uploaded,enhanced,loading}) {
  return (
    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl mx-auto">
      <div className="bg-white shadow-lg rounded-xl overflow-hidden">
        <h2 className="text-xl font-semibold text-center bg-gray-700 text-white py-2">
          Original Image
        </h2>
{uploaded?<img className=" w-full h-full object-cover" src={uploaded} alt="Original" />:<div className="flex items-center justify-center h-80 bg-gray-200 "> image is not selected yet</div>}

     
      </div>








      <div className="bg-white shadow-lg rounded-xl overflow-hidden">
        <h2 className="text-xl font-semibold text-center bg-blue-700 text-white py-2">
          Enhanced Image
        </h2>
     { enhanced && !loading && (
  <img className="w-full h-full object-cover" src={uploaded} alt="Enhanced" />
)}

{loading ? (
  <Loading />
) : (
  <div className="flex items-center justify-center h-full bg-gray-200">
    No enhanced image in the page
  </div>
)}

      </div>
    </div>


  );
}

export default ImagePreview;
// ? <img className="w-full h-full object-cover" src="{uploaded}" alt="Enhanced" />:<div className="flex items-center justify-center h-full bg-gray-200 ">No enhanced image in the page</div>} 
       