////context lasted Stucture

///FETCH by Using useCallback
// const fetchBrand = useCallback(async () => {
// try {
//     const res = await AdminApi.getAllBrand();
//     dispatch({
//       type: FETCH_BRAND,
//       payload: {brands: res.data.result},
//     });
//   } catch (err) {
//     return err.response.data.descEn;
//   }
// }, [dispatch]);

///without useCallBack
// const editCategory = async (categoryId, data) => {
//     try {
//       const res = await AdminApi.updateCategory(categoryId, data);
//       const updateCategory = res.data.result;
//       dispatch({
//         type: EDIT_CATEGORY,
//         payload: {id: categoryId, updatedCategory: updateCategory},
//       });
//       return updateCategory;
//     } catch (err) {
//       return err.response.data.descEn;
//     }
//   };
