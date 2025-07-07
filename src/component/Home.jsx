import React ,{useState} from "react";
import ImageUpoad from "./ImageUpload.jsx";
import ImagePreview from "./ImagePreview.jsx";
import { enhancedImageAPI } from "../Utils/enhancedimageApi.js";
function Home() {
  const [uploadImage, setUploadImage] = useState(null);
  const [enhancedImage, setenhancedImage] = useState(null);
  const [loading, setloading] = useState(false);
 const UploadImageHandler=async(file)=>{
 
  setUploadImage(URL.createObjectURL(file))
 setloading(true)
 //call api
 try{
const enhancedURL=await enhancedImageAPI(file)
setenhancedImage(enhancedURL)
setloading(false)
 }
 catch(error){
  console.log(err)
  alert("some thing is wrong in their please retry")
 }

}
  return (

    <>
      <ImageUpoad UploadImageHandler={UploadImageHandler} />
      <ImagePreview
        uploaded={uploadImage}
        loading={loading}
        enhanced={enhancedImage}
      />
    </>
  );
}

export default Home;
