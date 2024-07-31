import {useState} from 'react';

import PanelProductMain from './PanelProductMain';
import PanelProductSummary from './PanelProductSummary';
import PanelProductCreate from './PanelProductCreate';
import PanelProductUpload from './PanelProductUpload';

export default function PanelProductContainer() {
  const [bcsData, setBcsData] = useState({});

  return (
    <div className="grid grid-cols-[4fr_2fr]">
      <div>
        <PanelProductMain setBcsData={setBcsData} />
        <PanelProductCreate />
        <PanelProductUpload />
      </div>
      <PanelProductSummary bcsData={bcsData} />
    </div>
  );
}
