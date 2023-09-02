import React, { useEffect, useState } from 'react';
import { getCategories, getProductsByCategory } from '../api/woocommerceApi'; // Ajusta la ruta según tu estructura de carpetas

function ProductList() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Obtener categorías al cargar el componente
    getCategories()
      .then((response) => {
        setCategories(response.data);
      })
      .catch((error) => {
        console.error('Error al obtener las categorías:', error);
      });

    // Obtener productos de una categoría específica
    getProductsByCategory('Gelato')
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error('Error al obtener los productos:', error);
      });
  }, []);

  // Renderiza las categorías y productos en tu componente

  return (
    <div>
      <h2>Categorías:</h2>
      <ul>
        {categories.map((category) => (
          <li key={category.id}>{category.name}</li>
        ))}
      </ul>

      <h2>Productos de "gelato":</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
