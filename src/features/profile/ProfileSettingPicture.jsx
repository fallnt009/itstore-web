import Avatar from '../../components/Avatar';

export default function ProfileSettingPicture() {
  return (
    <div className="flex flex-col gap-3 mt-5">
      <h2 className="text-lg ">Profile Picture</h2>
      <hr className="border-t-2"></hr>
      <div className="flex gap-5 items-center">
        <Avatar size={100} />
        <div className="flex flex-col gap-3">
          <button className="text-md  font-semibold   rounded-md p-2 border-2 hover:bg-cerulean-blue-100">
            Change Picture
          </button>
          <button className="text-md font-semibold rounded-md p-2 border-2 hover:bg-cerulean-blue-100 text-cerulean-blue-800">
            Delete Picture
          </button>
        </div>
      </div>
    </div>
  );
}
