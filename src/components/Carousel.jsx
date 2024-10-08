import React, {useEffect, useState} from 'react';
import {MdArrowCircleLeft, MdArrowCircleRight} from 'react-icons/md';

const Carousel = ({interval = 8000}) => {
  const [index, setIndex] = useState(0);
  const [showIndicators, setShowIndicators] = useState(false);
  const [isPause, setIsPause] = useState(false);

  const imgUrl = [
    'https://cdn.wccftech.com/wp-content/uploads/2021/10/FCsT0UMWQAoFVWq.jpg',
    'https://pbs.twimg.com/media/FfejDlVUcAAJEFE.jpg',
    'https://pbs.twimg.com/media/EAMTFIiVUAUHZRI.jpg',
    'https://www.ryt9.com/img/files/20220928/iq23ce27eaf62743ef527a158fa86a93b1.jpg',
  ];

  const handlePrevious = () => {
    setIndex((prevIndex) =>
      prevIndex === imgUrl.length - 1 ? 0 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setIndex((prevIndex) =>
      prevIndex === imgUrl.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    if (!isPause) {
      const slideInterval = setInterval(() => {
        handleNext();
      }, interval);
      return () => clearInterval(slideInterval);
    }
  }, [isPause, index, interval]);

  const handleIndicator = (current) => {
    setIndex(current);
  };
  const showIndicatorHandler = () => {
    setShowIndicators(true);
    //pause on SLideShow
    setIsPause(true);
  };
  const hideIndicatorHandler = () => {
    setShowIndicators(false);
    //resume SlideShow
    setIsPause(false);
  };

  return (
    <div
      className="relative w-full h-[295px] overflow-hidden rounded-md"
      onMouseEnter={showIndicatorHandler}
      onMouseLeave={hideIndicatorHandler}
    >
      {/* Carousel item */}
      <div className="w-full h-full">
        {/* Carousel Image */}
        <div
          className="flex transition-transform duration-1000 ease-in-out"
          style={{
            transform: `translateX(-${index * 100}%)`,
          }}
        >
          {imgUrl.map((url, index) => (
            <div key={index} className="w-full flex-shrink-0">
              <img
                src={url}
                alt={`carousel-pic${index}`}
                className="object-cover w-full h-full"
              />
            </div>
          ))}
        </div>

        {/* Carousel Action */}
        {showIndicators && (
          <div className="flex absolute w-full top-1/2 -translate-y-2/4  justify-between opacity-50">
            <button onClick={handlePrevious}>
              <MdArrowCircleLeft size={50} color="white" />
            </button>
            <button onClick={handleNext}>
              <MdArrowCircleRight size={50} color="white" />
            </button>
          </div>
        )}
        {/* Carousel Indicator */}
        {showIndicators && (
          <div className="flex absolute bottom-0 -ml-4 mb-3 left-1/2 gap-1 opacity-50">
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
        )}
      </div>
    </div>
  );
};

export default Carousel;
