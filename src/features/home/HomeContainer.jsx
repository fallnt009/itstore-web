import {useState, useEffect} from 'react';
import useProduct from '../../hooks/useProduct';

import HomeFlashSale from './HomeFlashSale';
import HomeNewProduct from './HomeNewProduct';

import HomeCoverContainer from './cover/HomeCoverContainer';
import HomeAdsSlider from './ads/HomeAdsSlider';

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
        {/* Picture */}
        <HomeCoverContainer />
        <div className="px-10 py-10">
          <HomeFlashSale
            salesProduct={salesProduct}
            error={error}
            loading={loading}
          />
          <HomeAdsSlider />
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
