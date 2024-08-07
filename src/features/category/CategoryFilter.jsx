export default function CategoryFilter() {
  const cpufilter = [
    {
      id: 1,
      title: 'Brand',
      option: [
        {id: 1, name: 'Intel'},
        {id: 2, name: 'AMD'},
      ],
    },
    {
      id: 2,
      title: 'Socket',
      option: [
        {id: 1, name: 'LGA 1700'},
        {id: 2, name: 'AM 5'},
      ],
    },
  ];
  return (
    <div className="py-2">
      <div className="w-full p-5">
        <form className="flex gap-2">
          <div>
            <label>Brand </label>
            <select className="p-2 rounded-md border-2">
              <option value={0}>Choose brand</option>
              <option>Intel</option>
              <option>Amd</option>
            </select>
          </div>
          <div>
            <label>Socket</label>
            <select className="p-2 rounded-md border-2">
              <option value={0}>Choose brand</option>
              <option>Intel</option>
              <option>Amd</option>
            </select>
          </div>
          <div>
            <label>Chipset</label>
            <select className="p-2 rounded-md border-2">
              <option value={0}>Choose brand</option>
              <option>Intel</option>
              <option>Amd</option>
            </select>
          </div>
        </form>
      </div>
    </div>
  );
}
