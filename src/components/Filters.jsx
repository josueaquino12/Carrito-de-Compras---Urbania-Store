
export const Category = ({ id , handleChangeCategory}) => {


    return (
        <>


            <h1 className="h2 pb-4">Categories</h1>

            <select className="form-select form-select-lg mb-3" aria-label="Large select example" id={id} onChange={handleChangeCategory}>
                <option value="">All</option>
                <option value="men's clothing" >Men</option>
                <option value="women's clothing" >Woman</option>
                <option value="jewelery" >Jewelery</option>
                <option value="electronics" >Electronics</option>
            </select>

        </>


    )
}



export const Filters = ({id, handleOrderChange, search, handleChangeSearch}) => {


    return (
        <>


            <div className="col-md-6">
                <h2>All products</h2>
            </div>
            <div className="col-md-6 pb-4">
                <div className="d-flex">
                <form className="d-flex" role="search">
                                        <input className="form-control me-2" value={search}
                                            onChange={handleChangeSearch} placeholder="Search" aria-label="Search" />

                                    </form>
                    <select className="form-control" id={id} onChange={handleOrderChange}>
                        <option value="title">De la A a la Z</option>
                        <option value="minPrice">Precio De Menor a Mayor</option>
                        <option value="maxPrice">Precio De Mayor a Menor</option>
                    </select>
                </div>
            </div>
        </>


    )
}
