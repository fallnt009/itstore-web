import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';

import ProductCategory from '../product/ProductCategory';

import useProduct from '../../hooks/useProduct';

export default function CategoryContainer() {
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [items, setItems] = useState([]);
  const [hasMore, setHasMore] = useState(true);

  const {categoryName, subCategoryName} = useParams();
  const {productList, fetchProductCategory} = useProduct();

  useEffect(() => {
    const loadCategory = async () => {
      setLoading(true);
      try {
        await fetchProductCategory(categoryName, subCategoryName, page, 4);
        //send params page and pageSize
        //setItems
        setItems((prevItems) => [...prevItems, ...productList]);
        setHasMore(productList.length > 0);
      } catch (err) {
        setLoading(false);
      } finally {
        setTimeout(() => {
          setLoading(false);
        }, 2000);
      }
    };
    loadCategory();
  }, [categoryName, subCategoryName, fetchProductCategory]);

  //handle Scroll
  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop + 1 >=
        document.documentElement.scrollHeight
      ) {
        if (hasMore && !loading) {
          console.log('Set more page');
          setPage((prevPage) => prevPage + 1);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasMore]);

  return (
    <div>
      <ProductCategory
        subCategoryName={subCategoryName}
        product={productList}
        loading={loading}
        hasMore={hasMore}
      />
    </div>
  );
}
