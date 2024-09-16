import HomeCoverNav from './HomeCoverNav';
import HomeCoverPreview from './preview/HomeCoverPreview';

export default function HomeCoverContainer() {
  return (
    <div className="px-10 pb-5 pt-10">
      <div className="grid xl:grid-cols-2 gap-4">
        <div className="grid">
          <HomeCoverNav />
        </div>
        <div className="grid">
          <HomeCoverPreview />
        </div>
      </div>
    </div>
  );
}
