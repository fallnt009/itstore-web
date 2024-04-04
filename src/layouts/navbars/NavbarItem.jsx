import {Link} from 'react-router-dom';

export default function NavbarItem({children, to}) {
  return (
    <Link to={to}>
      <div className="flex-1"> {children}</div>
    </Link>
  );
}
