import SpecProductCreate from './create/SpecProductCreate';

export default function SpecProductContent({bcs}) {
  return (
    <div className="pb-10">
      <SpecProductCreate bcs={bcs} />
    </div>
  );
}
