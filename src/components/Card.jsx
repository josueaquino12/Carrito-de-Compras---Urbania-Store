import { useState, useContext } from 'react'


export const Card = ({ imagen, titulo, descripcion, precio, handleAgregar, handleQuitar}) => {


    const [added, setAdded] = useState(false)
    const [collapsed, setCollapsed] = useState(true);

    const clickAgregar = () => {
        handleAgregar()
        setAdded(true)
    }

    const clickQuitar = () => {
        handleQuitar()
        setAdded(false)
    }

    return (
        <>
            <div className="col-md-4">
                <div className="card mb-4 product-wap rounded-0 h-100 d-flex flex-column">
                    <div className="card rounded-0">
                        <img className="card-img-top img-fluid" src={imagen} alt={titulo} style={{ width: "100%", height: "200px", objectFit: "cover" }} />
                    </div>
                    <div className="card-body d-flex flex-column">
                        <a href="#" className="h5 text-decoration-none text-truncate">{titulo}</a>

                        <button className="btn btn-link p-0 text-primary" onClick={() => setCollapsed(!collapsed)}>
                            {collapsed ? "Ver más" : "Ver menos"}
                        </button>

                        <div className={`collapse ${collapsed ? "" : "show"}`}>
                            <p className="small">{descripcion}</p>
                        </div>

                        <p className="text-center mb-2 font-weight-bold">${precio}</p>

                        <div className="mt-auto">
                            {added ? (
                                <button className="btn btn-danger w-100" type="button" onClick={clickQuitar}>
                                    Quitar del carrito
                                </button>
                            ) : (
                                <button className="btn btn-success w-100" type="button" onClick={clickAgregar}>
                                    Agregar al carrito
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

