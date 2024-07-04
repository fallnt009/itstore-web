import {useContext} from 'react';
import {DrawerContext} from '../contexts/DrawerContext';

export default function useDrawer() {
  return useContext(DrawerContext);
}
