import {useState} from 'react';

import useProduct from '../../../../../../hooks/useProduct';

import SpecProductCreateContent from './SpecProductCreateContent';
import CreatePopupContent from './popup/CreatePopupContent';

import Popup from '../../../../../../components/Popup';

export default function SpecProductCreate() {
  const {specItems, specDetail} = useProduct();

  const [isPopupOpen, setPopupOpen] = useState(false);

  //selected
  const [selectedSpec, setSelectedSpec] = useState({});

  const handleOpenPopup = () => {
    setPopupOpen(true);
  };
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
    <div className="py-5">
      <SpecProductCreateContent
        specItems={specItems}
        specDetail={specDetail}
        onOpenPopup={handleOpenPopup}
        onSelect={handleSelectSpec}
      />
      <Popup isOpen={isPopupOpen} onClose={handleClosePopup}>
        <CreatePopupContent
          onClose={handleClosePopup}
          selectedSpec={selectedSpec}
          specDetail={specDetail}
        />
      </Popup>
    </div>
  );
}
