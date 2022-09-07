import React from 'react';


const Item = ({title, price, quantity, total}) => {
    return (
        <tr>
            <td>
                <div className="img">
                    <p>{title}</p>
                </div>
            </td>
            <td>{`$ ${price}`}</td>
            <td>
                <div className="qty">
                    <button className="btn-minus"><i className="fa fa-minus"></i></button>
                    <input type="text" value={quantity} readOnly />
                    <button className="btn-plus"><i className="fa fa-plus"></i></button>
                </div>
            </td>
            <td>{total}</td>
            <td><button><i className="fa fa-trash"></i></button></td>
        </tr>
    )
}

export default Item