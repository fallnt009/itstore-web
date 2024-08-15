import ProductSpecContent from '../productSpec/ProductSpecContent';
import ProductSpecCreate from '../productSpec/ProductSpecCreate';

export default function PanelProductSpec() {
  return (
    <div className="py-2 px-5">
      <div>
        <h1 className="text-xl font-semibold">Product Specification</h1>
        <p>Manage</p>
      </div>
      <div>
        <ProductSpecContent />
      </div>
      <div>
        <ProductSpecCreate />
      </div>
      <div>{/* preview */}</div>
    </div>
  );
}
