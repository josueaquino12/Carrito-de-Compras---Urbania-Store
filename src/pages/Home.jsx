
import image1 from './img/banner_img_01.jpg';
import image2 from './img/banner_img_02.jpg';
import image3 from './img/banner_img_03.jpg';

import '../assets/css/templatemo.css'
import '../assets/css/templatemo.min.css'

import '../assets/css/slick-theme.css'
import '../assets/css/slick-theme.min.css'
import '../assets/css/slick.min.css'

import { useProducts } from '../hooks/useProducts';
import { Link } from 'react-router-dom';
export const Home = () => {

    const { productos } = useProducts();

    const image_circle_1 = productos.find((item) => item.id === 5) || {};
    const image_circle_2 = productos.find((item) => item.id === 13) || {};
    const image_circle_3 = productos.find((item) => item.id === 1) || {};

    const element_categorie = productos.find((item) => item.id === 15) || {};
    const element_categorie2 = productos.find((item) => item.id === 3) || {};
    const element_categorie3 = productos.find((item) => item.id === 10) || {};
    return (


        <>

            {/** Start Banner Hero */}
            <div id="template-mo-zay-hero-carousel" class="carousel slide" data-bs-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-bs-target="#template-mo-zay-hero-carousel" data-bs-slide-to="0" class="active"></li>
                    <li data-bs-target="#template-mo-zay-hero-carousel" data-bs-slide-to="1"></li>
                    <li data-bs-target="#template-mo-zay-hero-carousel" data-bs-slide-to="2"></li>
                </ol>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <div class="container">
                            <div class="row p-5">
                                <div class="mx-auto col-md-8 col-lg-6 order-lg-last">
                                    <img class="img-fluid" src={image1} alt="" />
                                </div>
                                <div class="col-lg-6 mb-0 d-flex align-items-center">
                                    <div class="text-align-left align-self-center">
                                        <h1 class="h1 text-success"><b>Urbania Store</b> eCommerce</h1>
                                        <h3 class="h2">Renew your style and your home in one place</h3>
                                        <p>
                                            Discover the perfect combination of fashion and technology in our store. From the latest clothing trends to the most innovative appliances, 
                                            we have everything you need to live in style and comfort. Visit us and be amazed!
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div class="container">
                            <div class="row p-5">
                                <div class="mx-auto col-md-8 col-lg-6 order-lg-last">
                                    <img class="img-fluid" src={image2} alt="" />
                                </div>
                                <div class="col-lg-6 mb-0 d-flex align-items-center">
                                    <div class="text-align-left">
                                        <h1 class="h1">Your ideal shopping destination</h1>
                                        <h3 class="h2">Fashion, technology and home</h3>
                                        <p>
                                           Find everything you're looking for in one place. Our wide selection of clothing, appliances, 
                                           and household items offers you the best quality and variety. Don't miss the opportunity to transform your lifestyle!
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div class="container">
                            <div class="row p-5">
                                <div class="mx-auto col-md-8 col-lg-6 order-lg-last">
                                    <img class="img-fluid" src={image3} alt="" />
                                </div>
                                <div class="col-lg-6 mb-0 d-flex align-items-center">
                                    <div class="text-align-left">
                                        <h1 class="h1">Shopping paradise</h1>
                                        <h3 class="h2">Where fashion and technology meet</h3>
                                        <p>
                                          Description: Immerse yourself in a unique shopping experience. Explore our exclusive clothing collections, 
                                          discover the latest appliances, and find everything you need to create the home of your dreams. We look forward to pampering you!
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <a class="carousel-control-prev text-decoration-none w-auto ps-3" href="#template-mo-zay-hero-carousel" role="button" data-bs-slide="prev">
                    <i class="fas fa-chevron-left"></i>
                </a>
                <a class="carousel-control-next text-decoration-none w-auto pe-3" href="#template-mo-zay-hero-carousel" role="button" data-bs-slide="next">
                    <i class="fas fa-chevron-right"></i>
                </a>
            </div>

            {/* Start Categories of The Month*/}
            <section class="container py-5">
                <div class="row text-center pt-3">
                    <div class="col-lg-6 m-auto">
                        <h1 class="h1">Categories of The Month</h1>
                        <p>
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                            deserunt mollit anim id est laborum.
                        </p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12 col-md-4 p-5 mt-3">

                        <Link to="/shop"><img src={image_circle_1.image || "placeholder.jpg"} class="rounded-circle img-fluid border" style={{ width: "100%", height: "300px", objectFit: "cover" }} /></Link>
                        <h5 class="text-center mt-3 mb-3">Jewelery</h5>
                        <p class="text-center"><Link to="/shop" class="btn btn-success">Go Shop</Link></p>
                    </div>
                    <div class="col-12 col-md-4 p-5 mt-3">
                        <Link to="/shop"><img src={image_circle_2.image || "placeholder.jpg"} class="rounded-circle img-fluid border" style={{ width: "100%", height: "300px", objectFit: "cover" }} /></Link>
                        <h2 class="h5 text-center mt-3 mb-3">Electronics</h2>
                        <p class="text-center"><Link to="/shop" class="btn btn-success">Go Shop</Link></p>
                    </div>
                    <div class="col-12 col-md-4 p-5 mt-3">
                        <Link to="/shop"><img src={image_circle_3.image || "placeholder.jpg"} class="rounded-circle img-fluid border" style={{ width: "100%", height: "300px", objectFit: "cover" }} /></Link>
                        <h2 class="h5 text-center mt-3 mb-3">Clothes</h2>
                        <p class="text-center"><Link to="/shop" class="btn btn-success">Go Shop</Link></p>
                    </div>
                </div>
            </section>

            {/*End Categories of The Month*/}
            <section class="bg-light">
                <div class="container py-5">
                    <div class="row text-center py-3">
                        <div class="col-lg-6 m-auto">
                            <h1 class="h1">Featured Product</h1>
                            <p>
                                Reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                Excepteur sint occaecat cupidatat non proident.
                            </p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12 col-md-4 mb-4">
                            <div class="card h-100">
                                <Link to='/shop'>
                                    <img src={element_categorie.image || "placeholder.jpg"} class="card-img-top" alt="..." style={{ width: "100%", height: "200px", objectFit: "cover" }} />
                                </Link>
                                <div class="card-body">
                                    <ul class="list-unstyled d-flex justify-content-between">
                                        <li>
                                            <i class="text-warning fa fa-star"></i>
                                            <i class="text-warning fa fa-star"></i>
                                            <i class="text-warning fa fa-star"></i>
                                            <i class="text-muted fa fa-star"></i>
                                            <i class="text-muted fa fa-star"></i>
                                        </li>
                                        <li class="text-muted text-right">${element_categorie.price || "Cargando..."}</li>
                                    </ul>
                                    <Link to='/shop' class="h2 text-decoration-none text-dark">{element_categorie.title || "Cargando..."}</Link>
                                    <p class="card-text">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt in culpa qui officia deserunt.
                                    </p>

                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-md-4 mb-4">
                            <div class="card h-100">
                                <Link to='/shop'>
                                    <img src={element_categorie2.image || "placeholder.jpg"} class="card-img-top" alt="..." style={{ width: "100%", height: "200px", objectFit: "cover" }} />
                                </Link>
                                <div class="card-body">
                                    <ul class="list-unstyled d-flex justify-content-between">
                                        <li>
                                            <i class="text-warning fa fa-star"></i>
                                            <i class="text-warning fa fa-star"></i>
                                            <i class="text-warning fa fa-star"></i>
                                            <i class="text-muted fa fa-star"></i>
                                            <i class="text-muted fa fa-star"></i>
                                        </li>
                                        <li class="text-muted text-right">${element_categorie2.price || "Cargando..."}</li>
                                    </ul>
                                    <Link to='/shop' href="" class="h2 text-decoration-none text-dark">{element_categorie2.title || "Cargando..."}</Link>
                                    <p class="card-text">
                                        Aenean gravida dignissim finibus. Nullam ipsum diam, posuere vitae pharetra sed, commodo ullamcorper.
                                    </p>

                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-md-4 mb-4">
                            <div class="card h-100">
                                <Link to='/shop'>
                                    <img src={element_categorie3.image || "placeholder.jpg"} class="card-img-top" alt="..." style={{ width: "100%", height: "200px", objectFit: "cover" }} />
                                </Link>
                                <div class="card-body">
                                    <ul class="list-unstyled d-flex justify-content-between">
                                        <li>
                                            <i class="text-warning fa fa-star"></i>
                                            <i class="text-warning fa fa-star"></i>
                                            <i class="text-warning fa fa-star"></i>
                                            <i class="text-muted fa fa-star"></i>
                                            <i class="text-muted fa fa-star"></i>
                                        </li>
                                        <li class="text-muted text-right">${element_categorie3.price || "Cargando..."}</li>
                                    </ul>
                                    <Link to='/shop' class="h2 text-decoration-none text-dark">{element_categorie3.title || "Cargando..."}</Link>
                                    <p class="card-text">
                                        Curabitur ac mi sit amet diam luctus porta. Phasellus pulvinar sagittis diam, et scelerisque ipsum lobortis nec.
                                    </p>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </>
    )
}

