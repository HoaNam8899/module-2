import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
export const Cart = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    // cart
    const cart = useSelector(p => p.product.cart)
    // current user
    const currentUser = useSelector(u => u.user.currentUser)
    // total
    let total = cart.map(e => (parseInt(e.price) - parseInt(e.price) * parseInt(e.discount) / 100) * parseInt(e.qty)).reduce((a, b) => a + b, 0)
    // delete
    const hanldeDelete = (id) => {
        console.log("delete", id)
        dispatch({ type: "DELETE_PRODUCT_CART", payload: id })
    }
    // change qty
    const handleChangeQty = (e, id) => {
        dispatch({ type: 'CHANGE_QTY_CART', payload: [e.target.value, id] })
    }

    //
    const handleCheckout = () => {
        currentUser.length == 0 ? alert('Vui lòng đăng nhập để mua hàng') : navigate('/checkout');
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
                            <h1 className="pt-5">Your Cart</h1>
                            <p className="lead">Save time and leave the groceries to us.</p>
                        </div>
                    </div>
                </div>
                <section id="cart">
                    <div className="container">
                        <div className="row">
                            {
                                cart.length == 0
                                    ?
                                    <>
                                        <div className='col-md-12 col-sm-12'>
                                            <img src="../../assets/img/360_F_320461388_5Snqf6f2tRIqiWlaIzNWrCUm1Ocaqhfm.jpg" alt=""
                                                style={{ width: '100%', objectFit: 'cover', marginBottom: '20px' }}
                                            />
                                        </div>
                                        <div className="col">
                                            <a onClick={() => navigate('/shop')} className="btn btn-default">
                                                Continue Shopping
                                            </a>
                                        </div>

                                    </>
                                    :

                                    <>
                                        <div className="col-md-12">
                                            <div className="table-responsive">
                                                <table className="table">
                                                    <thead>
                                                        <tr>
                                                            <th width="10%" />
                                                            <th>Products</th>
                                                            <th>Price</th>
                                                            <th width="15%">Change Qty</th>
                                                            <th>Subtotal</th>
                                                            <th />
                                                        </tr>
                                                    </thead>
                                                    <tbody>

                                                        {
                                                            cart.map((p, index) =>
                                                                <tr key={index}>
                                                                    <td>
                                                                        <img src={p.image} width={60} style={{ borderRadius: '2px', border: '1px solid #bbb' }} />
                                                                    </td>
                                                                    <td>
                                                                        {p.name}
                                                                        <br />
                                                                        <small>qty: {p.qty}</small>
                                                                    </td>
                                                                    <td>
                                                                        {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format((parseInt(p.price) - parseInt(p.price * p.discount / 100)))}
                                                                        <br />
                                                                        <small>-{p.discount}%</small>
                                                                    </td>
                                                                    <td>
                                                                        <input
                                                                            className="vertical-spin"
                                                                            type="text"
                                                                            data-bts-button-down-class="btn btn-primary"
                                                                            data-bts-button-up-class="btn btn-primary"
                                                                            defaultValue=""
                                                                            name="vertical-spin"
                                                                            onChange={(e) => handleChangeQty(e, p.id)}
                                                                        />
                                                                    </td>
                                                                    <td>
                                                                        {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format((parseInt(p.price) - parseInt(p.price * p.discount / 100)) * p.qty)}
                                                                    </td>
                                                                    <td>
                                                                        <a onClick={() => hanldeDelete(p.id)} className="text-danger">
                                                                            <i className="fa fa-times" />
                                                                        </a>
                                                                    </td>
                                                                </tr>
                                                            )
                                                        }
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <a onClick={() => navigate('/shop')} className="btn btn-default">
                                                Continue Shopping
                                            </a>
                                        </div>
                                        <div className="col text-right">
                                            <div className="input-group w-50 float-right">
                                                <input
                                                    className="form-control"
                                                    placeholder="Coupon Code"
                                                    type="text"
                                                />
                                                <div className="input-group-append">
                                                    <button className="btn btn-default" type="button">
                                                        Apply
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="clearfix" />
                                            <h6 className="mt-3">
                                                {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(total)}
                                            </h6>
                                            <a onClick={() => handleCheckout()} className="btn btn-lg btn-primary">
                                                Checkout <i className="fa fa-long-arrow-right" />
                                            </a>
                                        </div>

                                    </>
                            }



                        </div>
                    </div>
                </section>
            </div>

        </>
    )
}
