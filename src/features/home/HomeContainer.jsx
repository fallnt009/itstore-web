import {useEffect} from 'react';
import Carousel from '../../components/Carousel';

import HomeFlashSale from './HomeFlashSale';
import HomeNewProduct from './HomeNewProduct';

import useProduct from '../../hooks/useProduct';

export default function HomeContainer() {
  const {newProduct, salesProduct, fetchHomeProduct, error} = useProduct();

  useEffect(() => {
    fetchHomeProduct();
  }, [fetchHomeProduct]);

  return (
    <>
      <div>
        <div className="grid ">{/* <Carousel /> */}</div>
        <div className="px-16">
          <HomeFlashSale salesProduct={salesProduct} error={error} />
          <HomeNewProduct newProducts={newProduct} error={error} />
        </div>
      </div>
    </>
  );
}
