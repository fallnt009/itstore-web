import CreateProduct from '../features/manage/CreateProduct';
import UpdateProduct from '../features/manage/UpdateProduct';

export default function ManageProductPage() {
  return (
    <div className="mx-5 my-5">
      <CreateProduct />
      <UpdateProduct />
    </div>
  );
}
