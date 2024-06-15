import {Link} from 'react-router-dom';

export default function Brand() {
  return (
    <Link to={'/'}>
      <div className="flex-2 font-mono font-extrabold text-5xl font-jetmono text-cerulean-blue-800">
        ITStores
      </div>
    </Link>
  );
}
