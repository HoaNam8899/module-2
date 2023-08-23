import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { loadLink } from '../../loadJS/helper'
import { loadScripts } from '../../loadJS/helper'

import { Button, Space, Table, Modal, Form, Input, Select } from 'antd';
export const Client = () => {





    const dispatch = useDispatch()
    const navigate = useNavigate();

    // lấy giỏ hàng 

    const currentUser = useSelector(u => u.user.currentUser)
    const currentAvatar = currentUser.image == undefined || null ? "../../../assets/img/logo/avatar.jpg" : currentUser.image
    const handleLogout = () => {
        dispatch({ type: "LOGOUT" })
        dispatch({ type: 'DELETE_ALL_CART' })
        navigate('/')
    }

    const cart = useSelector(p => p.product.cart)

    // map(e => (parseInt(e.price) - parseInt(e.price) * parseInt(e.discount) / 100) * parseInt(e.quantity)).reduce((a, b) => a + b, 0)
    let total = cart.map(e => (parseInt(e.price) - parseInt(e.price) * parseInt(e.discount) / 100) * parseInt(e.qty)).reduce((a, b) => a + b, 0)

    //
    const handleCheckout = () => {
        currentUser.length == 0 ? alert('Vui lòng đăng nhập để mua hàng') : navigate('/checkout');
    }
    // transaction 
    const handleTransaction = () => {

        dispatch({ type: 'GET_ORDERS', payload: currentUser.id })
        navigate('/transaction')
    }

    // modal
    const admin = useSelector(a => a.user.admin)
    const [form] = Form.useForm();
    const [open, setOpen] = useState(false);
    const showModal = () => {
        setOpen(true);
    };
    const hideModal = () => {
        setOpen(false);
    };
    const onFinish = (value) => {
        value.admin == admin[0].admin && value.password == admin[0].password ? navigate('/admin') : confirm('Sai tên hoặc mật khẩu')
    };
    const handleAdmin = () => {
        dispatch({ type: "GET_ADMIN" });
        showModal();
    }
    return (
        <>
            <div className="page-header">
                {/*=============== Navbar ===============*/}
                <nav
                    className="navbar fixed-top navbar-expand-md navbar-dark bg-transparent"
                    id="page-navigation"
                >
                    <div className="container">
                        {/* Navbar Brand */}
                        <a className="navbar-brand" onClick={() => navigate('/')}>
                            <img src="../../../assets/img/logo/logo.png" alt="" />
                        </a>
                        {/* Toggle Button */}
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-toggle="collapse"
                            data-target="#navbarcollapse"
                            aria-controls="navbarCollapse"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarcollapse">
                            {/* Navbar Menu */}
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <a onClick={() => navigate('/')} className="nav-link" style={{ cursor: 'pointer' }}>
                                        Home
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a onClick={() => navigate('/shop')} className="nav-link" style={{ cursor: 'pointer' }}>
                                        Shop
                                    </a>
                                </li>
                                {
                                    currentUser.length == 0 ?
                                        <>
                                            <li className="nav-item">
                                                <a onClick={() => navigate('/register')} className="nav-link" style={{ cursor: 'pointer' }}>
                                                    Register
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a onClick={() => navigate('/login')} className="nav-link" style={{ cursor: 'pointer' }}>
                                                    Login
                                                </a>
                                            </li>
                                        </>
                                        :
                                        <>
                                            <li className="nav-item">
                                                <a onClick={() => navigate('/about')} className="nav-link" style={{ cursor: 'pointer' }}>
                                                    About
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a onClick={() => navigate('/faq')} className="nav-link" style={{ cursor: 'pointer' }}>
                                                    Q & A
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a onClick={() => navigate('/contact')} className="nav-link" style={{ cursor: 'pointer' }}>
                                                    Contact
                                                </a>
                                            </li>
                                            <li className="nav-item dropdown">
                                                <a
                                                    className="nav-link dropdown-toggle"
                                                    href="#"
                                                    id="navbarDropdown"
                                                    role="button"
                                                    data-toggle="dropdown"
                                                    aria-haspopup="true"
                                                    aria-expanded="false"
                                                    style={{ cursor: 'pointer' }}
                                                >
                                                    <div className="avatar-header">
                                                        <img src={currentAvatar} style={{ width: '25px', height: '25px' }} />
                                                    </div>{" "}
                                                    {currentUser.fullName}
                                                </a>
                                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                                    <a className="dropdown-item" onClick={() => handleTransaction()} style={{ cursor: 'pointer' }}>
                                                        Transactions History
                                                    </a>
                                                    <a className="dropdown-item" onClick={() => navigate('/setting')} style={{ cursor: 'pointer' }}>
                                                        Settings
                                                    </a>
                                                    <a className="dropdown-item" onClick={() => handleLogout()} style={{ cursor: 'pointer' }}>
                                                        Log out
                                                    </a>
                                                </div>
                                            </li>
                                        </>
                                }

                                <li className="nav-item dropdown">
                                    <a
                                        href="#"
                                        className="nav-link dropdown-toggle"
                                        data-toggle="dropdown"
                                        aria-haspopup="true"
                                        aria-expanded="false"
                                        style={{ cursor: 'pointer' }}
                                    >
                                        <i className="fa fa-shopping-basket" />{" "}
                                        <span className="badge badge-primary">{cart.length}</span>
                                    </a>
                                    <div className="dropdown-menu shopping-cart">
                                        {
                                            cart.length == 0 ?
                                                <ul>
                                                    <li>
                                                        <div className="drop-title">No product</div>
                                                    </li>
                                                    <li style={{ textAlign: 'center' }}>
                                                        <img src="../../assets/img/favpng_shopping-cart-toddler-shopping-drawing.png" alt="" style={{ width: '34%' }} />
                                                    </li>
                                                    <li style={{ textAlign: 'center', marginTop: '10px' }}>
                                                        <a onClick={() => navigate('/shop')} className="btn btn-primary">
                                                            Goto shop
                                                        </a>
                                                    </li>
                                                </ul>
                                                :
                                                <ul>
                                                    <li>
                                                        <div className="drop-title">Your Cart</div>
                                                    </li>
                                                    <li>
                                                        <div className="shopping-cart-list">
                                                            {
                                                                cart.map((p, index) =>
                                                                    <div className="media" key={index}>
                                                                        <img
                                                                            className="d-flex mr-3"
                                                                            src={p.image}
                                                                            width={60}
                                                                            style={{ borderRadius: '2px', boder: '1px solid #bbb' }}
                                                                        />
                                                                        <div className="media-body">
                                                                            <h5>
                                                                                <a>{p.name}</a>
                                                                            </h5>
                                                                            <p className="price">
                                                                                <span className="discount text-muted">
                                                                                    {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(p.price)}
                                                                                </span>
                                                                                <span>
                                                                                    {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format((parseInt(p.price) - parseInt(p.price * p.discount / 100)) * p.qty)}
                                                                                </span>
                                                                            </p>
                                                                            <p className="text-muted">Qty: {p.qty}</p>
                                                                        </div>
                                                                    </div>
                                                                )
                                                            }
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="drop-title d-flex justify-content-between">
                                                            <span>Total:</span>
                                                            <span className="text-primary">
                                                                <strong> {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(total)}</strong>
                                                            </span>
                                                        </div>
                                                    </li>
                                                    <li className="d-flex justify-content-between pl-3 pr-3 pt-3">
                                                        <a onClick={() => navigate('/cart')} className="btn btn-default">
                                                            View Cart
                                                        </a>
                                                        <a onClick={() => handleCheckout()} className="btn btn-primary">
                                                            Checkout
                                                        </a>
                                                    </li>
                                                </ul>
                                        }

                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>

            <Outlet />

            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <h5>About</h5>
                            <p>
                                Nisi esse dolor irure dolor eiusmod ex deserunt proident cillum eu qui
                                enim occaecat sunt aliqua anim eiusmod qui ut voluptate.
                            </p>
                        </div>
                        <div className="col-md-3">
                            <h5>Links</h5>
                            <ul>
                                <li>
                                    <a onClick={() => navigate('/about')} style={{ cursor: "pointer" }}>About</a>
                                </li>
                                <li>
                                    <a onClick={() => navigate('/contact')} style={{ cursor: "pointer" }}>Contact Us</a>
                                </li>
                                <li>
                                    <a onClick={() => navigate('/faq')} style={{ cursor: "pointer" }}>FAQ</a>
                                </li>
                                <li>
                                    <a onClick={() => navigate('/term')} style={{ cursor: "pointer" }}>How it Works</a>
                                </li>
                                <li>
                                    <a onClick={() => navigate('/term')} style={{ cursor: "pointer" }}>Terms</a>
                                </li>
                                <li>
                                    <a onClick={() => navigate('/privacy')} style={{ cursor: "pointer" }}>Privacy Policy</a>
                                </li>
                                <li>
                                    <a onClick={() => handleAdmin()} style={{ cursor: "pointer", color: 'red' }}>Admin</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-3">
                            <h5>Contact</h5>
                            <ul>
                                <li>
                                    <a href="tel:+620892738334">
                                        <i className="fa fa-phone" /> 08272367238
                                    </a>
                                </li>
                                <li>
                                    <a href="mailto:hello@domain.com">
                                        <i className="fa fa-envelope" /> hello@domain.com
                                    </a>
                                </li>
                            </ul>
                            <h5>Follow Us</h5>
                            <ul className="social">
                                <li>
                                    <a href="#" target="_blank">
                                        <i className="fab fa-facebook-f" />
                                    </a>
                                </li>
                                <li>
                                    <a href="#" target="_blank">
                                        <i className="fab fa-instagram" />
                                    </a>
                                </li>
                                <li>
                                    <a href="#" target="_blank">
                                        <i className="fab fa-youtube" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-3">
                            <h5>Get Our App</h5>
                            <ul className="mb-0">
                                <li className="download-app">
                                    <a href="#">
                                        <img src="../../../assets/img/playstore.png" />
                                    </a>
                                </li>
                                <li style={{ height: 200 }}>
                                    <div className="mockup">
                                        <img src="../../../assets/img/mockup.png" />
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <p className="copyright">
                    © 2018 Freshcery | Groceries Organic Store. All rights reserved.
                </p>
            </footer>
            {/* modal admin */}
            <Modal
                title="Login Admin"
                open={open}
                onOk={hideModal}
                onCancel={hideModal}
                footer={null}
            >

                <Form name="form_item_path" layout="vertical" onFinish={onFinish} form={form}>
                    <Form.Item label="Admin" name="admin" >
                        <Input type='text' />
                    </Form.Item>
                    <Form.Item label="Password" name="password" >
                        <Input type='password' />
                    </Form.Item>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form>
            </Modal>
        </>
    )
}