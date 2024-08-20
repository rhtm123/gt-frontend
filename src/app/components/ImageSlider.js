import React, { useState, useEffect } from 'react';
import { myFetch } from '@/utils/myFetch';

const ImageSlider = ({project}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [images, setImages] = useState([])

  const getImages = async () => {
    let url = process.env.API_URL+ "api/project/project/images/"+project.id;
    let data = await myFetch(url);
    // console.log(data);
    setImages(data.results)
  }
  
  useEffect(()=>{
    getImages();
  },[])

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(slideInterval);
  }, [images.length]);

  return (
    <div className="w-full rounded-xl overflow-hidden">
      <div className="relative w-full h-64">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img src={image.img} className="w-full object-cover rounded" alt={image.alt_text} />
          </div>
        ))}

       {images.length>0 && <div className="absolute inset-0 flex justify-between items-center px-4">
          <button
            className="btn btn-circle"
            onClick={() => setCurrentSlide((prevSlide) => (prevSlide - 1 + images.length) % images.length)}
          >
            ❮
          </button>
          <button
            className="btn btn-circle"
            onClick={() => setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length)}
          >
            ❯
          </button>
        </div> }
      </div>

      <div className="flex justify-center space-x-2 mt-4">
        {images.map((_, index) => (
          <button
            key={index}
            className={`h-3 w-3 rounded-full ${index === currentSlide ? 'bg-blue-500' : 'bg-gray-300'}`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;

