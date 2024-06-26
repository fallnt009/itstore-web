import PaymentProofForm from './PaymentProofForm';
import PaymentProofOrder from './PaymentProofOrder';
import PaymentProofUpload from './PaymentProofUpload';

export default function PaymentProof() {
  return (
    <div className="container">
      <div className="grid grid-cols-[1fr_2fr] mx-24 ">
        <div className="flex flex-col ">
          <div className="p-5">
            <h1 className="font-semibold text-2xl">Order Number</h1>
            <PaymentProofOrder />
          </div>
          <div className="p-5 ">
            <h1 className="font-semibold text-2xl">Upload your proof</h1>
            <p className="text-stone-600 text-sm">
              *upload file must not over 1 MB
            </p>
            <PaymentProofUpload />
          </div>
        </div>
        <div className="grid ">
          <div className="p-5">
            <h1 className="font-semibold text-2xl">Proof of Payment Info</h1>
            <PaymentProofForm />
          </div>
        </div>
      </div>
    </div>
  );
}
