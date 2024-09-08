import Input from '../../../../../../../../components/Input';
import TextArea from '../../../../../../../../components/TextArea';

export default function SpecDetailEdit() {
  return (
    <form className="border px-2 py-3 rounded-lg shadow-md">
      <div className="px-2 font-semibold py-2">
        <h1>Edit</h1>
      </div>
      <div className="px-2">
        <div className="flex flex-col gap-2">
          <div className="flex flex-col gap-1 w-24">
            <h4>Value</h4>
            <Input type="number" />
          </div>
          <div className="flex flex-col gap-1">
            <h4>Text</h4>
            <TextArea type="text" rows={2} />
          </div>
        </div>
        <div className="flex justify-end pt-3">
          <button
            type="submit"
            className="p-2 border rounded-lg font-semibold text-white bg-indigo-600 hover:bg-white hover:border-indigo-600 hover:text-indigo-600 shadow"
          >
            Save
          </button>
        </div>
      </div>
    </form>
  );
}
