////Handle Submit Structure + toastify

///state
// const [input, setInput] = useState(dataForm);
// const [error, setError] = useState({});

///hooks
// const {brands, addBrand, editBrand, fetchBrand} = useAdmin();
// const {startLoading, stopLoading} = useLoading();

///handleSubmit function
// const handleSubmitCreate = async (e) => {
//     try {
//       e.preventDefault();
//       const result = validateCategory(input);
//       startLoading();
//       if (result) {
//         setError(result);
//       } else {
//         setError({});
//         //call api and get response if error
//         const res = await addBrand(input);
//         if (res) {
//           toast.error(res);
//         } else {
//           toast.success('Brand Create Success');
//           closeDrawer();
//         }

//         // call fetch again
//         await fetchBrand();

//         //clear data form
//         setExpandSection(null);
//         setInput(dataForm);
//       }
//     } catch (err) {
//       toast.error('An unexpected error occurred.');
//     } finally {
//       stopLoading();
//     }
//   };
