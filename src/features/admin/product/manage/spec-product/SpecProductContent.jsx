import SpecProductCreate from './create/SpecProductCreate';

export default function SpecProductContent({bcs, product}) {
  return (
    <div className="pb-10">
      <SpecProductCreate bcs={bcs} product={product} />
    </div>
  );
}
