import { useContext } from 'react'

import { CarritoContext } from '../context/CarritoContext'




export const BuyShop = () => {

  const { listaCompras, aumentarCantidad, disminuirCantidad, eliminarCompra } = useContext(CarritoContext);


  const calcularDatos = () => {
    return listaCompras.reduce((total, item) => total + item.price * item.cantidad, 0).toFixed(2)
  }


  const handleAumentar = (id) => {
    aumentarCantidad(id)
  }

  const handleDisminuir = (id) => {
    disminuirCantidad(id)
  }

  const handleEliminar = (id) => {
    eliminarCompra(id)
  }

  const handleImpresion = () => {
    print()
  }



  return (
    <div className='container'>
      
      
      <table className="table table-borderless">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th scope="col">Amount</th>

          </tr>
        </thead>
        <tbody>


          {listaCompras.map(item => (
            <tr key={item.id}>
              <td>{item.title}</td>
              <td>{item.price}</td>
              <td>
                <button className='btn btn-ouline-primary' onClick={() => handleDisminuir(item.id)}>-</button>
                <button className='btn btn-danger'>{item.cantidad}</button>
                <button className='btn btn-ouline-primary' onClick={() => handleAumentar(item.id)}>+</button>
              </td>
              <td>
                <button className='btn btn-danger' onClick={() => handleEliminar(item.id)}>Delete</button>
              </td>
            </tr>

          ))}





        </tbody>
      </table>

      <div className='d-grid gap-2'>
        <b> </b> <h2></h2>
      </div>

      <div className="container text-center">
        <div className="row">
          <div className="col">
           <h2>TOTAL: ${calcularDatos()}</h2> 
          </div>
        </div>
      </div>

      <div className='d-grid gap-2'>
        <button className='btn btn-primary h1' onClick={handleImpresion}>Buy</button>
      </div>

    </div>
  )
}


