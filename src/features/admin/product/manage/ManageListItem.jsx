import ManageAction from './ManageAction';

export default function ManageListItem() {
  return (
    <>
      <div className="grid grid-cols-[0.5fr_6fr_2fr_2fr_1.5fr] p-2 py-3 border-b text-sm">
        <div>1</div>
        <div>name1313</div>
        <div>1,500</div>
        <div>Component</div>
        <div>
          <ManageAction />
        </div>
      </div>
      <div className="grid grid-cols-[0.5fr_6fr_2fr_2fr_1.5fr] p-2 py-3 border-b text-sm">
        <div>2</div>
        <div>name1313</div>
        <div>1,500</div>
        <div>Component</div>
        <div>
          <ManageAction />
        </div>
      </div>
      <div className="grid grid-cols-[0.5fr_6fr_2fr_2fr_1.5fr] p-2 py-3 border-b text-sm">
        <div>3</div>
        <div>name1313</div>
        <div>1,500</div>
        <div>Component</div>
        <div>
          <ManageAction />
        </div>
      </div>
    </>
  );
}
