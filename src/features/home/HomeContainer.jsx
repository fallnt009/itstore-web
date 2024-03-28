import Carousel from '../../components/Carousel';

import HomeFlashSale from './HomeFlashSale';

export default function HomeContainer() {
  return (
    <>
      <div>
        <Carousel />
        <div>
          <HomeFlashSale />
        </div>
      </div>
    </>
  );
}
