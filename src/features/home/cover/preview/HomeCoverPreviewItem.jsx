import {MdArrowRight} from 'react-icons/md';

export default function HomeCoverPreviewItem({title, src, size}) {
  return (
    <div className="grid grid-rows-2 p-4 gap-2 text-indigo-700">
      <div className="row-span-2">
        <h1 className="text-2xl font-bold">{title}</h1>
        <p className="flex items-center">
          Shop now
          <span>
            <MdArrowRight />
          </span>
        </p>
      </div>
      <div className="row-span-1 flex justify-center">
        <img
          alt="imgpreview"
          src={src || ''}
          style={{width: `${size}px`, height: `${size}px`}}
          className={`object-contain bg-transparent`}
        />
      </div>
    </div>
  );
}
