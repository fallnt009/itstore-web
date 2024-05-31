import {MdCheck} from 'react-icons/md';

export default function ProductDescription() {
  return (
    <div>
      <div className="flex items-center">
        <span>
          <MdCheck />
        </span>
        <p>AMD Socket B450</p>
      </div>
      <div className="flex items-center">
        <span>
          <MdCheck />
        </span>
        <p>NVIDIA SLI/AMD 3-WAY CROSSFIRE</p>
      </div>
      <div className="flex items-center">
        <span>
          <MdCheck />
        </span>
        <p>X 6 x SATA 6Gb/s Support Ram 64GB</p>
      </div>
      <div className="flex items-center">
        <span>
          <MdCheck />
        </span>
        <p>รองรับแรม 4 Slot ใส่ได้สูงสุด 3200MHz</p>
      </div>
    </div>
  );
}
