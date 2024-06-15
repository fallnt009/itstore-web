export default function CheckoutPaymentItem({select, setSelect}) {
  return (
    <div
      className={`flex flex-col gap-1 mt-5 border-2 p-3 py-4 rounded-lg hover:border-cerulean-blue-800 cursor-pointer ${
        select ? 'border-cerulean-blue-800' : ''
      }`}
      onClick={() => setSelect(true)}
      value="banktransfer"
    >
      <div className="flex justify-between">
        <h4 className="font-semibold ">Bank Transfer</h4>
      </div>
      <p className="text-sm text-stone-600">Kasikorn Bank , SCB and etc.</p>
    </div>
  );
}
