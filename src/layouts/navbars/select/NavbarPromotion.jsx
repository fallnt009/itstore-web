import {Link} from 'react-router-dom';
import {MdArrowRight} from 'react-icons/md';

export default function NavbarPromotion() {
  const List = [
    {id: 1, title: 'Best Seller', pathname: ''},
    {id: 2, title: 'Best Deals', pathname: ''},
    {id: 3, title: 'Membership', pathname: ''},
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
