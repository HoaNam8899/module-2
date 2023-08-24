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

    // search
    const [selected, setSelected] = useState()
    const handleSelect = (e) => {
        setSelected(e.target.value)
    }
    const handleSearch = (e) => {
        if (e.target.value == '') {
            dispatch({ type: 'GET_ALL_ORDER' })
        } else {
            if (selected == 'fullName') {
                var resultSearch = [...allOrder].filter(x => toSlug(x.currentUser.fullName).indexOf(toSlug(e.target.value)) >= 0)
            } else if (selected == 'phone') {
                var resultSearch = [...allOrder].filter(x => toSlug(x.currentUser.phone).indexOf(toSlug(e.target.value)) >= 0)
            } else if (selected == 'email') {
                var resultSearch = [...allOrder].filter(x => toSlug(x.currentUser.email).indexOf(toSlug(e.target.value)) >= 0)
            } else if (selected == 'address') {
                var resultSearch = [...allOrder].filter(x => toSlug(x.currentUser.address).indexOf(toSlug(e.target.value)) >= 0)
            } else if (selected == 'date') {
                var resultSearch = [...allOrder].filter(x => x.date.split(' ')[1].indexOf(e.target.value) >= 0)
            }
            else {
                dispatch({ type: 'GET_ALL_ORDER' })
            }
            dispatch({ type: 'SEARCH_ORDER', payload: resultSearch })
        }
    }

    // compare vn string
    function toSlug(str) {
        // Chuyển hết sang chữ thường
        str = str.toLowerCase();
        // xóa dấu
        str = str
            .normalize('NFD') // chuyển chuỗi sang unicode tổ hợp
            .replace(/[\u0300-\u036f]/g, ''); // xóa các ký tự dấu sau khi tách tổ hợp
        // Thay ký tự đĐ
        str = str.replace(/[đĐ]/g, 'd');
        // Xóa ký tự đặc biệt
        str = str.replace(/([^0-9a-z-\s])/g, '');
        // Xóa khoảng trắng thay bằng ký tự -
        str = str.replace(/(\s+)/g, '-');
        // Xóa ký tự - liên tiếp
        str = str.replace(/-+/g, '-');
        // xóa phần dư - ở đầu & cuối
        str = str.replace(/^-+|-+$/g, '');
        // return
        return str;
    }
    return (
        <>
            <div style={{ paddingBottom: '25px', borderBottom: '1px solid #000' }}>

                <span style={{ margin: '0 10px 0 20px' }}>Search by: </span>
                <select
                    style={{
                        width: '120px',
                        height: '36px',
                        borderRadius: '4px'
                    }}
                    onChange={(value) => handleSelect(value)}
                >
                    <option value="" selected disabled hidden >Choose</option>
                    <option value="non" >Non</option>
                    <option value="fullName">fullname</option>
                    <option value="phone">phone</option>
                    <option value="email">email</option>
                    <option value="address">address</option>
                    <option value="date">date</option>
                </select>
                {
                    selected == 'non' ? <input type="text" onChange={e => handleSearch(e)} style={{ margin: '0 0 0 10px' }} placeholder='non...' readOnly />
                        :
                        <input type="text" onChange={e => handleSearch(e)} style={{ margin: '0 0 0 10px' }} placeholder='type here...' />
                }
            </div>


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