// import {useEffect, useState} from 'react';
// import {useNavigate} from 'react-router-dom';
// import {MdAdd, MdArrowBackIos} from 'react-icons/md';

// import {ADMIN_PRODUCT_MANAGE} from '../../../../../config/routing';

// import useAdmin from '../../../../../hooks/useAdmin';
// import useDrawer from '../../../../../hooks/useDrawer';

// import BrandTagList from '../main/brandTags/BrandTagList';

// import BrandForm from '../main/forms/BrandForm';
// import CategoryForm from '../main/forms/CategoryForm';
// import SubCategoryForm from '../main/forms/SubCategoryForm';
// import BrandTagForm from '../main/forms/BrandTagForm';

// export default function PanelProductMain({bcsId, setBcsId, setBcsData}) {
//   const {brands, fetchBrand, fetchBrandTag} = useAdmin();
//   const {openDrawerWithContent, closeDrawer} = useDrawer();
//   const [selectedId, setSelectedId] = useState('');

//   const navigate = useNavigate();

//   useEffect(() => {
//     fetchBrand();
//   }, [fetchBrand, closeDrawer]);

//   const handleSelect = async (e) => {
//     const brandId = e.target.value;
//     setSelectedId(brandId);
//     if (brandId) {
//       await fetchBrandTag(brandId);
//     }
//   };

//   const handleOnClick = (id, data) => {
//     setBcsId(id);
//     setBcsData(data);
//   };

//   const handleNavigate = () => {
//     navigate(ADMIN_PRODUCT_MANAGE);
//   };

//   const handleManageBrand = () => {
//     openDrawerWithContent(<BrandForm closeDrawer={closeDrawer} />);
//   };
//   const handleManageCategory = () => {
//     openDrawerWithContent(<CategoryForm closeDrawer={closeDrawer} />);
//   };
//   const handleManageSubCategory = () => {
//     openDrawerWithContent(<SubCategoryForm closeDrawer={closeDrawer} />);
//   };
//   const handleManageTags = () => {
//     openDrawerWithContent(<BrandTagForm closeDrawer={closeDrawer} />);
//   };
//   //now we have bcs id
//   //create product first and use this bcs id to create product sub

//   //use brandId to find BC+ Main Category + BCS + Sub Category
//   return (
//     <div className="px-10 py-5">
//       <div className="grid pb-5">
//         <div>
//           <button
//             className="flex items-center gap-1 border-2 rounded-lg py-2 px-4 text-cerulean-blue-800 hover:border-cerulean-blue-800 hover:font-semibold"
//             onClick={handleNavigate}
//           >
//             <span>
//               <MdArrowBackIos />
//             </span>
//             Back
//           </button>
//         </div>
//         <div>
//           <h1 className="text-3xl text-cerulean-blue-800 pb-8 pt-5">
//             Getting Started on creating new product
//           </h1>
//           <div className="flex items-center gap-5">
//             <h1 className="text-xl font-semibold text-cerulean-blue-800">
//               Step 1 : Select Brand
//             </h1>
//           </div>
//           <div>
//             <h1 className="text-stone-500 py-2">Select Existing Brand</h1>
//             <select
//               className="p-2 rounded-md border-2"
//               value={selectedId || ''}
//               onChange={handleSelect}
//             >
//               <option value="">Choose Brand</option>
//               {brands?.map((item) => (
//                 <option key={item.id} value={item.id}>
//                   {item.title}
//                 </option>
//               ))}
//             </select>
//           </div>
//           <div className=" grid grid-cols-3 gap-x-2 py-3">
//             <button
//               className="flex items-center gap-2 font-semibold border-2 p-2 rounded-md text-cerulean-blue-800 hover:border-cerulean-blue-800"
//               onClick={handleManageBrand}
//             >
//               <span>
//                 <MdAdd size={25} />
//               </span>
//               Manage Brand
//             </button>
//             <button
//               className="flex items-center gap-2 font-semibold border-2 p-2 rounded-md text-cerulean-blue-800 hover:border-cerulean-blue-800"
//               onClick={handleManageCategory}
//             >
//               <span>
//                 <MdAdd size={25} />
//               </span>
//               Manage Category
//             </button>
//             <button
//               className="flex items-center gap-2 font-semibold border-2 p-2 rounded-md text-cerulean-blue-800 hover:border-cerulean-blue-800"
//               onClick={handleManageSubCategory}
//             >
//               <span>
//                 <MdAdd size={25} />
//               </span>
//               Manage Sub Category
//             </button>
//           </div>
//           <p className="text-sm text-stone-500">
//             *Or create new brand , category and sub category.
//           </p>
//         </div>
//       </div>
//       <div className="flex items-center gap-5 py-5">
//         <h1 className="text-xl font-semibold text-cerulean-blue-800">
//           Step 2 : Select Product Brand Tag
//         </h1>
//       </div>
//       <BrandTagList
//         active={bcsId}
//         handleOnClick={handleOnClick}
//         handleManageTags={handleManageTags}
//       />
//       {/* <div className="py-5 px-5">
//         <ActiveButton
//           activeTitle="Proceed to next"
//           inActiveTitle="Proceed to next"
//           select={true}
//         />
//       </div> */}
//     </div>
//   );
// }
