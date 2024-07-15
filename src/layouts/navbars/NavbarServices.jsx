export default function NavbarServices({index, isOpen}) {
  return (
    <div
      className={`relative border rounded-xl left-[340px] p-4 bg-white z-100 ${
        isOpen && index === 2 ? 'block' : 'hidden'
      } `}
    >
      <div className="grid ">
        <div className="flex flex-col gap-3 text-base">
          <p className="p-2 border-l-4 cursor-pointer hover:text-cerulean-blue-800 hover:font-semibold hover:border-cerulean-blue-800">
            How to Order
          </p>
          <p className="p-2 border-l-4 cursor-pointer hover:text-cerulean-blue-800 hover:font-semibold hover:border-cerulean-blue-800">
            Tracking Your Package
          </p>
          <p className="p-2 border-l-4 cursor-pointer hover:text-cerulean-blue-800 hover:font-semibold hover:border-cerulean-blue-800">
            Parcel Service
          </p>
          <p className="p-2 border-l-4 cursor-pointer hover:text-cerulean-blue-800 hover:font-semibold hover:border-cerulean-blue-800">
            Contact Us
          </p>
        </div>
        <div> </div>
      </div>
    </div>
  );
}
