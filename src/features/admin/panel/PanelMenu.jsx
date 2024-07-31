import {useNavigate} from 'react-router-dom';
import {MdDashboard, MdLibraryBooks, MdChecklist} from 'react-icons/md';

import {HOME, ADMIN_PRODUCT} from '../../../config/routing';

import PanelMenuItem from './PanelMenuItem';

export default function PanelMenu() {
  const navigate = useNavigate();

  const handleNavigate = (route) => {
    console.log(route);
    switch (route) {
      case 'dashboard':
        navigate('/');
        break;
      case 'product':
        navigate(ADMIN_PRODUCT);
        break;
      case 'order':
        navigate('/');
        break;
      default:
        navigate(HOME);
        break;
    }
  };
  return (
    <div className="px-10">
      <div className="flex gap-5 text-cerulean-blue-800 border-t-2 border-b-2 p-2 py-3">
        <PanelMenuItem
          icon={<MdDashboard />}
          title="Dashboard"
          width="32"
          navigate={() => handleNavigate('dashboard')}
        />
        <PanelMenuItem
          icon={<MdLibraryBooks />}
          title="Product"
          width="28"
          navigate={() => handleNavigate('product')}
        />
        <PanelMenuItem
          icon={<MdChecklist />}
          title="Order"
          width="28"
          navigate={() => handleNavigate('order')}
        />
      </div>
    </div>
  );
}
