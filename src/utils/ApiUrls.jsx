const baseUrl = import.meta.env.VITE_BASE_URL;

// Endpoints
const urls = {
   addProductUrl: `${baseUrl}${import.meta.env.VITE_ADD_PRODUCT}`,
   fetchOrdersUrl: `${baseUrl}${import.meta.env.VITE_FETCH_ORDERS}`,
   fetchProducts: `${baseUrl}${import.meta.env.VITE_FETCH_PRODUCTS}`
};

export default urls;

