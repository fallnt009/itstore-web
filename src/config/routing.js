//Public Routes
exports.HOME = '/';
//for new and sale
exports.PRODUCT = '/product';
exports.NEW_PRODUCT = '/product/new';
exports.SALE_PRODUCT = '/product/flashsale';
//For Route
exports.PRODUCT_CATEGORY = '/categories/:categorySlug/:subCategorySlug';
exports.PRODUCT_DETAIL =
  '/categories/:categorySlug/:subCategorySlug/:productSlug';

//CATEGORY
//Category Navigation
exports.PRODUCT_CATEGORY_NAV = (categorySlug, subCategorySlug) =>
  `/categories/${categorySlug}/${subCategorySlug}`;
//Product Detail
exports.PRODUCT_DETAIL_NAV = (categorySlug, subCategorySlug, productSlug) =>
  `/categories/${categorySlug}/${subCategorySlug}/${productSlug}`;

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
exports.ADMIN_PRODUCT_UPLOAD = '/admin-panel/product/upload';
exports.ADMIN_PRODUCT_EDIT = (productId) =>
  `/admin-panel/product/edit/${productId}`;
exports.ADMIN_PRODUCT_PREVIEW = (productId) =>
  `/admin-panel/product/preview/${productId}`;

//for admin-spec
exports.SPEC_ITEM_MAIN = '/admin-panel/productspec';
exports.SPEC_ITEM_CREATE = '/admin-panel/productspec/create';
exports.SPEC_ITEM_EDIT = (specId) => `/admin-panel/productspec/edit/${specId}`;
exports.SPEC_ITEM_PREVIEW = (specId) =>
  `/admin-panel/productspec/preview/${specId}`;
