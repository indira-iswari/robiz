import React from "react";
import "../styles/ImageUploader.css";

function ImageUploader({ uploadedImages, setUploadedImages, maxImages = 5 }) {
  const handleImageUpload = (index) => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.onchange = (e) => {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          const newImages = [...uploadedImages];
          newImages[index] = e.target.result;
          setUploadedImages(newImages);
        };
        reader.readAsDataURL(file);
      }
    };
    input.click();
  };

  const renderUploadSlots = () => {
    const slots = [];
    
    // First slot - larger size
    slots.push(
      <div key={0} className="upload-slot main-slot">
        {uploadedImages[0] ? (
          <img src={uploadedImages[0]} alt="Uploaded" className="uploaded-image" />
        ) : (
          <div className="upload-placeholder" onClick={() => handleImageUpload(0)}>
            <div className="upload-icon">📷</div>
            <span>+</span>
          </div>
        )}
      </div>
    );

    // Remaining slots - smaller size
    for (let i = 1; i < maxImages; i++) {
      slots.push(
        <div key={i} className="upload-slot secondary-slot">
          {uploadedImages[i] ? (
            <img src={uploadedImages[i]} alt="Uploaded" className="uploaded-image" />
          ) : (
            <div className="upload-placeholder" onClick={() => handleImageUpload(i)}>
              <div className="upload-icon">📷</div>
              <span>+</span>
            </div>
          )}
        </div>
      );
    }

    return slots;
  };

  return (
    <div className="image-uploader">
      <div className="upload-grid">
        {renderUploadSlots()}
      </div>
    </div>
  );
}

export default ImageUploader;