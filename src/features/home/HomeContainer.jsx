import Carousel from '../../components/Carousel';

import HomeFlashSale from './HomeFlashSale';
import HomeNewProduct from './HomeNewProduct';

import * as productApi from '../../apis/product-api';
import {useState, useEffect} from 'react';

export default function HomeContainer() {
  const [newProducts, setNewProducts] = useState([]);
  useEffect(() => {
    const fetchNewProduct = async () => {
      const res = await productApi.getNewProduct();
      setNewProducts(res.data.result);
    };
    fetchNewProduct();
  }, []);

  return (
    <>
      <div>
        <div>
          <Carousel />
        </div>
        <div>
          <HomeFlashSale />
          <HomeNewProduct newProducts={newProducts} />
        </div>
        <div className="border-2">Hello</div>
      </div>
    </>
  );
}
