import {useState} from 'react';

import useProduct from '../../../../../../hooks/useProduct';

import Popup from '../../../../../../components/Popup';
import SCPopupContent from './popup/SCPopupContent';

import SContentList from './SContentList';

export default function SContent() {
  const {productPreview, specItems, specDetail} = useProduct();

  const [isPopupOpen, setPopupOpen] = useState(false);

  //selected
  const [selectedSpec, setSelectedSpec] = useState({});

  const handleClosePopup = () => {
    setPopupOpen(false);
  };
  const handleSelectSpec = (item) => {
    //setSelect
    setSelectedSpec(item);
    //and open popup with selectedSpec
    setPopupOpen(true);
  };

  return (
    <div className="pb-10">
      <div className="py-5">
        <SContentList
          specItems={specItems}
          specDetail={specDetail}
          onSelect={handleSelectSpec}
        />

        <Popup isOpen={isPopupOpen} onClose={handleClosePopup}>
          <SCPopupContent
            onClose={handleClosePopup}
            selectedSpec={selectedSpec}
            specDetail={specDetail}
            product={productPreview}
          />
        </Popup>
      </div>
    </div>
  );
}
