export default function CategoryFilter() {
  return (
    <div className="py-2">
      <div className="w-full p-5">
        <form className="flex gap-2">
          <div>
            <label>Brand </label>
            <select className="p-2 rounded-md border-2">
              <option selected>Choose brand</option>
              <option>Intel</option>
              <option>Amd</option>
            </select>
          </div>
          <div>
            <label>Socket</label>
            <select className="p-2 rounded-md border-2">
              <option selected>Choose brand</option>
              <option>Intel</option>
              <option>Amd</option>
            </select>
          </div>
          <div>
            <label>Chipset</label>
            <select className="p-2 rounded-md border-2">
              <option selected>Choose brand</option>
              <option>Intel</option>
              <option>Amd</option>
            </select>
          </div>
        </form>
      </div>
    </div>
  );
}
