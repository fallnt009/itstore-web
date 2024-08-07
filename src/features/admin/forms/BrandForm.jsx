import Input from '../../../components/Input';

export default function BrandForm({brands}) {
  //fetch All Brand
  return (
    <div className="flex flex-col gap-5 mx-5 ">
      <header className="flex flex-col p-5 font-semibold text-lg mx-5">
        <h4 className="flex justify-center p-2 pb-5">Edit Brands</h4>
        <p className="text-sm font-normal text-stone-600">Manage your brand</p>
      </header>
      <div className="flex flex-col gap-5 px-5">
        <div className="flex flex-col">
          <h4 className="text-stone-600">Brand Preview</h4>
        </div>

        <div className="grid grid-cols-3 gap-2 overflow-y-scroll max-h-52">
          {brands?.map((item) => (
            <div className="font-semibold" key={item.id}>
              {item.title}
            </div>
          ))}
        </div>
      </div>
      <form className="flex flex-col gap-5 px-5">
        <div className="flex flex-col">
          <h4 className="text-stone-600 py-5">Create new Brands</h4>
          <div className="px-5">
            <p className="text-sm font-normal text-stone-600">Title</p>
            <Input />
          </div>
        </div>
        <button
          type="submit"
          className="flex justify-center rounded-full border-2 py-4 px-5 text-white bg-cerulean-blue-800 font-semibold  "
        >
          Create Brand
        </button>
      </form>
    </div>
  );
}
