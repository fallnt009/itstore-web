import InputBox from '../../components/InputBox';

export default function ProfileSettingInfo() {
  return (
    <div className="flex flex-col gap-3 mt-15">
      <div className="flex items-center justify-between">
        <h1 className="text-lg ">Profile Info</h1>
      </div>
      <hr className="border-t-2"></hr>
      <div className="flex flex-col gap-5 items-center">
        {/* Preview Form */}

        <div className="flex flex-col p-3  w-full">
          <form className="grid grid-rows-2 grid-cols-2 gap-3 w-full">
            <InputBox title="First Name" type="text" />
            <InputBox title="Last Name" type="text" />
            <InputBox title="Email" type="email" />
            <InputBox title="Phone Number" type="text" />
          </form>
        </div>
        <button className="text-md  font-semibold   rounded-md p-2 border-2 hover:bg-cerulean-blue-100">
          Save Changes
        </button>
      </div>
    </div>
  );
}
