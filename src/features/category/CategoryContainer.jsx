import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';

import ProductCategory from '../product/ProductCategory';

import mainCategory from '../../data/productCategory.json';

export default function CategoryContainer() {
  const {subCategoryName} = useParams();
  const [subCategory, setSubCategory] = useState([]);

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        setSubCategory(mainCategory.subCategory);
        console.log(subCategory);
      } catch (err) {
        console.log(err);
      }
    };
    fetchCategory();
  }, [subCategoryName]);

  return (
    <div>
      <ProductCategory subCategoryName={subCategoryName} />
    </div>
  );
}
