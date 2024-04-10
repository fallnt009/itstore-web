import Avatar from '../../components/Avatar';

export default function ProfileSettingPreview() {
  return (
    <div className="mt-5">
      <h1 className="text-lg">Profile Preview</h1>
      <div className="bg-cerulean-blue-800 text-white rounded-md w-4/5 p-2 mt-3">
        <div className="block">
          <div className="flex flex-col mx-3 gap-3 my-5">
            <div className="flex items-center gap-3">
              <Avatar size={100} />
              <h1 className="text-xl font-semibold">Phruek Tony</h1>
            </div>
            <div className="flex gap-10 mt-5 ">
              <div>
                <h2 className="font-semibold">Email</h2>
                <h4>phrnoon@outllok.com</h4>
              </div>
              <div>
                <h2 className="font-semibold">Phone Number</h2>
                <h4>86564656566</h4>
              </div>
            </div>
            {/* FOR ADDRESS */}
            <div className="flex flex-col mt-5 ">
              <h2 className="font-semibold">Address</h2>
              <div className="flex gap-1">
                <h4>1974 Castillo St.</h4>
                <h4>Santa Barbara</h4>
                <h4>CA</h4>
                <h4>93101</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
