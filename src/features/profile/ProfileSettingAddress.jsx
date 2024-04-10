import InputBox from '../../components/InputBox';

export default function ProfileSettingAddress() {
  return (
    <div className="flex flex-col gap-3 mt-5">
      <h2 className="text-lg ">Address</h2>
      <hr className="border-t-2"></hr>
      <div className="flex flex-col gap-5 items-center">
        <form className="grid grid-rows-2 grid-cols-2 gap-3 w-full">
          <InputBox title="Address 1" type="text" />
          <InputBox title="Address 2" type="text" />
          <InputBox title="City" type="text" />
          <InputBox title="State/Province" type="text" />
          <InputBox title="Postal Code" type="text" />
        </form>
      </div>
    </div>
  );
}
