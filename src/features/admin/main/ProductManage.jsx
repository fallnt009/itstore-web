import ManageHeader from '../product/manage/ManageHeader';
import ManageList from '../product/manage/ManageList';

export default function ProductManage() {
  return (
    <div className="px-40">
      <div className="border">
        <ManageHeader />
        <ManageList />
      </div>
    </div>
  );
}
