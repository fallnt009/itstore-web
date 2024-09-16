export default function SelectMainButton({src, item, onSelect}) {
  const {id, title} = item || '';

  console.log(item);

  return (
    <div>
      <div
        className="flex flex-col cursor-pointer"
        onClick={() => onSelect(id)}
      >
        <div>
          <div className="flex justify-center items-center bg-slate-200 rounded-full w-24 h-24">
            <img
              alt="navbaricon"
              src={src}
              style={{width: `70px`, height: `70px`}}
            />
          </div>
        </div>
        <div className="flex justify-center pt-2 text-center">
          <h1 className="text-gray-700 font-semibold hover:underline text-sm">
            {title}
          </h1>
        </div>
      </div>
    </div>
  );
}
