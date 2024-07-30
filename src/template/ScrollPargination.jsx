import {useState} from 'react';

export default function ScrollPargination() {
  //items
  const [items, setItems] = useState([]);
  //pages
  const [page, setPage] = useState(1);
  //hadmore
  const [hasMore, setHasMore] = useState(true);
  //loading
  //maybe can use loading context
  //fetch and params limit:10
  //   const fetchItems = useCallback(async () => {
  //     setLoading(true);
  //     try {
  //       const response = await axios.get('https://api.example.com/items', {
  //         params: { page, limit: 10 },
  //       });
  //       setItems((prevItems) => [...prevItems, ...response.data]);
  //       setHasMore(response.data.length > 0);
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   }, [page]);

  //Load more items

  //   useEffect(() => {
  //     fetchItems();
  //   }, [fetchItems]);

  //handle scrolling

  //   useEffect(() => {
  //     const handleScroll = () => {
  //       if (
  //         window.innerHeight + document.documentElement.scrollTop + 1 >=
  //         document.documentElement.scrollHeight
  //       ) {
  //         if (hasMore && !loading) {
  //           setPage((prevPage) => prevPage + 1);
  //         }
  //       }
  //     };

  //     window.addEventListener('scroll', handleScroll);
  //     return () => window.removeEventListener('scroll', handleScroll);
  //   }, [hasMore, loading]);

  return (
    <div>
      <ul>
        {/* {items.map((item, index) => (
      <li key={index}>{item.title}</li>
    ))} */}
      </ul>
      {/* {loading && <p>Loading...</p>}
  {!hasMore && <p>No more items to load.</p>} */}
    </div>
  );
}
