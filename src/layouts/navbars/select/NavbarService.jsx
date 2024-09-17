import {Link} from 'react-router-dom';
import {MdArrowRight} from 'react-icons/md';

export default function NavbarService() {
  const List = [
    {id: 1, title: 'How to Order', pathname: ''},
    {id: 2, title: 'Tracking Your Package', pathname: ''},
    {id: 3, title: 'Parcel Service', pathname: ''},
    {id: 4, title: 'Contact Us', pathname: ''},
  ];
  return (
    <div className="px-10 py-5 border w-full">
      <div className="grid grid-cols-2 text-gray-700 font-semibold">
        {List.map((item) => (
          <Link key={item.id} to={item.pathname}>
            <div className="flex gap-1 items-center cursor-pointer hover:text-indigo-600">
              <span>
                <MdArrowRight />
              </span>
              {item.title}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
