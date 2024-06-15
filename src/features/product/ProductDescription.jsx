// import {MdCheck} from 'react-icons/md';

export default function ProductDescription({description}) {
  return (
    <div>
      <div className="flex items-center">
        {/* <span>
          <MdCheck />
        </span> */}
        <p>{description}</p>
      </div>
    </div>
  );
}
