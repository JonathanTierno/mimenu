import axios from 'axios';

// Define las credenciales de la API de WooCommerce
const consumerKey = 'ck_192043155aae63e6b957ec5be5e00c145883f08d';
const consumerSecret = 'cs_991eae5b65a13349c0c49b75c1e5dbab95f67f9a';

// URL de la API de WooCommerce
const apiUrl = 'https://helado.mimenu.uy/wp-json/wc/v3';

// Autenticación básica para las solicitudes
const auth = {
    username: consumerKey,
    password: consumerSecret,
  };
  
  // Función para obtener las categorías
  export const getCategories = () => {
    return axios.get(`${apiUrl}/products/categories`, { auth });
  };
  
  // Función para obtener los productos de una categoría específica
  export const getProductsByCategory = (categoryName) => {
    return axios.get(`${apiUrl}/products`, { auth, params: { category: categoryName } });
  };