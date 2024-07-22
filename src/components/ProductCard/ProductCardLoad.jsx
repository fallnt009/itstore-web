export default function ProductCardLoad() {
  return (
    <div className="container p-4 w-full mx-auto">
      <div className="animate-pulse grid px-2 py-3">
        <div className="grid">
          <div className="flex justify-start">
            <div className=" bg-slate-200 w-[250px] h-[250px] "></div>
          </div>
          {/* Productbox */}
          <div className="flex flex-col gap-3 py-5">
            <div className="w-full rounded-full bg-slate-200 p-3"></div>
            <div className="w-1/2 rounded-full bg-slate-200 p-3"></div>
            <div className="w-1/2 rounded-full bg-slate-200 p-4"></div>

            <div className="flex gap-4">
              <div className="w-1/4 rounded-full bg-slate-200 p-2"></div>
              <div className="w-1/4 rounded-full bg-slate-200 p-2"></div>
            </div>
            <div className="w-1/2 rounded-full bg-slate-200 p-2"></div>
          </div>
        </div>
        <div className="flex items-center gap-2 py-5">
          <div className="rounded-full p-2 bg-slate-200 h-10 w-10"></div>
          <div className="rounded-full p-2 bg-slate-200 h-10 w-10"></div>
        </div>
      </div>
    </div>
  );
}
