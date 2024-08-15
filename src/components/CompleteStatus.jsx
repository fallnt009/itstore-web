import {MdCancel, MdCheckCircle} from 'react-icons/md';

export default function CompleteStatus({onSelect}) {
  return (
    <>
      {onSelect ? (
        <div className="flex items-center gap-1 text-green-500 text-sm">
          <span>
            <MdCheckCircle />
          </span>
          <p className="text-sm">Completed</p>
        </div>
      ) : (
        <div className="flex items-center gap-1 text-red-500 text-sm">
          <span>
            <MdCancel />
          </span>
          <p>Not Complete</p>
        </div>
      )}
    </>
  );
}
