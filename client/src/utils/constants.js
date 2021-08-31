const FEATURES = [
  'Skin Color',
  'Base Hair',
  'Back Hair',
  'Front Hair',
  'Side Hair',
  'Extra Hair',
  'Eyes',
  'Eyebrows',
  'Ears',
  'Nose',
  'Mouth',
  'Blush',
  'Accessories',
];

const LOGIN_FALLBACK = '/login';
const ADMIN_FALLBACK = '/admin';
const ADMIN_LOCKED_FALLBACK = '/admin/locked';
const ADMIN_URLS_TO_LOCK = ['/admin/features'];
const CUSTOMER_FALLBACK = '/customer';
const CUSTOMER_LOCKED_FALLBACK = '/customer/locked';
const CUSTOMER_URLS_TO_LOCK = ['/customer/characters/edit-character', '/customer/characters/edit-select-pose', '/customer/characters/edit-name-description', '/customer/characters/order'];

const FEATURE_IMAGE_URL = 'http://localhost:3000/uploads';
const USER_API_BASE_URL = 'http://localhost:3000/api/users';
const CHARACTER_API_BASE_URL = 'http://localhost:3000/api/carts';
const CONTACT_API_BASE_URL = 'http://localhost:3000/api/contacts';
const CART_API_BASE_URL = 'http://localhost:3000/api/carts';
const ORDER_API_BASE_URL = 'http://localhost:3000/api/orders';
const IMAGE_API_BASE_URL = 'http://localhost:3000/api/images';

export {
  FEATURES,
  LOGIN_FALLBACK,
  ADMIN_FALLBACK,
  ADMIN_LOCKED_FALLBACK,
  ADMIN_URLS_TO_LOCK,
  CUSTOMER_FALLBACK,
  CUSTOMER_LOCKED_FALLBACK,
  CUSTOMER_URLS_TO_LOCK,
  FEATURE_IMAGE_URL,
  USER_API_BASE_URL,
  CHARACTER_API_BASE_URL,
  CONTACT_API_BASE_URL,
  CART_API_BASE_URL,
  ORDER_API_BASE_URL,
  IMAGE_API_BASE_URL,
};
