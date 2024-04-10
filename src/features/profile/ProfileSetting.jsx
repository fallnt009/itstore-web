import React from 'react';

import ProfileSettingPicture from './ProfileSettingPicture';
import ProfileSettingInfo from './ProfileSettingInfo';
import ProfileSettingAddress from './ProfileSettingAddress';
import ProfileSettingPreview from './ProfileSettingPreview';

export default function ProfileSetting() {
  return (
    <div className="mx-24 mt-10 text-cerulean-blue-800   block w-full">
      <h1 className="text-4xl  font-semibold">Profile Setting</h1>
      <div className="flex justify-center">
        <div className="flex-1 ">
          <ProfileSettingPreview />
          <ProfileSettingPicture />
        </div>
        <div className="flex-1 ">
          <ProfileSettingInfo />
          <ProfileSettingAddress />
        </div>
      </div>
    </div>
  );
}
