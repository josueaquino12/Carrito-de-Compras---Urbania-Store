//import { Filters } from '../components/Filters'
import { useContext, useId, useState } from 'react';
import { useProducts } from '../hooks/useProducts';
import { Card } from '../components/Card'
import { CarritoContext } from '../context/CarritoContext';
import { useFilters } from '../hooks/useFilters';
import { Category, Filters } from '../components/Filters';

export const Shop = () => {

  const { productos } = useProducts();

  const { setFilters, filterProducts,  search, setSearch, searchData } = useFilters();

  const { agregarCompra, eliminarCompra } = useContext(CarritoContext)

  const handleAgregar = (compra) => {
    agregarCompra(compra)
  }

  const handleQuitar = (id) => {
    eliminarCompra(id)
  }


  const categoryFilterId = useId();


  const handleChangeCategory = (event) => {
    setFilters(prevState => ({
      ...prevState,
      category: event.target.value
    }))
  }

  const orderFilterId = useId();

  const handleOrderChange = (event) => {
    setFilters(prevState => ({
      ...prevState,
      order: event.target.value
    }));
  };



  const handleChangeSearch = (event) => {
    setSearch(event.target.value)
}


   //Pasamos los productos por una funcion para que filtre los metodos de ordenamiento
  const filterOrder = filterProducts(productos)

  //Pasamos los productos a un search para escribir exactamente lo que el usuario desea buscar
  const filterSearch = searchData(filterOrder)




  return (
    <div className="container py-5">
      <div className="row">

        <div className="col-lg-3">
          <Category id={categoryFilterId} handleChangeCategory={handleChangeCategory}></Category>
        </div>

        <div className="col-lg-9">

          <div className="row">
            <Filters id={orderFilterId} handleOrderChange={handleOrderChange} search={search} handleChangeSearch={handleChangeSearch}></Filters>
          </div>

          <div className="row">

            {filterSearch.length > 0 ?
              (filterSearch.map(producto => (
                <Card
                  key={producto.id}
                  imagen={producto.image}
                  titulo={producto.title}
                  descripcion={producto.description}
                  precio={producto.price}
                  handleAgregar={() => handleAgregar(producto)}
                  handleQuitar={() => handleQuitar(producto.id)}>

                </Card>)))

              : (
                <div class="container text-center">
                <h2>No results found</h2>
              </div>
              )}


          </div>

        </div>

      </div>

    </div>
  )
}

