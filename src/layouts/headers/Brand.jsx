import {Link} from 'react-router-dom';

export default function Brand() {
  return (
    <Link to={'/'}>
      <div className="flex-2 font-mono font-extrabold text-5xl font-jetmono text-indigo-700">
        ITStores
      </div>
    </Link>
  );
}
