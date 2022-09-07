import React from 'react';


const Item = ({item}) => {
    const {id, title, price, quantity, totalItem, plus, minus, remove} = item;


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
            <td>{totalItem}</td>
            <td><button onClick={() =>{remove(id)}}><i className="fa fa-trash"></i></button></td>
        </tr>
    )
}

export default Item