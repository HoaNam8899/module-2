import React from 'react'
import { useEffect } from 'react';
import { Button, Space, Table, Tag, Modal, Form, Input } from 'antd';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
export const Order = () => {
    const dispatch = useDispatch()
    // initial users
    // lay tat ca user
    useEffect(() => {
        dispatch({ type: "GET_ALL_ORDER" });
    }, [])
    // all product
    const allOrder = useSelector(p => p.order.allOrder)
    const handleChangeOption = (e, id) => {
        dispatch({ type: 'CHANGE_STATUS', payload: [id, e.target.value] })
    }
    // ship
    const ship = 15000;
    const handleChangeQty = (e, productId, billId) => {
        console.log(e.target.value, productId, billId)
        dispatch({ type: 'CHANGE_QTY', payload: [e.target.value, productId, billId] })
    }
    return (
        <>
            {
                allOrder == undefined ? <h1>no orders</h1> :
                    allOrder.map((p, index) => <div key={index} className='container' style={{ padding: '25px 0', borderBottom: '1px solid #000' }}>
                        <div className='row'>
                            <div className="col-md-5">
                                <span>Code: {p.billId}</span>
                                <br />
                                <span>Name: {p.currentUser.fullName}</span>
                                <br />
                                <span>Address: {p.currentUser.address}</span>
                                <br />
                                <span>Phone: {p.currentUser.phone}</span>
                                <br />
                                <span>Email: {p.currentUser.email}</span>
                                <br />
                                <span>Date: {p.date}</span>
                                <br />
                                <span>Ship: {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(parseInt(ship))}</span>
                                <br />
                                <span>Total: {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(parseInt(p.total))}
                                </span>
                                <br />
                                <span>Sub total: {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(parseInt(p.total + ship))}
                                </span>
                                <br />
                                <span >
                                    <select defaultValue={p.status} style={{ width: '150px', height: '25px' }} onChange={e => handleChangeOption(e, p.billId)}>
                                        <option value="đang xử lý">Đang xử lý</option>
                                        <option value="đang giao">Đang giao </option>
                                        <option value="đã giao">Đã giao </option>
                                        <option value="hủy đơn">Hủy đơn</option>
                                    </select>
                                </span>
                                <br />
                            </div>
                            <div className="col-md-7">
                                <table border={1} cellPadding={1} cellSpacing={0} width={'100%'} style={{ textAlign: 'center' }}>
                                    <thead>
                                        <tr>
                                            <th style={{ width: '33%' }}>product</th>
                                            <th style={{ width: '33%' }}>qty</th>
                                            <th>total</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            p.cart == undefined || p.status != 'đang xử lý' ?
                                                p.cart.map((x, index) => (
                                                    <tr key={index} style={{ textAlign: 'center' }}>
                                                        <td>
                                                            <img src={x.image} alt="" style={{ width: '70px', height: '50px', objectFit: 'cover', borderRadius: '2px', margin: '5px' }} />
                                                            {x.name}
                                                        </td>
                                                        <td>
                                                            <input type="number" defaultValue={x.qty} readOnly />
                                                        </td>
                                                        <td>
                                                            {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format((parseInt(x.price) - parseInt(x.price) * parseInt(x.discount) / 100) * parseInt(x.qty))}
                                                        </td>
                                                    </tr>
                                                ))
                                                :
                                                p.cart.map((x, index) => (
                                                    <tr key={index} style={{ textAlign: 'center' }}>
                                                        <td>
                                                            <img src={x.image} alt="" style={{ width: '70px', height: '50px', objectFit: 'cover', borderRadius: '2px', margin: '5px' }} />
                                                            {x.name}
                                                        </td>
                                                        <td>
                                                            <input type="number" defaultValue={x.qty} onChange={(e) => handleChangeQty(e, x.id, p.billId)} />
                                                        </td>
                                                        <td>
                                                            {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format((parseInt(x.price) - parseInt(x.price) * parseInt(x.discount) / 100) * parseInt(x.qty))}
                                                        </td>
                                                    </tr>
                                                ))
                                        }

                                    </tbody>
                                </table >
                            </div>
                        </div>




                    </div>
                    )
            }

        </>
    )
}
/* <h2>Date:{o[index][0].date}</h2>
<h2>Total:{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(o[index][0].total)}</h2> */