export default function ProductCard() {
  return (
    <div className="container ">
      <div className=" flex flex-col max-w-72 ">
        <div>
          <img
            src="https://media-cdn.bnn.in.th/361919/BX8071514100F-1-square_medium.jpg"
            style={{width: '300px', height: '300px'}}
          />
        </div>
        {/* Productbox */}
        <div className="mx-5 text-cerulean-blue-800">
          <div className="flex">
            <h3 className="font-medium ">Intel Core i3-14100F LGA-1700</h3>
          </div>
          <div className="flex mt-5">
            <p className="font-regular text-sm">
              3.50 GHz up to 4.70 GHz & 4 Core / 8 Threads
            </p>
          </div>
          {/* Price  */}
          <div className="font-semibold mt-5">฿4,790</div>
          <div className="flex justify-center">
            <button
              type="button"
              className="bg-cerulean-blue-800 px-16 py-2 rounded-xl text-xl text-white mt-5"
            >
              ฿4,000
            </button>
          </div>
          {/* Saving */}
          <div className="flex justify-center mt-1 text-green-800">
            Saving for ฿790
          </div>
        </div>
      </div>
    </div>
  );
}
