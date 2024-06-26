import {useState} from 'react';

import Input from '../../components/Input';
import ActiveButton from '../../components/ActiveButton';
import SelectBox from '../../components/SelectBox';

import {BANK_OPTION} from '../../config/store';

const dataForm = {
  amount: '',
  transferDate: '',
  transferTime: '',
  payeeBank: '',
  payeeAccNo: '',
  transferTo: {},
};

export default function PaymentProofForm() {
  const [input, setInput] = useState();
  const [error, setError] = useState({});
  const [selectItem, setSelectItem] = useState({});
  const [select, setSelect] = useState(false);

  const handleSelectItem = (item) => {
    setSelectItem(item);
    setSelect(true);
  };

  return (
    <form className="container">
      <div>
        <div className="py-2 ">
          <h4 className="font-semibold">Amount</h4>
          <div className="flex gap-3 py-2"></div>
          <Input placeholder="Amount.." />
        </div>
        <div className="py-3">
          <h4 className="font-semibold">Transfer Date</h4>
          <div className="flex gap-3 py-2">
            <Input placeholder="Date.." />
            <Input placeholder="Time.. " />
          </div>
        </div>
        <div className="py-3">
          <h4 className="font-semibold">Transferer Information</h4>
          <div className="flex gap-3 py-2">
            <Input placeholder="Bank Name.." />
            <Input placeholder="Account Number.." />
          </div>
        </div>
        <div className="py-3  ">
          <h4 className="font-semibold">Transfer to</h4>
          {BANK_OPTION.map((item) => (
            <SelectBox
              key={item.id}
              item={item}
              isSelected={selectItem?.id === item.id}
              onSelect={() => handleSelectItem(item)}
              onSelectItem={handleSelectItem}
            />
          ))}
        </div>
        <div>
          <ActiveButton
            activeTitle="Submit"
            inActiveTitle="Submit"
            select={select}
          />
        </div>
      </div>
    </form>
  );
}
