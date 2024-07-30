import {useContext} from 'react';
import {CategoryContext} from '../contexts/CategoryContext';

export default function useCategory() {
  return useContext(CategoryContext);
}
