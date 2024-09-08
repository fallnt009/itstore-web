import {Link, useLocation} from 'react-router-dom';
import {MdKeyboardArrowRight} from 'react-icons/md';

export default function ManageBreadCrumb() {
  const location = useLocation();

  const paths = location.pathname.split('/').filter((item) => item);

  //use index 1 ,2
  const filterPath = paths.filter(
    (path) => path !== 'admin-panel' && isNaN(path)
  );

  const fullPath = (index) => {
    const convertPath = `/${paths[0]}/${filterPath
      .slice(0, index - 1)
      .join('/')}`;

    return convertPath;
  };

  return (
    <div className="py-5 flex items-center text-sm gap-2">
      <div>
        <Link to="/" className="text-cerulean-blue-600">
          Dashboard
        </Link>
      </div>
      {filterPath.map((path, index) => {
        //make path first letter uppercase
        const capitalizeName = path.charAt(0).toUpperCase() + path.slice(1);
        const isLast = index === filterPath.length - 1;

        return isLast ? (
          <div className="flex items-center gap-1" key={index}>
            <span>
              <MdKeyboardArrowRight />
            </span>
            <p>{capitalizeName}</p>
          </div>
        ) : (
          <div className="flex items-center gap-1" key={index}>
            <span className="text-cerulean-blue-600">
              <MdKeyboardArrowRight />
            </span>
            <Link to={fullPath(index)} className="text-cerulean-blue-600">
              {capitalizeName}
            </Link>
          </div>
        );
      })}
    </div>
  );
}
