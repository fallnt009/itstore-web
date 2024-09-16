import HomeCoverPreviewItem from './HomeCoverPreviewItem';

import GameLaptop from '../../../../assets/gamelaptop.png';
import gpu from '../../../../assets/gpu.png';
import cpu from '../../../../assets/cpu.png';
import ram from '../../../../assets/ram.png';

export default function HomeCoverPreview() {
  return (
    <div>
      <div className="grid grid-rows-2 grid-cols-2 gap-4">
        <div className=" bg-slate-100 rounded-md">
          <HomeCoverPreviewItem
            title="Get Your Gaming Laptop"
            src={GameLaptop}
            size={200}
          />
        </div>
        <div className=" bg-slate-100 rounded-md">
          <HomeCoverPreviewItem title="Explore Product" src={cpu} size={200} />
        </div>
        <div className=" bg-slate-100 rounded-md">
          <HomeCoverPreviewItem title="Best Deals" src={ram} size={200} />
        </div>
        <div className=" bg-slate-100 rounded-md">
          <HomeCoverPreviewItem title="Trending" src={gpu} size={200} />
        </div>
      </div>
    </div>
  );
}
