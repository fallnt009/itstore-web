//Price config
exports.VAT_PERCENTAGE = 7;
exports.DELIVERY_FEE = 40;

//Parcel Service
exports.PARCEL_SERVICE = [
  {
    id: 1,
    name: 'Standard Delivery',
    price: 40,
    description: 'Delivered within 3-5 days',
  },
];

//Payment Method
exports.PAYMENT_METHOD = [
  {id: 1, name: 'Bank Transfer', description: 'Kasikorn Bank , SCB and etc.'},
];

//Bank Option
exports.BANK_OPTION = [
  {
    id: 1,
    title: 'KASIKORN BANK',
    subTitle: 'XXX-XXX-XXXX',
    description: 'Branch: Central Chiang Mai',
    subDescription: 'Account name: ITSTORE.INC',
  },
  {
    id: 2,
    title: 'SIAM COMMERCIAL BANK',
    subTitle: 'XXX-XXX-XXXX',
    description: 'Branch: Big C Chiang Mai',
    subDescription: 'Account name: ITSTORE.INC',
  },
];
