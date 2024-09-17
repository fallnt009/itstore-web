import Carousel from '../../../components/Carousel';
import HomeCoverPreviewItem from './preview/HomeCoverPreviewItem';

import Nvmd from '../../../assets/nvmd.png';
import Psu from '../../../assets/psu.png';

export default function HomeCoverNav() {
  return (
    <div className="grid grid-rows-2 gap-4">
      <Carousel />
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-slate-200 rounded-md">
          <HomeCoverPreviewItem
            title="Storage"
            src={Nvmd}
            size={200}
            url="/categories/component/storage"
          />
        </div>
        <div className="bg-slate-200 rounded-md">
          <HomeCoverPreviewItem
            title="Power Supply"
            src={Psu}
            size={200}
            url="/categories/component/powersupply"
          />
        </div>
      </div>
    </div>
  );
}
