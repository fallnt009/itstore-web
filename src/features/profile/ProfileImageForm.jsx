import useAuth from '../../hooks/useAuth';

export default function ProfileImageForm() {
  const {authenUser, updateProfile} = useAuth();

  const {profileImage} = authenUser;
  //Loading
  //file and setFile
  //use Ref
  //handle click Save

  return <div>ProfileImageForm</div>;
}

//Change Profile Image
//Upload
//Done
