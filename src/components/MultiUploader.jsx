import {useRef, useState} from 'react';

import {MdDriveFolderUpload} from 'react-icons/md';
import {ImCross} from 'react-icons/im';

export default function MultiUploader({select, setSelect}) {
  const [dragOver, setDragOver] = useState(false);

  const dropAreaRef = useRef(null);
  const hiddenFileInput = useRef(null);

  //handleDrag
  const handleDragEnter = (e) => {
    e.preventDefault();
    setDragOver(true);
  };
  const handleDragOver = (e) => {
    e.preventDefault();
    setDragOver(true);
  };
  const handleDragLeave = (e) => {
    e.preventDefault();
    setDragOver(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragOver(false);
    const files = Array.from(e.dataTransfer.files);
    if (files.length > 0) {
      const imagesArray = files
        .slice(0, 4 - select.length)
        .map((file) => ({file, url: URL.createObjectURL(file)}));
      setSelect((prevImages) => [...prevImages, ...imagesArray]);
    }
  };

  const handleClickUpload = () => {
    hiddenFileInput.current.click();
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    if (files.length > 0) {
      const imagesArray = files
        .slice(0, 4 - select.length)
        .map((file) => ({file, url: URL.createObjectURL(file)}));
      setSelect((prevImages) => [...prevImages, ...imagesArray]);
    }
  };

  const handleRemoveImage = (index) => {
    const updatedImages = [...select];
    URL.revokeObjectURL(updatedImages[index].url);
    updatedImages.splice(index, 1);
    setSelect(updatedImages);
  };

  return (
    <div>
      <div
        className={`flex justify-center flex-col border-2 border-dashed py-11 cursor-pointer ${
          dragOver ? 'border-blue-500' : 'border-gray-300'
        } `}
        ref={dropAreaRef}
        onDragEnter={handleDragEnter}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <div
          className="flex flex-col justify-center items-center text-stone-400 hover:text-blue-500"
          onClick={handleClickUpload}
        >
          <MdDriveFolderUpload size={50} />
          <h1>Click or Drag to Upload</h1>
        </div>
        <input
          type="file"
          className="hidden"
          ref={hiddenFileInput}
          onChange={handleImageChange}
          multiple
        ></input>
      </div>
      {select.length > 0 && (
        <div className="flex justify-center pt-5">
          {select.map((image, index) => (
            <div key={index} className="relative">
              <img
                src={image.url}
                alt={`selected ${index}`}
                className="max-w-xs m-2 h-[125px]"
              />
              <button
                className="absolute top-0 right-0 p-1 rounded-full text-white bg-red-600 hover:bg-stone-400"
                onClick={() => handleRemoveImage(index)}
              >
                <ImCross size={15} />
              </button>
            </div>
          ))}
        </div>
      )}
      {select.length >= 4 && (
        <p className="text-red-500 text-sm p-2">
          *You can only upload a maximum of 4 images.
        </p>
      )}
    </div>
  );
}
