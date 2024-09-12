import PSList from './PSList';

import useProduct from '../../../../hooks/useProduct';

export default function ProductSpecContainer() {
  const {specItems, specDetail} = useProduct();
  return (
    <div className="px-10">
      <div className="py-5">
        <h1 className="text-3xl text-gray-600 font-semibold py-2">
          Specification
        </h1>
        <div className="py-3 text-base">
          <PSList specItems={specItems} specDetail={specDetail} />
        </div>
      </div>
    </div>
  );
}
