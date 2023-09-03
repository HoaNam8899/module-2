import React from 'react'
import Carousel from 'react-multi-carousel';
import "../../../node_modules/react-multi-carousel/lib/styles.css";
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ItemProduct } from './ItemProduct';
import { ItemNoProduct } from './ItemNoProduct';


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





    const vegetableMap = vegetable.length > 0 ? vegetable.map((p, index) =>
        <ItemProduct
            index={index}
            name={p.name}
            image={p.image}
            description={p.description}
            price={p.price}
            discount={p.discount}
            category={p.category}
            status={p.status}
            id={p.id}
            vegetable={vegetable}
        />
    ) : < ItemNoProduct />

    const fruitMap = fruit.length > 0 ? fruit.map((p, index) =>
        <ItemProduct
            index={index}
            name={p.name}
            image={p.image}
            description={p.description}
            price={p.price}
            discount={p.discount}
            category={p.category}
            status={p.status}
            id={p.id}
            fruit={fruit}
        />
    ) : < ItemNoProduct />

    const meatMap = meat.length > 0 ? meat.map((p, index) =>
        <ItemProduct
            index={index}
            name={p.name}
            image={p.image}
            description={p.description}
            price={p.price}
            discount={p.discount}
            category={p.category}
            status={p.status}
            id={p.id}
            meat={meat}
        />
    ) : < ItemNoProduct />

    const fishMap = fish.length > 0 ? fish.map((p, index) =>
        <ItemProduct
            index={index}
            name={p.name}
            image={p.image}
            description={p.description}
            price={p.price}
            discount={p.discount}
            category={p.category}
            status={p.status}
            id={p.id}
            fish={fish}
        />
    ) : < ItemNoProduct />

    const frozenMap = frozen.length > 0 ? frozen.map((p, index) =>
        <ItemProduct
            index={index}
            name={p.name}
            image={p.image}
            description={p.description}
            price={p.price}
            discount={p.discount}
            category={p.category}
            status={p.status}
            id={p.id}
            frozen={frozen}
        />
    ) : < ItemNoProduct />

    const packagesMap = packages.length > 0 ? packages.map((p, index) =>
        <ItemProduct
            index={index}
            name={p.name}
            image={p.image}
            description={p.description}
            price={p.price}
            discount={p.discount}
            category={p.category}
            status={p.status}
            id={p.id}
            packages={packages}
        // tìm kiếm
        />
    ) :
        < ItemNoProduct />
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
            breakpoint: { max: 1024, min: 768 },
            items: 3
        },
        smallTablet: {
            breakpoint: { max: 767, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 2
        }
    };

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
                                    <Carousel
                                        responsive={responsive}
                                        itemClass="carousel-item-margin"
                                    >
                                        {vegetableMap}
                                        <div className="item">
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
                                        {fruitMap}
                                        <div className="item">
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
                                    <Carousel
                                        responsive={responsive}
                                        itemClass="carousel-item-margin"
                                    >
                                        {meatMap}
                                        <div className="item">
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
                                    <Carousel
                                        responsive={responsive}
                                        itemClass="carousel-item-margin"
                                    >
                                        {fishMap}
                                        <div className="item">
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
                                    <Carousel
                                        responsive={responsive}
                                        itemClass="carousel-item-margin"
                                    >
                                        {frozenMap}
                                        <div className="item">
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
                                    <Carousel
                                        responsive={responsive}
                                        itemClass="carousel-item-margin"
                                    >
                                        {packagesMap}
                                        <div className="item">
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
