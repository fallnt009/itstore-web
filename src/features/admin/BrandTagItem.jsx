export default function BrandTagItem({id, brandCategory, subCategory}) {
  const {Brand} = brandCategory;
  const {title} = subCategory;
  //change button to icon?
  return (
    <div className="grid grid-cols-4 py-1 border-b-2 text-stone-700 ">
      <div className="flex justify-center items-center">{id}</div>
      <div className="flex justify-center items-center">{Brand.title}</div>
      <div className="flex justify-center items-center">{title}</div>
      <div className="px-2">
        <button className="border rounded-full p-2 font-semibold border-stone-400 hover:bg-cerulean-blue-700 hover:text-white">
          Select
        </button>
      </div>
    </div>
  );
}
