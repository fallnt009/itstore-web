import React, {useState} from 'react';
import {MdArrowCircleLeft, MdArrowCircleRight} from 'react-icons/md';

const Carousel = () => {
  const [index, setIndex] = useState(0);

  const imgUrl = [
    '    https://cdn.wccftech.com/wp-content/uploads/2021/10/FCsT0UMWQAoFVWq.jpg',
    'https://pbs.twimg.com/media/FfejDlVUcAAJEFE.jpg',
  ];

  const length = imgUrl.length;
  const handlePrevious = () => {
    const newIndex = index - 1;
    setIndex(newIndex < 0 ? length - 1 : newIndex);
  };

  const handleNext = () => {
    const newIndex = index + 1;
    setIndex(newIndex >= length ? 0 : newIndex);
  };

  const handleIndicator = (current) => {
    setIndex(current);
  };

  return (
    <div className="relative  m-auto max-w-3xl">
      {/* Carousel item */}
      <div className="">
        {/* Carousel Image */}
        <img
          src={imgUrl[index]}
          alt="carousel-pic"
          style={{width: '768px', height: '370px'}}
        />

        {/* Carousel Action */}
        <div className="flex absolute w-full top-1/2 -translate-y-2/4  justify-between">
          <button onClick={handlePrevious}>
            <MdArrowCircleLeft size={50} color="white" />
          </button>
          <button onClick={handleNext}>
            <MdArrowCircleRight size={50} color="white" />
          </button>
        </div>
        {/* Carousel Indicator */}
        <div className=" flex absolute bottom-0 -ml-4 mb-3 left-1/2 gap-1">
          {imgUrl.map((_, current) => (
            <span
              key={current}
              className={`w-4 h-4 flex-shrink-0 bg-white cursor-pointer ${
                current === index ? 'bg-gray-800' : ''
              } `}
              onClick={() => handleIndicator(current)}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
