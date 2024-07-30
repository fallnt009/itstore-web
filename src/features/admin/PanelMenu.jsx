import {Link} from 'react-router-dom';

export default function PanelMenu() {
  //manage product ,manage category and brand
  return (
    <div className="container">
      <ul className="flex flex-col p-5 border-2 gap-3 font-semibold">
        <li>
          <Link to="/admin-panel/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/admin-panel/manage-product">Manage Product</Link>
          <div className="flex flex-col font-medium pl-5 pt-3 gap-3">
            {/* <li>Create Product</li>
            <li>Update Product</li>
            <li>Delete Product</li> */}
          </div>
        </li>
        <li>
          Manage Category
          <div className="flex flex-col font-medium pl-5 pt-3 gap-3">
            {/* <li>Create Category</li>
            <li>Update Category</li>
            <li>Delete Category</li> */}
          </div>
        </li>
        <li>
          Manage Brand
          <div className="flex flex-col font-medium pl-5 pt-3 gap-3">
            {/* <li>Create Brand</li>
            <li>Update Brand</li>
            <li>Delete Brand</li> */}
          </div>
        </li>
        {/* <li>Manage Discount</li>
        <li>Manage Orders</li> */}
      </ul>
    </div>
  );
}
