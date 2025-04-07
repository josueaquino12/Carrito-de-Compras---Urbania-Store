
import { useContext } from "react";
import { ProductsContext } from "../context/ProductsContext";

export const useProducts = () => {
 
        const context = useContext(ProductsContext);
      
        if (!context) {
          throw new Error("useProducts debe usarse dentro de un ProductsProvider");
        }
      
        return context;
}


