import ProfileSettingPicture from './ProfileSettingPicture';
import ProfileSettingInfo from './ProfileSettingInfo';
import ProfileSettingPreview from './ProfileSettingPreview';
import useAuth from '../../hooks/useAuth';

export default function ProfileSetting() {
  const {authenUser} = useAuth();
  return (
    <div className="mx-24 mt-10 text-cerulean-blue-800 block">
      <h1 className="text-4xl  font-semibold">Profile Setting</h1>
      <div className="flex gap-20">
        <div className="flex-1 ">
          <ProfileSettingPreview authenUser={authenUser} />
          <ProfileSettingPicture authenUser={authenUser} />
        </div>
        <div className="flex-1 ">
          <ProfileSettingInfo />
          {/* <ProfileSettingAddress /> */}
        </div>
      </div>
    </div>
  );
}
