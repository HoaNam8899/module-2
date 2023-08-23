import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import Carousel from 'react-bootstrap/Carousel';
import Carousel from 'react-multi-carousel';
import "../../../node_modules/react-multi-carousel/lib/styles.css";

export const Shop = () => {
    useEffect(() => {
        dispatch({ type: 'GET_ALL_PRODUCT' })
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [])
    const vegetable = useSelector(p => p.product.vegetable)
    const fruit = useSelector(p => p.product.fruit)
    const meat = useSelector(p => p.product.meat)
    const fish = useSelector(p => p.product.fish)
    const frozen = useSelector(p => p.product.frozen)
    const packages = useSelector(p => p.product.packages)


    const navigate = useNavigate();
    const dispatch = useDispatch()
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 3
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    const handleAddToCart = (p) => {
        p = { ...p, qty: 1 };
        dispatch({ type: 'ADD_TO_CART', payload: p });
    }
    // detail 
    const handleDetail = (id, category) => {
        if (category == 'vegetable') {
            var productD = vegetable.find(x => x.id == id)
        } else if (category == 'fruit') {
            var productD = fruit.find(x => x.id == id)
        } else if (category == 'meat') {
            var productD = meat.find(x => x.id == id)
        } else if (category == 'fish') {
            var productD = fish.find(x => x.id == id)
        } else if (category == 'frozen') {
            var productD = frozen.find(x => x.id == id)
        } else {
            var productD = packages.find(x => x.id == id)
        }
        dispatch({ type: 'PRODUCT_DETAIL', payload: productD });
        navigate('/detail');
    }
    useEffect(() => {
        // window.location.reload();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [])
    return (
        <>
            <div id="page-content" className="page-content">
                <div className="banner">
                    <div
                        className="jumbotron jumbotron-bg text-center rounded-0"
                        style={{ backgroundImage: 'url("../../../assets/img/bg-header.jpg")' }}
                    >
                        <div className="container">
                            <h1 className="pt-5">Shopping Page</h1>
                            <p className="lead">Save time and leave the groceries to us.</p>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h2 className="title" style={{ marginTop: '20px' }}>Categories</h2>
                            <div className="shop-categories mt-5" >
                                <Carousel
                                    responsive={responsive}
                                    itemClass="carousel-item-margin"
                                    removeArrowOnDeviceType={["mobile"]}
                                    minimumTouchDrag={5}
                                >
                                    <div className="item itemForHeade">
                                        <a href='#vegetables'>
                                            <div className="media d-flex align-items-center justify-content-center">
                                                <span className="d-flex mr-2">
                                                    <i className="sb-bistro-carrot" />
                                                </span>
                                                <div className="media-body">
                                                    <h5>Vegetables</h5>
                                                    <p>Freshly Harvested Veggies From Local Growers</p>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="item itemForHeade">
                                        <a href='#fruits'>
                                            <div className="media d-flex align-items-center justify-content-center">
                                                <span className="d-flex mr-2">
                                                    <i className="sb-bistro-apple" />
                                                </span>
                                                <div className="media-body">
                                                    <h5>Fruits</h5>
                                                    <p>Variety of Fruits From Local Growers</p>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="item itemForHeade">
                                        <a href='#meats'>
                                            <div className="media d-flex align-items-center justify-content-center">
                                                <span className="d-flex mr-2">
                                                    <i className="sb-bistro-roast-leg" />
                                                </span>
                                                <div className="media-body">
                                                    <h5>Meats</h5>
                                                    <p>Protein Rich Ingridients From Local Farmers</p>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="item itemForHeade">
                                        <a href='#fishes'>
                                            <div className="media d-flex align-items-center justify-content-center">
                                                <span className="d-flex mr-2">
                                                    <i className="sb-bistro-french-fries" />
                                                </span>
                                                <div className="media-body">
                                                    <h5>Fishes</h5>
                                                    <p>Protein Rich Ingridients From Local Farmers</p>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="item itemForHeade">
                                        <a href='#frozens'>
                                            <div className="media d-flex align-items-center justify-content-center">
                                                <span className="d-flex mr-2">
                                                    <i className="sb-bistro-french-fries" />
                                                </span>
                                                <div className="media-body">
                                                    <h5>Frozen Foods</h5>
                                                    <p>Protein Rich Ingridients From Local Farmers</p>
                                                </div>
                                            </div>
                                        </a>
                                    </div>

                                    <div className="item itemForHeade">
                                        <a href='#packages'>
                                            <div className="media d-flex align-items-center justify-content-center">
                                                <span className="d-flex mr-2">
                                                    <i className="sb-bistro-appetizer" />
                                                </span>
                                                <div className="media-body">
                                                    <h5>Packages</h5>
                                                    <p>Protein Rich Ingridients From Local Farmers</p>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="item itemForHeade">
                                        {/* item rong de thay duoc cai dang sau cung */}
                                    </div>
                                </Carousel>
                            </div>
                        </div>
                    </div>
                </div>
                <section id="vegetables">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <h2 className="title">Vegetables</h2>
                                <div className="product-carousel ">


                                    {/* 
                                    <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                                        <div className="carousel-inner">
                                            <div className="carousel-item active">
                                                <img className="d-block w-100" src="..." alt="First slide" />
                                            </div>
                                            <div className="carousel-item">
                                                <img className="d-block w-100" src="..." alt="Second slide" />
                                            </div>
                                            <div className="carousel-item">
                                                <img className="d-block w-100" src="..." alt="Third slide" />
                                            </div>
                                        </div>
                                        <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                            <span className="sr-only">Previous</span>
                                        </a>
                                        <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                            <span className="sr-only">Next</span>
                                        </a>
                                    </div> */}








                                    <Carousel
                                        responsive={responsive}
                                        itemClass="carousel-item-margin"
                                    >
                                        {
                                            vegetable.length > 0 ?
                                                vegetable.map((p, index) =>
                                                    <div className="item" key={index}>
                                                        <div className="card card-product">
                                                            <div className="card-ribbon">
                                                                <div className="card-ribbon-container right">
                                                                    <span className="ribbon ribbon-primary">SPECIAL</span>
                                                                </div>
                                                            </div>
                                                            <div className="card-badge">
                                                                <div className="card-badge-container left">
                                                                    <span className="badge badge-default">Until 2024</span>
                                                                    <span className="badge badge-primary">{p.discount}% OFF</span>
                                                                </div>
                                                                <img
                                                                    src={p.image}
                                                                    alt="Card image 2"
                                                                    className="card-img-top"
                                                                    style={{ height: '230px', objectFit: 'cover' }}
                                                                />
                                                            </div>
                                                            <div className="card-body">
                                                                <h4 className="card-title">
                                                                    <a onClick={() => handleDetail(p.id, p.category)} style={{ cursor: 'pointer' }} className='edit-text'>{p.name}</a>
                                                                </h4>
                                                                <div className="card-price">
                                                                    <span className="discount">
                                                                        {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(p.price)}
                                                                    </span>
                                                                    <span className="reguler">
                                                                        {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(parseInt(p.price) - parseInt(p.price * p.discount / 100))}
                                                                    </span>
                                                                </div>
                                                                <a
                                                                    onClick={() => handleAddToCart(p)}
                                                                    className="btn btn-block btn-primary"
                                                                >
                                                                    Add to Cart
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ) :

                                                <div className="item" >
                                                    <div className="card card-product">
                                                        <div className="card-badge">
                                                            <img
                                                                src='../../assets/img/no-product.avif'
                                                                alt="Card image 2"
                                                                className="card-img-top"
                                                                style={{ height: '226px', objectFit: 'cover' }}
                                                            />
                                                        </div>
                                                        <div className="card-body">
                                                            <h4 className="card-title">
                                                                No product
                                                            </h4>

                                                        </div>
                                                    </div>
                                                </div>

                                        }
                                        <div className="item">
                                            {/* giữ lại */}
                                        </div>
                                    </Carousel>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="fruits" className="gray-bg">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <h2 className="title">Fruits</h2>
                                <div className="product-carousel ">
                                    <Carousel responsive={responsive} itemClass="carousel-item-margin">
                                        {
                                            fruit.length > 0 ?
                                                fruit.map((p, index) =>
                                                    <div className="item" key={index}>
                                                        <div className="card card-product">
                                                            <div className="card-ribbon">
                                                                <div className="card-ribbon-container right">
                                                                    <span className="ribbon ribbon-primary">SPECIAL</span>
                                                                </div>
                                                            </div>
                                                            <div className="card-badge">
                                                                <div className="card-badge-container left">
                                                                    <span className="badge badge-default">Until 2024</span>
                                                                    <span className="badge badge-primary">{p.discount}% OFF</span>
                                                                </div>
                                                                <img
                                                                    src={p.image}
                                                                    alt="Card image 2"
                                                                    className="card-img-top"
                                                                    style={{ height: '230px', objectFit: 'cover' }}
                                                                />
                                                            </div>
                                                            <div className="card-body">
                                                                <h4 className="card-title">
                                                                    <a onClick={() => handleDetail(p.id, p.category)} style={{ cursor: 'pointer' }} className='edit-text'>{p.name}</a>
                                                                </h4>
                                                                <div className="card-price">
                                                                    <span className="discount">
                                                                        {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(p.price)}
                                                                    </span>
                                                                    <span className="reguler">
                                                                        {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(parseInt(p.price) - parseInt(p.price * p.discount / 100))}
                                                                    </span>
                                                                </div>
                                                                <a
                                                                    onClick={() => handleAddToCart(p)}
                                                                    className="btn btn-block btn-primary"
                                                                >
                                                                    Add to Cart
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ) :

                                                <div className="item" >
                                                    <div className="card card-product">
                                                        <div className="card-badge">
                                                            <img
                                                                src='../../assets/img/no-product.avif'
                                                                alt="Card image 2"
                                                                className="card-img-top"
                                                                style={{ height: '226px', objectFit: 'cover' }}
                                                            />
                                                        </div>
                                                        <div className="card-body">
                                                            <h4 className="card-title">
                                                                No product
                                                            </h4>

                                                        </div>
                                                    </div>
                                                </div>

                                        }
                                        <div className="item">
                                            {/* giữ lại */}
                                        </div>
                                    </Carousel>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="meats">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <h2 className="title">Meats</h2>
                                <div className="product-carousel ">
                                    <Carousel responsive={responsive} itemClass="carousel-item-margin">

                                        {
                                            meat.length > 0 ?
                                                meat.map((p, index) =>
                                                    <div className="item" key={index}>
                                                        <div className="card card-product">
                                                            <div className="card-ribbon">
                                                                <div className="card-ribbon-container right">
                                                                    <span className="ribbon ribbon-primary">SPECIAL</span>
                                                                </div>
                                                            </div>
                                                            <div className="card-badge">
                                                                <div className="card-badge-container left">
                                                                    <span className="badge badge-default">Until 2024</span>
                                                                    <span className="badge badge-primary">{p.discount}% OFF</span>
                                                                </div>
                                                                <img
                                                                    src={p.image}
                                                                    alt="Card image 2"
                                                                    className="card-img-top"
                                                                    style={{ height: '230px', objectFit: 'cover' }}
                                                                />
                                                            </div>
                                                            <div className="card-body">
                                                                <h4 className="card-title">
                                                                    <a onClick={() => handleDetail(p.id, p.category)} style={{ cursor: 'pointer' }} className='edit-text'>{p.name}</a>
                                                                </h4>
                                                                <div className="card-price">
                                                                    <span className="discount">
                                                                        {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(p.price)}
                                                                    </span>
                                                                    <span className="reguler">
                                                                        {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(parseInt(p.price) - parseInt(p.price * p.discount / 100))}
                                                                    </span>
                                                                </div>
                                                                <a
                                                                    onClick={() => handleAddToCart(p)}
                                                                    className="btn btn-block btn-primary"
                                                                >
                                                                    Add to Cart
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ) :

                                                <div className="item" >
                                                    <div className="card card-product">
                                                        <div className="card-badge">
                                                            <img
                                                                src='../../assets/img/no-product.avif'
                                                                alt="Card image 2"
                                                                className="card-img-top"
                                                                style={{ height: '226px', objectFit: 'cover' }}
                                                            />
                                                        </div>
                                                        <div className="card-body">
                                                            <h4 className="card-title">
                                                                No product
                                                            </h4>

                                                        </div>
                                                    </div>
                                                </div>

                                        }
                                        <div className="item">
                                            {/* giữ lại */}
                                        </div>

                                    </Carousel>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="fishes" className="gray-bg">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <h2 className="title">Fishes</h2>
                                <div className="product-carousel ">
                                    <Carousel responsive={responsive} itemClass="carousel-item-margin">
                                        {
                                            fish.length > 0 ?
                                                fish.map((p, index) =>
                                                    <div className="item" key={index}>
                                                        <div className="card card-product">
                                                            <div className="card-ribbon">
                                                                <div className="card-ribbon-container right">
                                                                    <span className="ribbon ribbon-primary">SPECIAL</span>
                                                                </div>
                                                            </div>
                                                            <div className="card-badge">
                                                                <div className="card-badge-container left">
                                                                    <span className="badge badge-default">Until 2024</span>
                                                                    <span className="badge badge-primary">{p.discount}% OFF</span>
                                                                </div>
                                                                <img
                                                                    src={p.image}
                                                                    alt="Card image 2"
                                                                    className="card-img-top"
                                                                    style={{ height: '230px', objectFit: 'cover' }}
                                                                />
                                                            </div>
                                                            <div className="card-body">
                                                                <h4 className="card-title">
                                                                    <a onClick={() => handleDetail(p.id, p.category)} style={{ cursor: 'pointer' }} className='edit-text'>{p.name}</a>
                                                                </h4>
                                                                <div className="card-price">
                                                                    <span className="discount">
                                                                        {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(p.price)}
                                                                    </span>
                                                                    <span className="reguler">
                                                                        {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(parseInt(p.price) - parseInt(p.price * p.discount / 100))}
                                                                    </span>
                                                                </div>
                                                                <a
                                                                    onClick={() => handleAddToCart(p)}
                                                                    className="btn btn-block btn-primary"
                                                                >
                                                                    Add to Cart
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ) :

                                                <div className="item" >
                                                    <div className="card card-product">
                                                        <div className="card-badge">
                                                            <img
                                                                src='../../assets/img/no-product.avif'
                                                                alt="Card image 2"
                                                                className="card-img-top"
                                                                style={{ height: '226px', objectFit: 'cover' }}
                                                            />
                                                        </div>
                                                        <div className="card-body">
                                                            <h4 className="card-title">
                                                                No product
                                                            </h4>

                                                        </div>
                                                    </div>
                                                </div>

                                        }
                                        <div className="item">
                                            {/* giữ lại */}
                                        </div>
                                    </Carousel>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="frozens">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <h2 className="title">Frozens</h2>
                                <div className="product-carousel ">
                                    <Carousel responsive={responsive} itemClass="carousel-item-margin">
                                        {
                                            frozen.length > 0 ?
                                                frozen.map((p, index) =>
                                                    <div className="item" key={index}>
                                                        <div className="card card-product">
                                                            <div className="card-ribbon">
                                                                <div className="card-ribbon-container right">
                                                                    <span className="ribbon ribbon-primary">SPECIAL</span>
                                                                </div>
                                                            </div>
                                                            <div className="card-badge">
                                                                <div className="card-badge-container left">
                                                                    <span className="badge badge-default">Until 2024</span>
                                                                    <span className="badge badge-primary">{p.discount}% OFF</span>
                                                                </div>
                                                                <img
                                                                    src={p.image}
                                                                    alt="Card image 2"
                                                                    className="card-img-top"
                                                                    style={{ height: '230px', objectFit: 'cover' }}
                                                                />
                                                            </div>
                                                            <div className="card-body">
                                                                <h4 className="card-title">
                                                                    <a onClick={() => handleDetail(p.id, p.category)} style={{ cursor: 'pointer' }} className='edit-text'>{p.name}</a>
                                                                </h4>
                                                                <div className="card-price">
                                                                    <span className="discount">
                                                                        {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(p.price)}
                                                                    </span>
                                                                    <span className="reguler">
                                                                        {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(parseInt(p.price) - parseInt(p.price * p.discount / 100))}
                                                                    </span>
                                                                </div>
                                                                <a
                                                                    onClick={() => handleAddToCart(p)}
                                                                    className="btn btn-block btn-primary"
                                                                >
                                                                    Add to Cart
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ) :

                                                <div className="item" >
                                                    <div className="card card-product">
                                                        <div className="card-badge">
                                                            <img
                                                                src='../../assets/img/no-product.avif'
                                                                alt="Card image 2"
                                                                className="card-img-top"
                                                                style={{ height: '226px', objectFit: 'cover' }}
                                                            />
                                                        </div>
                                                        <div className="card-body">
                                                            <h4 className="card-title">
                                                                No product
                                                            </h4>

                                                        </div>
                                                    </div>
                                                </div>

                                        }
                                        <div className="item">
                                            {/* giữ lại */}
                                        </div>

                                    </Carousel>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="packages">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <h2 className="title">Packages</h2>
                                <div className="product-carousel ">
                                    <Carousel responsive={responsive} itemClass="carousel-item-margin">
                                        {
                                            packages.length > 0 ?
                                                packages.map((p, index) =>
                                                    <div className="item" key={index}>
                                                        <div className="card card-product">
                                                            <div className="card-ribbon">
                                                                <div className="card-ribbon-container right">
                                                                    <span className="ribbon ribbon-primary">SPECIAL</span>
                                                                </div>
                                                            </div>
                                                            <div className="card-badge">
                                                                <div className="card-badge-container left">
                                                                    <span className="badge badge-default">Until 2024</span>
                                                                    <span className="badge badge-primary">{p.discount}% OFF</span>
                                                                </div>
                                                                <img
                                                                    src={p.image}
                                                                    alt="Card image 2"
                                                                    className="card-img-top"
                                                                    style={{ height: '230px', objectFit: 'cover' }}
                                                                />
                                                            </div>
                                                            <div className="card-body">
                                                                <h4 className="card-title">
                                                                    <a onClick={() => handleDetail(p.id, p.category)} style={{ cursor: 'pointer' }} className='edit-text'>{p.name}</a>
                                                                </h4>
                                                                <div className="card-price">
                                                                    <span className="discount">
                                                                        {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(p.price)}
                                                                    </span>
                                                                    <span className="reguler">
                                                                        {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(parseInt(p.price) - parseInt(p.price * p.discount / 100))}
                                                                    </span>
                                                                </div>
                                                                <a
                                                                    onClick={() => handleAddToCart(p)}
                                                                    className="btn btn-block btn-primary"
                                                                >
                                                                    Add to Cart
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ) :

                                                <div className="item" >
                                                    <div className="card card-product">
                                                        <div className="card-badge">
                                                            <img
                                                                src='../../assets/img/no-product.avif'
                                                                alt="Card image 2"
                                                                className="card-img-top"
                                                                style={{ height: '226px', objectFit: 'cover' }}
                                                            />
                                                        </div>
                                                        <div className="card-body">
                                                            <h4 className="card-title">
                                                                No product
                                                            </h4>

                                                        </div>
                                                    </div>
                                                </div>

                                        }
                                        <div className="item">
                                            {/* giữ lại */}
                                        </div>

                                    </Carousel>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>



        </>
    )
}
