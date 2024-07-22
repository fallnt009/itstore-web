import {useState, useEffect} from 'react';

import HomeFlashSale from './HomeFlashSale';
import HomeNewProduct from './HomeNewProduct';

import useProduct from '../../hooks/useProduct';

export default function HomeContainer() {
  const [loading, setLoading] = useState(false);

  const {newProduct, salesProduct, fetchHomeProduct, error} = useProduct();

  useEffect(() => {
    const loadHome = async () => {
      setLoading(true);
      try {
        await fetchHomeProduct();
      } catch (err) {
        setLoading(false);
      } finally {
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      }
    };
    loadHome();
  }, [fetchHomeProduct]);

  return (
    <>
      <div>
        <div className="grid ">{/* <Carousel /> */}</div>
        <div className="px-16">
          <HomeFlashSale
            salesProduct={salesProduct}
            error={error}
            loading={loading}
          />
          <HomeNewProduct
            newProducts={newProduct}
            error={error}
            loading={loading}
          />
        </div>
      </div>
    </>
  );
}
