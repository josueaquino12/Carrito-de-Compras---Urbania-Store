import { useContext } from "react"
import { FiltersContext } from "../context/FiltersContext"

export const useFilters = () => {
    const context = useContext(FiltersContext);

    if (!context) {
        throw new Error("useFilters debe usarse dentro de un FiltersProvider");
    }

    const { filters, setFilters, search, setSearch } = context;

    const filterProducts = (products) => {
        return products
            .filter(product =>
                product.price >= filters.minPrice &&
                product.price <= filters.maxPrice &&
                (filters.category === '' || product.category === filters.category)
            )
            .sort((a, b) => {
                if (filters.order === 'title') {
                    return a.title.localeCompare(b.title);
                }
                if (filters.order === 'minPrice') {
                    return a.price - b.price;
                }
                if (filters.order === 'maxPrice') {
                    return b.price - a.price;
                }
                return 0;
            });
    };


    
    const searchData = (products) => {
       return products.filter(item =>
            item.title.toLowerCase().includes(search.toLowerCase())
        );
    }




    return { filters, filterProducts, setFilters, searchData, search, setSearch };
};
