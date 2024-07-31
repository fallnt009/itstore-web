import Input from '../../../components/Input';
import ActiveButton from '../../../components/ActiveButton';

export default function PanelProductCreate() {
  //title
  //price
  //description
  //qtyInStock
  return (
    <div className="px-10 py-5">
      <div className="grid pb-5">
        <div>
          <h1 className="text-3xl text-cerulean-blue-800 py-8">
            Let's Fill Some Information about this product
          </h1>
          <div className="flex items-center gap-5">
            <h1 className="text-xl font-semibold text-cerulean-blue-800">
              Step 3 : Fill Product Info
            </h1>
          </div>
          <div className="py-5 px-2">
            <form className="flex flex-col justify-start gap-2">
              <div className="flex flex-col gap-1">
                <h4 className="text-stone-600">Product Name</h4>
                <Input />
              </div>
              <div className="flex flex-col gap-1">
                <h4 className="text-stone-600">Price</h4>
                <Input width="32" />
              </div>
              <div className="flex flex-col gap-1">
                <h4 className="text-stone-600">Description</h4>

                <Input />
              </div>
              <div className="flex flex-col  gap-1">
                <h4 className="text-stone-600">Quantity</h4>
                <Input width="24" />
              </div>
              <div className="py-2 px-5">
                <ActiveButton
                  activeTitle="Proceed to next"
                  inActiveTitle="Proceed to next"
                  select={true}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
