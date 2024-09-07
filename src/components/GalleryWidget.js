import React, { useState } from 'react';

const GalleryWidget = () => {
  const [images, setImages] = useState([]);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageURL = URL.createObjectURL(file);
      setImages([...images, imageURL]);
    }
  };

  return (
    <div className="bg-gray-700 p-6 rounded-lg shadow-xl transition-shadow duration-300 ease-in-out transform hover:scale-105">
      <div className="flex flex-col md:flex-row justify-between items-center mb-4">
        <h3 className="text-white text-xl font-bold shadow-lg bg-gray-800 px-4 py-2 rounded-full transition duration-300 ease-in-out transform hover:scale-110">
          Gallery
        </h3>
        <label className="bg-gray-600 hover:bg-gray-500 text-white py-2 px-4 rounded-lg shadow-lg cursor-pointer transition transform duration-200 ease-in-out hover:shadow-2xl hover:scale-105">
          + Add Image
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="hidden"
          />
        </label>
      </div>

      <div className="flex flex-wrap gap-4 overflow-auto p-4 rounded-lg bg-gray-800 shadow-md">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt="gallery-item"
            className="w-24 h-24 object-cover rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out transform hover:scale-105"
          />
        ))}
      </div>
    </div>
  );
};

export default GalleryWidget;
