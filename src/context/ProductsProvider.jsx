import { useState, useEffect } from 'react'

import { ProductsContext } from './ProductsContext'

export const ProductsProvider = ({children}) => {
    
    const [productos, setProductos] = useState([]);
    // 2️⃣ Función para obtener los productos
    const fetchProductos = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products`);
        const data = await response.json();
        /*console.log(data);*/
        setProductos(data);
      } catch (error) {
        console.error("Error al obtener los productos:", error);
      }
    };
  
    // 3️⃣ Llamamos a la función al montar el componente
    useEffect(() => {
      fetchProductos();
    }, []);
  
    return (
      <ProductsContext.Provider value={{ productos, fetchProductos }}>
        {children}
      </ProductsContext.Provider>
    );
}

