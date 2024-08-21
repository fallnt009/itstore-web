//Public Routes
exports.HOME = '/';
//for new and sale
exports.PRODUCT = '/product';
exports.NEW_PRODUCT = '/product/new';
exports.SALE_PRODUCT = '/product/flashsale';
//Category
exports.PRODUCT_CATEGORY = '/categories/:categoryName/:subCategoryName';
//Product Detail
exports.PRODUCT_DETAIL =
  '/categories/:categoryName/:subCategoryName/:productName';

//For Profile
exports.MY_PROFILE = (userId) => `/profile/${userId}`;

//For Cart
exports.YOUR_CART = '/yourcart';

//For Checkout
exports.CHECKOUT_DETAIL = '/checkout/details';
exports.CHECKOUT_SERVICES = '/checkout/services';
exports.CHECKOUT_PAYMENT = '/checkout/payment';

//For Payment
exports.PAYMENT_TRANSFER = '/checkout/transferpay';

//For Order
exports.ORDER_DETAIL = (orderNumber) => `/order/details/${orderNumber}`;
exports.ORDER_HISTORY = '/order/history';
exports.ORDER_PROOF = '/order/proof';

//for Admin
exports.ADMIN_PRODUCT_MANAGE = '/admin-panel/product';
exports.ADMIN_PRODUCT_CREATE = '/admin-panel/product/create';
exports.ADMIN_PRODUCT_EDIT = (productId) =>
  `/admin-panel/product/edit/${productId}`;
exports.ADMIN_PRODUCT_PREVIEW = (productId) =>
  `/admin-panel/product/preview/${productId}`;
exports.ADMIN_PRODUCT_UPLOAD = '/admin-panel/product/upload';
