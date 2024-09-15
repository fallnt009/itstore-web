import HomeCoverNav from './HomeCoverNav';
import HomeCoverPreview from './preview/HomeCoverPreview';

export default function HomeCoverContainer() {
  return (
    <div className="px-10 py-5">
      <div className="grid grid-cols-2">
        <div>
          <HomeCoverNav />
        </div>
        <div>
          <HomeCoverPreview />
        </div>
      </div>
    </div>
  );
}
