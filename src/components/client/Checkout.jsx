import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
export const Checkout = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    // cart
    const cart = useSelector(p => p.product.cart)
    // current user
    const currentUser = useSelector(u => u.user.currentUser)
    const [changeInfo, setChangeInfo] = useState(currentUser)
    // ship 
    const ship = 15000;

    // total
    let total = cart.map(e => (parseInt(e.price) - parseInt(e.price) * parseInt(e.discount) / 100) * parseInt(e.qty)).reduce((a, b) => a + b, 0)
    // proceed
    const handleProceed = () => {
        if (changeInfo.fullName == undefined || changeInfo.address == undefined || changeInfo.phone == undefined) {
            confirm('Vui lòng cập nhật thông tin khách hàng')
        } else {
            dispatch({ type: 'USER_ORDER', payload: [currentUser.id, changeInfo] })
            navigate('/transaction')
        }
    }
    // update
    const handleUpdate = () => {
        if (currentUser.fullName != changeInfo.fullName || currentUser.address != changeInfo.address || currentUser.email != changeInfo.email || currentUser.phone != changeInfo.phone) {
            dispatch({ type: "UPDATE_USER_FROM_CHECKOUT", payload: changeInfo })
        }
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
                            <h1 className="pt-5">Checkout</h1>
                            <p className="lead">Save time and leave the groceries to us.</p>
                        </div>
                    </div>
                </div>

                <section id="checkout">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12 col-sm-7">
                                <h5 className="mb-3">BILLING DETAILS</h5>
                                {/* Bill Detail of the Page */}
                                <form action="#" className="bill-detail">
                                    <fieldset>
                                        <div className="form-group row">
                                            <div className="col">
                                                <input
                                                    className="form-control"
                                                    placeholder="Name"
                                                    type="text"
                                                    defaultValue={currentUser.fullName}
                                                    onChange={(e) => setChangeInfo({ ...changeInfo, fullName: e.target.value })}
                                                />
                                            </div>

                                        </div>
                                        <div className="form-group">
                                            <textarea
                                                className="form-control"
                                                placeholder="Address"
                                                defaultValue={currentUser.address}
                                                onChange={(e) => setChangeInfo({ ...changeInfo, address: e.target.value })}
                                            />
                                        </div>
                                        <div className="form-group row">
                                            <div className="col">
                                                <input
                                                    className="form-control"
                                                    placeholder="Email Address"
                                                    type="email"
                                                    defaultValue={currentUser.email}
                                                    onChange={(e) => setChangeInfo({ ...changeInfo, email: e.target.value })}
                                                />
                                            </div>
                                            <div className="col">
                                                <input
                                                    className="form-control"
                                                    placeholder="Phone Number"
                                                    type="tel"
                                                    defaultValue={currentUser.phone}
                                                    onChange={(e) => setChangeInfo({ ...changeInfo, phone: e.target.value })}
                                                />
                                            </div>
                                        </div>

                                    </fieldset>
                                </form>
                                <a onClick={() => handleUpdate()} className="btn btn-primary float-right">
                                    Update
                                </a>
                                {/* Bill Detail of the Page end */}
                            </div>
                            <div className="col-xs-12 col-sm-5">
                                <div className="holder">
                                    <h5 className="mb-3">YOUR ORDER</h5>
                                    <div className="table-responsive">

                                        <table className="table">
                                            <thead>
                                                <tr>
                                                    <th>Products</th>
                                                    <th className="text-right">Subtotal</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    cart.map((p, index) =>
                                                        <tr key={index}>
                                                            <td>{p.name} x{p.qty}</td>
                                                            <td className="text-right">
                                                                {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format((parseInt(p.price) - parseInt(p.price * p.discount / 100)) * p.qty)}
                                                            </td>
                                                        </tr>
                                                    )
                                                }
                                            </tbody>
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <strong>Cart Subtotal</strong>
                                                    </td>
                                                    <td className="text-right">
                                                        {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(total)}
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <strong>Shipping</strong>
                                                    </td>
                                                    <td className="text-right">
                                                        {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(ship)}
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <strong>ORDER TOTAL</strong>
                                                    </td>
                                                    <td className="text-right">
                                                        <strong>{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(total + ship)}</strong>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <h5 className="mb-3">PAYMENT METHODS</h5>
                                    <div className="form-check-inline">
                                        <label className="form-check-label">
                                            <input
                                                className="form-check-input"
                                                type="radio"
                                                name="exampleRadios"
                                                id="exampleRadios1"
                                                defaultValue="option1"
                                                defaultChecked=""
                                            />
                                            Direct Bank Transfer
                                        </label>
                                    </div>
                                    <div className="form-check-inline">
                                        <label className="form-check-label">
                                            <input
                                                className="form-check-input"
                                                type="radio"
                                                name="exampleRadios"
                                                id="exampleRadios2"
                                                defaultValue="option2"
                                            />
                                            Credit Card
                                        </label>
                                    </div>
                                </div>
                                <p className="text-right mt-3">
                                    <input defaultChecked="" type="checkbox" /> I’ve read &amp; accept
                                    the <a href="#">terms &amp; conditions</a>
                                </p>
                                <a onClick={() => handleProceed()} className="btn btn-primary float-right">
                                    PROCEED TO CHECKOUT <i className="fa fa-check" />
                                </a>
                                <div className="clearfix"></div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

        </>
    )
}
