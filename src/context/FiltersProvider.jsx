

import {useState} from 'react'
import { FiltersContext } from './FiltersContext'

export const FiltersProvider = ({children}) => {

    const [filters, setFilters] = useState ({
        category: '',
        minPrice: 0,
        maxPrice: Infinity,
        order:'title'
    })

    const [search, setSearch] = useState('');

    return( 

        <FiltersContext.Provider value={{
           filters,
           setFilters,
           search,
           setSearch
        }}>
        {children}
        </FiltersContext.Provider>
    )
  
}

