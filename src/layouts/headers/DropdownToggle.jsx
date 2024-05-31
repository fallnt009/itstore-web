import Avatar from '../../components/Avatar';
import useAuth from '../../hooks/useAuth';

export default function DropdownToggle({onClick}) {
  const {authenUser} = useAuth();
  return (
    <div onClick={onClick}>
      {authenUser ? (
        <>
          <Avatar size={48} src={authenUser.profileImage} />
        </>
      ) : (
        <>
          <Avatar size={48} />
        </>
      )}
    </div>
  );
}
