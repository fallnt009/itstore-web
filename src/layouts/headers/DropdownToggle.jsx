import Avatar from '../../components/Avatar';

export default function DropdownToggle({onClick}) {
  return (
    <div onClick={onClick}>
      <Avatar size={48} />
    </div>
  );
}
