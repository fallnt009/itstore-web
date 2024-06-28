import {useEffect, useRef} from 'react';

export const useRenderCount = () => {
  const renderNumber = useRef(0);
  useEffect(() => {
    renderNumber.current++;
  });
  console.log(`Renders: ${renderNumber.current}`);
};
