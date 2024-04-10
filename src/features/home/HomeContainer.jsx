import Carousel from '../../components/Carousel';

import HomeFlashSale from './HomeFlashSale';
import HomeNewProduct from './HomeNewProduct';

export default function HomeContainer() {
  return (
    <>
      <div>
        <div>
          <Carousel />
        </div>
        <div>
          <HomeFlashSale />
          <HomeNewProduct />
        </div>
      </div>
    </>
  );
}
