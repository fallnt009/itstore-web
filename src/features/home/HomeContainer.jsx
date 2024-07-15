import Carousel from '../../components/Carousel';

import HomeFlashSale from './HomeFlashSale';
import HomeNewProduct from './HomeNewProduct';

import useProduct from '../../hooks/useProduct';

export default function HomeContainer() {
  const {newProduct, salesProduct, error} = useProduct();

  return (
    <>
      <div>
        <div className="grid border">{/* <Carousel /> */}</div>
        <div className="px-16">
          <HomeFlashSale salesProduct={salesProduct} error={error} />
          <HomeNewProduct newProducts={newProduct} error={error} />
        </div>
      </div>
    </>
  );
}
