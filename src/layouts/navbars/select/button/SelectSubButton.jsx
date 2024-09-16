import {Link} from 'react-router-dom';

export default function SelectSubButton({src, item}) {
  const {id, title, pathname} = item || {};

  console.log(item);

  return (
    <Link className="flex flex-col cursor-pointer" to={pathname}>
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
    </Link>
  );
}
