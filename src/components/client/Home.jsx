import React from 'react'
import { useNavigate } from 'react-router-dom'


import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
export const Home = () => {
    const navigate = useNavigate()

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
    return (
        <>
            <div id="page-content" className="page-content">
                <div className="banner">
                    <div className="jumbotron jumbotron-video text-center bg-dark mb-0 rounded-0">
                        <video width="100%" preload="auto" loop="" autoPlay="" muted="">
                            <source src="../../../assets/media/explore.mp4" type="video/mp4" />
                            <source src="../../../assets/media/explore.webm" type="video/webm" />
                        </video>
                        <div className="container">
                            <h1 className="pt-5">
                                Save time and leave the
                                <br />
                                groceries to us.
                            </h1>
                            <p className="lead">Always Fresh Everyday.</p>
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="card border-0 text-center">
                                        <div className="card-icon">
                                            <div className="card-icon-i">
                                                <i className="fa fa-shopping-basket" />
                                            </div>
                                        </div>
                                        <div className="card-body">
                                            <h4 className="card-title">Buy</h4>
                                            <p className="card-text">
                                                Simply click-to-buy on the product you want and submit your
                                                order when you're done.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="card border-0 text-center">
                                        <div className="card-icon">
                                            <div className="card-icon-i">
                                                <i className="fas fa-leaf" />
                                            </div>
                                        </div>
                                        <div className="card-body">
                                            <h4 className="card-title">Harvest</h4>
                                            <p className="card-text">
                                                Our team ensures the produce quality is up to our standard and
                                                delivers to your door within 24 hours of harvest day.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="card border-0 text-center">
                                        <div className="card-icon">
                                            <div className="card-icon-i">
                                                <i className="fa fa-truck" />
                                            </div>
                                        </div>
                                        <div className="card-body">
                                            <h4 className="card-title">Delivery</h4>
                                            <p className="card-text">
                                                Farmers receive your orders two days in advance so they can
                                                prepare for harvest exactly as your orders – no wasted
                                                produce.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <section id="why">
                    <h2 className="title">Why Freschery</h2>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="card border-0 text-center gray-bg">
                                    <div className="card-icon">
                                        <div className="card-icon-i text-success">
                                            <i className="fas fa-leaf" />
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <h4 className="card-title">Straight from the Farm</h4>
                                        <p className="card-text">
                                            Our farm-to-table concept emphasizes on getting the fresh
                                            produce directly from local farms to your tables within one day,
                                            hence you know you get the freshest produce straight from
                                            harvest.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card border-0 text-center gray-bg">
                                    <div className="card-icon">
                                        <div className="card-icon-i text-success">
                                            <i className="fa fa-question" />
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <h4 className="card-title">Know Your Farmers</h4>
                                        <p className="card-text">
                                            We want you to know exactly who is growing your food by having
                                            the farmers profile on each item and farmers page. You’re
                                            welcome to visit the farms and see the love they put into
                                            growing your food.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card border-0 text-center gray-bg">
                                    <div className="card-icon">
                                        <div className="card-icon-i text-success">
                                            <i className="fas fa-smile" />
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <h4 className="card-title">Improving Farmers’ Livelihood</h4>
                                        <p className="card-text">
                                            Slowly but sure, by cutting the complex supply chain and food
                                            system, we hope to improve the welfare of farmers by giving them
                                            the returns they deserve for their hard work.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12 mt-5 text-center">
                                <a onClick={() => navigate('/shop')} className="btn btn-primary btn-lg">
                                    SHOP NOW
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="categories" className="pb-0 gray-bg">
                    <h2 className="title">Categories</h2>
                    <div className="landing-categories">
                        <Carousel
                            responsive={responsive}
                            itemClass="carousel-item-margin"
                            removeArrowOnDeviceType={["mobile"]}
                            minimumTouchDrag={5}
                        // autoPlay={true}
                        // autoPlaySpeed={1000}
                        // shouldResetAutoplay={true}
                        >
                            <div className="item">
                                <div className="card rounded-0 border-0 text-center">
                                    <img src="../../../assets/img/vegetables.jpg" />
                                    <div className="card-img-overlay d-flex align-items-center justify-content-center">
                                        {/* <h4 class="card-title">Vegetables</h4> */}
                                        <a onClick={() => navigate('/shop')} className="btn btn-primary btn-lg">
                                            Vegetables
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="card rounded-0 border-0 text-center">
                                    <img src="../../../assets/img/fruits.jpg" />
                                    <div className="card-img-overlay d-flex align-items-center justify-content-center">
                                        {/* <h4 class="card-title">Fruits</h4> */}
                                        <a onClick={() => navigate('/shop')} className="btn btn-primary btn-lg">
                                            Fruits
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="card rounded-0 border-0 text-center">
                                    <img src="../../../assets/img/meats.jpg" />
                                    <div className="card-img-overlay d-flex align-items-center justify-content-center">
                                        {/* <h4 class="card-title">Meats</h4> */}
                                        <a onClick={() => navigate('/shop')} className="btn btn-primary btn-lg">
                                            Meats
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="card rounded-0 border-0 text-center">
                                    <img src="../../../assets/img/fish.jpg" />
                                    <div className="card-img-overlay d-flex align-items-center justify-content-center">
                                        {/* <h4 class="card-title">Fishes</h4> */}
                                        <a onClick={() => navigate('/shop')} className="btn btn-primary btn-lg">
                                            Fishes
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="card rounded-0 border-0 text-center">
                                    <img src="../../../assets/img/frozen.jpg" />
                                    <div className="card-img-overlay d-flex align-items-center justify-content-center">
                                        {/* <h4 class="card-title">Frozen Foods</h4> */}
                                        <a onClick={() => navigate('/shop')} className="btn btn-primary btn-lg">
                                            Frozen Foods
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="card rounded-0 border-0 text-center">
                                    <img src="../../../assets/img/package.jpg" />
                                    <div className="card-img-overlay d-flex align-items-center justify-content-center">
                                        {/* <h4 class="card-title">Package</h4> */}
                                        <a onClick={() => navigate('/shop')} className="btn btn-primary btn-lg">
                                            Package
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </Carousel>
                    </div>
                </section>
            </div>

        </>
    )
}
