import {useLocation} from 'react-router-dom';

export default function CBreadCrumbItem({icon, title, targetPath}) {
  const location = useLocation();
  const {pathname} = location;

  return (
    <>
      {pathname === targetPath ? (
        <div className="flex flex-col items-center gap-3">
          <div className="rounded-full bg-cerulean-blue-800 text-white p-2">
            {icon}
          </div>
          <h4 className="text-stone-600 font-bold">{title}</h4>
        </div>
      ) : (
        <div className="flex flex-col items-center gap-3">
          <div className="rounded-full bg-stone-300 text-stone-500 p-2">
            {icon}
          </div>
          <h4 className="text-stone-600">{title}</h4>
        </div>
      )}
    </>
  );
}
