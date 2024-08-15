export default function FormContent({
  data,
  isSelect,
  setIsSelect,
  title,
  desc,
}) {
  return (
    <>
      <div className="flex flex-col ">
        <h4 className="text-cerulean-blue-800  font-semibold">{title}</h4>
        <p className="text-sm text-stone-600">{desc}</p>
      </div>

      <div className="grid grid-cols-3 gap-2 overflow-y-scroll max-h-52">
        {data?.map((item) => (
          <button
            type="button"
            className={`py-1 font-semibold rounded-md text-cerulean-blue-800 ${
              isSelect === item ? 'border border-stone-400' : ''
            }`}
            key={item.id}
            onClick={() => setIsSelect(item)}
          >
            {item.title}
          </button>
        ))}
      </div>
    </>
  );
}
