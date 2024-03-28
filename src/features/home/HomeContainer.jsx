import Carousel from '../../components/Carousel';

import HomeFlashSale from './HomeFlashSale';
import HomeNewProduct from './HomeNewProduct';

export default function HomeContainer() {
  return (
    <>
      <div>
        <Carousel />
        <div>
          <HomeFlashSale />
          <HomeNewProduct />
        </div>
      </div>
    </>
  );
}
