import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';

export const ItemProduct = (props) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleAddToCart = (p) => {
        p = { ...p, qty: 1 };
        dispatch({ type: 'ADD_TO_CART', payload: p });
    }
    // detail 
    const handleDetail = (id, category) => {
        if (category == 'vegetable') {
            var productD = props.vegetable.find(x => x.id == id)
        } else if (category == 'fruit') {
            var productD = props.fruit.find(x => x.id == id)
        } else if (category == 'meat') {
            var productD = props.meat.find(x => x.id == id)
        } else if (category == 'fish') {
            var productD = props.fish.find(x => x.id == id)
        } else if (category == 'frozen') {
            var productD = props.frozen.find(x => x.id == id)
        } else {
            var productD = props.packages.find(x => x.id == id)
        }
        dispatch({ type: 'PRODUCT_DETAIL', payload: productD });
        navigate('/detail');
    }
    return (
        <div className="item">
            <div className="card card-product">
                <div className="card-ribbon">
                    <div className="card-ribbon-container right">
                        <span className="ribbon ribbon-primary">SPECIAL</span>
                    </div>
                </div>
                <div className="card-badge">
                    <div className="card-badge-container left">
                        <span className="badge badge-default">Until 2024</span>
                        <span className="badge badge-primary">{props.discount}% OFF</span>
                    </div>
                    <img
                        src={props.image}
                        alt="Card image 2"
                        className="card-img-top"
                        style={{ height: '230px', objectFit: 'cover' }}
                    />
                </div>
                <div className="card-body">
                    <h4 className="card-title">
                        <a onClick={() => handleDetail(props.id, props.category)} style={{ cursor: 'pointer' }} className='edit-text'>{props.name}</a>
                    </h4>
                    <div className="card-price">
                        <span className="discount">
                            {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(props.price)}
                        </span>
                        <span className="reguler">
                            {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(parseInt(props.price) - parseInt(props.price * props.discount / 100))}
                        </span>
                    </div>
                    <a
                        onClick={() => handleAddToCart(props)}
                        className="btn btn-block btn-primary"
                    >
                        Add to Cart
                    </a>
                </div>
            </div>
        </div>
    )
}
