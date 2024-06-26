import {useRef} from 'react';

export default function PaymentProofUpload() {
  const hiddenFileInput = useRef(null);
  const handleClickUpload = () => {
    hiddenFileInput.current.click();
  };
  return (
    <div className="container pt-5">
      <div className="flex justify-start ">
        <div className="flex justify-center border-2 w-56 h-56">
          <button
            className="cursor-pointer font-semibold hover:bg-stone-300 hover:text-stone-600 h-full w-full "
            onClick={handleClickUpload}
          >
            Click to Upload a file
          </button>
          <input type="file" className="hidden" ref={hiddenFileInput}></input>
        </div>
      </div>
    </div>
  );
}
