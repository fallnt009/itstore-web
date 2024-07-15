export default function NavbarPromotion({index, isOpen}) {
  return (
    <div
      className={`relative border left-52 rounded-xl p-4 bg-white z-100 ${
        isOpen && index === 1 ? 'block' : 'hidden'
      }`}
    >
      <div className="grid ">
        <div className="flex flex-col gap-3 text-base">
          <p className="p-2 border-l-4 cursor-pointer hover:text-cerulean-blue-800 hover:font-semibold hover:border-cerulean-blue-800">
            Best Seller
          </p>
          <p className="p-2 border-l-4 cursor-pointer hover:text-cerulean-blue-800 hover:font-semibold hover:border-cerulean-blue-800">
            Flash Sale
          </p>
          <p className="p-2 border-l-4 cursor-pointer hover:text-cerulean-blue-800 hover:font-semibold hover:border-cerulean-blue-800">
            Membership
          </p>
        </div>
        <div> </div>
      </div>
    </div>
  );
}
