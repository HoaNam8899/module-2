import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
export const Transaction = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const ship = 15000;
    // current user
    // const currentUser = useSelector(u => u.user.currentUser)
    // orders
    const [orderDetail, setOrderDetail] = useState({})
    const orders = useSelector(o => o.product.orders)
    // console.log(orders)
    const handleDetail = (index) => {
        setOrderDetail(orders[index])
    }
    return (
        <><div id="page-content" className="page-content">
            <div className="banner">
                <div
                    className="jumbotron jumbotron-bg text-center rounded-0"
                    style={{ backgroundImage: 'url("../../../assets/img/bg-header.jpg")' }}
                >
                    <div className="container">
                        <h1 className="pt-5">Your Transactions</h1>
                        <p className="lead">Save time and leave the groceries to us.</p>
                    </div>
                </div>
            </div>
            <section id="cart">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="table-responsive">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th width="5%" />
                                            <th>Invoice</th>
                                            <th>Date</th>
                                            <th>Total</th>
                                            <th>Status</th>
                                            <th />
                                        </tr>
                                    </thead>
                                    {
                                        orders.length == 0 ?
                                            <tbody></tbody> :
                                            orders.map((p, index) =>
                                                <tbody key={index}>
                                                    <tr>
                                                        <td>{index + 1}</td>
                                                        <td>{p.billId}</td>
                                                        <td>{p.date}</td>
                                                        <td>
                                                            {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(parseInt(p.total + ship))}
                                                        </td>
                                                        <td>{p.status}</td>
                                                        <td>
                                                            <button
                                                                type="button"
                                                                className="btn btn-default btn-sm"
                                                                data-toggle="modal"
                                                                data-target="#detailModal"
                                                                onClick={() => handleDetail(index)}
                                                            >
                                                                Detail
                                                            </button>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            )
                                    }
                                </table>
                            </div>
                            <nav aria-label="Page navigation">
                                <ul className="pagination justify-content-center">
                                    <li className="page-item">
                                        <a className="page-link" href="#">
                                            Previous
                                        </a>
                                    </li>
                                    <li className="page-item">
                                        <a className="page-link" href="#">
                                            1
                                        </a>
                                    </li>
                                    <li className="page-item">
                                        <a className="page-link" href="#">
                                            2
                                        </a>
                                    </li>
                                    <li className="page-item">
                                        <a className="page-link" href="#">
                                            3
                                        </a>
                                    </li>
                                    <li className="page-item">
                                        <a className="page-link" href="#">
                                            Next
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </section>
            {/* Modal */}
            <div
                className="modal fade"
                id="detailModal"
                tabIndex={-1}
                role="dialog"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-lg" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">
                                Code: {orderDetail.billId == undefined ? '' : orderDetail.billId}
                            </h5>
                            <button
                                type="button"
                                className="close"
                                data-dismiss="modal"
                                aria-label="Close"
                            >
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="row">
                                <div className="col-md-6">
                                    <p>
                                        <strong>Billing Detail:</strong>
                                        <br />
                                        {orderDetail.currentUser == undefined ? '' : orderDetail.currentUser.fullName}
                                        <br />
                                        {orderDetail.currentUser == undefined ? '' : orderDetail.currentUser.address}
                                        <br />
                                        {orderDetail.currentUser == undefined ? '' : orderDetail.currentUser.phone}
                                        <br />
                                        {orderDetail.currentUser == undefined ? '' : orderDetail.currentUser.email}
                                    </p>
                                </div>
                                <div className="col-md-6">
                                    <p>
                                        <strong>Order date:</strong>
                                        <br />
                                        {
                                            orderDetail.date == undefined ? '' : orderDetail.date
                                        }
                                    </p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <p>
                                        <strong>Your Order:</strong>
                                    </p>
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
                                                    orderDetail.cart == undefined ?
                                                        <tr></tr> :
                                                        orderDetail.cart.map((p, index) =>
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
                                                        {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(parseInt(orderDetail.total))}
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <strong>Shipping</strong>
                                                    </td>
                                                    <td className="text-right">{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(15000)}</td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <strong>ORDER TOTAL</strong>
                                                    </td>
                                                    <td className="text-right">
                                                        <strong>
                                                            {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(parseInt(orderDetail.total) + 15000)}
                                                        </strong>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-default"
                                data-dismiss="modal"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
