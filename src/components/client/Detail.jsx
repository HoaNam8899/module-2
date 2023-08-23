import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { useState } from 'react'
export const Detail = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [])
    const navigate = useNavigate()
    const dispatch = useDispatch();


    const productDetail = useSelector(p => p.product.productDetail)
    const [checkProduct, setCheckProduct] = useState(productDetail)
    const handleAddToCart = (e) => {
        e.preventDefault()
        dispatch({ type: "ADD_PRODUCT_FROM_DETAIL", payload: checkProduct })
    }
    return (
        <>
            <div id="page-content" className="page-content">
                <div className="banner">
                    <div
                        className="jumbotron jumbotron-bg text-center rounded-0"
                        style={{ backgroundImage: 'url("../../../assets/img/bg-header.jpg")' }}
                    >
                        <div className="container">
                            <h1 className="pt-5">The Meat Product Title</h1>
                            <p className="lead">Save time and leave the groceries to us.</p>
                        </div>
                    </div>
                </div>
                <div className="product-detail">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-6">
                                <div className="slider-zoom" style={{ marginBottom: '50px' }}>
                                    <a
                                        // href={productDetail.image}
                                        className="cloud-zoom"
                                    // rel="transparentImage: {}, useWrapper: false, showTitle: false, zoomWidth:'500', zoomHeight:'500', adjustY:0, adjustX:10"
                                    // id="cloudZoom"
                                    >
                                        <img
                                            alt="Detail Zoom thumbs image"
                                            src={productDetail.image}
                                            style={{ width: "100%", borderRadius: '4px' }}
                                        />
                                    </a>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <p>
                                    <strong>Overview</strong>
                                    <br />
                                    {productDetail.description}
                                </p>
                                <div className="row">
                                    <div className="col-sm-6">
                                        <p>
                                            <strong>Price</strong> (/Pack)
                                            <br />
                                            <span className="price">
                                                {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(parseInt(productDetail.price) - parseInt(productDetail.price) * parseInt(productDetail.discount) / 100)}
                                            </span>
                                            <span className="old-price">
                                                {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(parseInt(productDetail.price))}
                                            </span>
                                        </p>
                                    </div>
                                    <div className="col-sm-6 text-right">
                                        <p>
                                            <span className="stock available">{productDetail.status}</span>
                                        </p>
                                    </div>
                                </div>
                                <p className="mb-1">
                                    <strong>Quantity</strong>
                                </p>
                                <div className="row">
                                    <div className="col-sm-5">
                                        <input
                                            className="vertical-spin"
                                            type="text"
                                            data-bts-button-down-class="btn btn-primary"
                                            data-bts-button-up-class="btn btn-primary"
                                            defaultValue={productDetail.qty == undefined ? '' : productDetail.qty}
                                            name="vertical-spin"
                                            onChange={(e) => setCheckProduct({ ...checkProduct, qty: parseInt(e.target.value) })}
                                        />
                                    </div>
                                    <div className="col-sm-6">
                                        <span className="pt-1 d-inline-block"></span>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-6">
                                        <button className="mt-3 btn btn-primary btn-lg" onClick={(e) => handleAddToCart(e)}>
                                            <i className="fa fa-shopping-basket" /> Add to Cart
                                        </button>
                                    </div>
                                    <div className="col-sm-6">
                                        <button className="mt-3 btn btn-primary btn-lg" onClick={() => navigate('/shop')}>
                                            Continue Shopping
                                        </button>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
                {/* <section id="related-product">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <h2 className="title">Related Products</h2>
                                <div className="product-carousel owl-carousel">
                                    <div className="item">
                                        <div className="card card-product">
                                            <div className="card-ribbon">
                                                <div className="card-ribbon-container right">
                                                    <span className="ribbon ribbon-primary">SPECIAL</span>
                                                </div>
                                            </div>
                                            <div className="card-badge">
                                                <div className="card-badge-container left">
                                                    <span className="badge badge-default">Until 2018</span>
                                                    <span className="badge badge-primary">20% OFF</span>
                                                </div>
                                                <img
                                                    src="../../../assets/img/meats.jpg"
                                                    alt="Card image 2"
                                                    className="card-img-top"
                                                />
                                            </div>
                                            <div className="card-body">
                                                <h4 className="card-title">
                                                    <a href="detail-product.html">Product Title</a>
                                                </h4>
                                                <div className="card-price">
                                                    <span className="discount">Rp. 300.000</span>
                                                    <span className="reguler">Rp. 200.000</span>
                                                </div>
                                                <a
                                                    href="detail-product.html"
                                                    className="btn btn-block btn-primary"
                                                >
                                                    Add to Cart
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="card card-product">
                                            <div className="card-ribbon">
                                                <div className="card-ribbon-container right">
                                                    <span className="ribbon ribbon-primary">SPECIAL</span>
                                                </div>
                                            </div>
                                            <div className="card-badge">
                                                <div className="card-badge-container left">
                                                    <span className="badge badge-default">Until 2018</span>
                                                    <span className="badge badge-primary">20% OFF</span>
                                                </div>
                                                <img
                                                    src="../../../assets/img/fish.jpg"
                                                    alt="Card image 2"
                                                    className="card-img-top"
                                                />
                                            </div>
                                            <div className="card-body">
                                                <h4 className="card-title">
                                                    <a href="detail-product.html">Product Title</a>
                                                </h4>
                                                <div className="card-price">
                                                    <span className="discount">Rp. 300.000</span>
                                                    <span className="reguler">Rp. 200.000</span>
                                                </div>
                                                <a
                                                    href="detail-product.html"
                                                    className="btn btn-block btn-primary"
                                                >
                                                    Add to Cart
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="card card-product">
                                            <div className="card-ribbon">
                                                <div className="card-ribbon-container right">
                                                    <span className="ribbon ribbon-primary">SPECIAL</span>
                                                </div>
                                            </div>
                                            <div className="card-badge">
                                                <div className="card-badge-container left">
                                                    <span className="badge badge-default">Until 2018</span>
                                                    <span className="badge badge-primary">20% OFF</span>
                                                </div>
                                                <img
                                                    src="../../../assets/img/vegetables.jpg"
                                                    alt="Card image 2"
                                                    className="card-img-top"
                                                />
                                            </div>
                                            <div className="card-body">
                                                <h4 className="card-title">
                                                    <a href="detail-product.html">Product Title</a>
                                                </h4>
                                                <div className="card-price">
                                                    <span className="discount">Rp. 300.000</span>
                                                    <span className="reguler">Rp. 200.000</span>
                                                </div>
                                                <a
                                                    href="detail-product.html"
                                                    className="btn btn-block btn-primary"
                                                >
                                                    Add to Cart
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="card card-product">
                                            <div className="card-ribbon">
                                                <div className="card-ribbon-container right">
                                                    <span className="ribbon ribbon-primary">SPECIAL</span>
                                                </div>
                                            </div>
                                            <div className="card-badge">
                                                <div className="card-badge-container left">
                                                    <span className="badge badge-default">Until 2018</span>
                                                    <span className="badge badge-primary">20% OFF</span>
                                                </div>
                                                <img
                                                    src="../../../assets/img/frozen.jpg"
                                                    alt="Card image 2"
                                                    className="card-img-top"
                                                />
                                            </div>
                                            <div className="card-body">
                                                <h4 className="card-title">
                                                    <a href="detail-product.html">Product Title</a>
                                                </h4>
                                                <div className="card-price">
                                                    <span className="discount">Rp. 300.000</span>
                                                    <span className="reguler">Rp. 200.000</span>
                                                </div>
                                                <a
                                                    href="detail-product.html"
                                                    className="btn btn-block btn-primary"
                                                >
                                                    Add to Cart
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="card card-product">
                                            <div className="card-ribbon">
                                                <div className="card-ribbon-container right">
                                                    <span className="ribbon ribbon-primary">SPECIAL</span>
                                                </div>
                                            </div>
                                            <div className="card-badge">
                                                <div className="card-badge-container left">
                                                    <span className="badge badge-default">Until 2018</span>
                                                    <span className="badge badge-primary">20% OFF</span>
                                                </div>
                                                <img
                                                    src="../../../assets/img/fruits.jpg"
                                                    alt="Card image 2"
                                                    className="card-img-top"
                                                />
                                            </div>
                                            <div className="card-body">
                                                <h4 className="card-title">
                                                    <a href="detail-product.html">Product Title</a>
                                                </h4>
                                                <div className="card-price">
                                                    <span className="discount">Rp. 300.000</span>
                                                    <span className="reguler">Rp. 200.000</span>
                                                </div>
                                                <a
                                                    href="detail-product.html"
                                                    className="btn btn-block btn-primary"
                                                >
                                                    Add to Cart
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> */}
            </div>

        </>
    )
}
