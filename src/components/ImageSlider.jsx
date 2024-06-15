import {useState} from 'react';

import ProductPic from './ProductPic';

const images = [
  {
    id: 1,
    productId: 1,
    path: 'https://images.unsplash.com/photo-1717210398121-245fc24025d7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxM3x8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 2,
    productId: 1,
    path: 'https://images.unsplash.com/photo-1716278517770-7095462bcda0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHx8',
  },
  {
    id: 3,
    productId: 1,
    path: 'https://images.unsplash.com/photo-1717170647980-1b0e2fb163a6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNXx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 4,
    productId: 1,
    path: 'https://images.unsplash.com/photo-1716855159790-0bbff6e7b8ae?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 5,
    productId: 1,
    path: 'https://images.unsplash.com/photo-1714329454171-75e0230f15ad?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNXx8fGVufDB8fHx8fA%3D%3D',
  },
];

export default function ImageSlider() {
  const [imageIndex, setImageIndex] = useState(0);

  const handleSelectImage = (index) => {
    setImageIndex(index);
  };

  return (
    <div className="container ">
      <div className="grid grid-cols-[1fr_3fr]">
        <div className="grid grid-row overflow-y-auto max-h-[65vh] no-scrollbar gap-3">
          {images.map((el, index) => (
            <span
              key={index}
              onClick={() => handleSelectImage(index)}
              className="object-contain"
            >
              <ProductPic key={el.id} src={el.path} size="100px" />
            </span>
          ))}
        </div>
        {/* Main Image */}
        <div className="max-h-[65vh] ">
          <ProductPic src={images[imageIndex].path} size="400px" />
        </div>
      </div>
    </div>
  );
}
