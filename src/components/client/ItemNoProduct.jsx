import React from 'react'

export const ItemNoProduct = () => {
    return (
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

    )
}
