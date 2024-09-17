import {Link} from 'react-router-dom';

export default function SelectSubButton({src, item}) {
  const {title, pathname} = item || {};

  console.log(src);

  return (
    <Link className="flex flex-col cursor-pointer select-none" to={pathname}>
      <div className="px-5">
        <div className="flex justify-center items-center bg-slate-200 rounded-full w-28 h-28">
          <img
            alt="navbaricon"
            src={src}
            style={{width: `70px`, height: `70px`}}
            loading="lazy"
          />
        </div>
      </div>
      <div className="flex justify-center pt-2 text-center">
        <h1 className="text-gray-700 font-semibold hover:underline text-sm">
          {title}
        </h1>
      </div>
    </Link>
  );
}
