import React from "react";
import { useState } from "react";
import "./imageUploader.css"

const ImageUploader = () => {
    const [selectedImage, setSelectedImage] = useState(null);
  
    const handleImageChange = (e) => {
      const file = e.target.files[0];
      console.log(file);
      if (file) {
        setSelectedImage(URL.createObjectURL(file));
      }
    };
  
    return (
      <div>
        <h1>Image Uploader</h1>
        <input type="file" accept="image/*" onChange={(e) => {handleImageChange(e)}} />
        {selectedImage && (
          <div>
            <h2>Preview:</h2>
            <img src={selectedImage} alt="Selected" style={{ width: '300px', height: 'auto' }} />
          </div>
        )}
      </div>
    );
  };
  
  export default ImageUploader;