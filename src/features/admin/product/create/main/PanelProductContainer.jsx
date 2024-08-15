import {useState} from 'react';

import SideDrawer from '../../../../../components/SideDrawer';

import useDrawer from '../../../../../hooks/useDrawer';

import PanelProductMain from './PanelProductMain';
// import PanelProductSummary from './PanelProductSummary';
import PanelProductCreate from './PanelProductCreate';
import PanelProductUpload from './PanelProductUpload';

export default function PanelProductContainer() {
  const {closeDrawer, isOpen, drawerContent} = useDrawer();

  const [bcsData, setBcsData] = useState({});
  const [bcsId, setBcsId] = useState('');
  const [productId, setProductId] = useState('');
  const [submitStatus, setSubmitStatus] = useState(false);

  return (
    <div className="px-40">
      <div className="border-r border-l">
        <PanelProductMain
          bcsId={bcsId}
          setBcsData={setBcsData}
          setBcsId={setBcsId}
        />
        {bcsId && (
          <PanelProductCreate
            bcsId={bcsId}
            productId={productId}
            setProductId={setProductId}
            setSubmitStatus={setSubmitStatus}
          />
        )}
        {submitStatus && <PanelProductUpload productId={productId} />}
      </div>
      {/* <PanelProductSummary bcsData={bcsData} /> */}
      <SideDrawer isOpen={isOpen} onClose={closeDrawer}>
        {drawerContent}
      </SideDrawer>
    </div>
  );
}
