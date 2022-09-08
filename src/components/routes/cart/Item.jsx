import React, { useState } from 'react';


const Item = ({ item }) => {
    const { id, title, price, quantity, totalItem, plus, minus, remove } = item;
    let [cant, setCant] = useState(quantity);

    const handlePlus = (id) => {
        cant++
        setCant(cant);
        const obj = {
            id: id,
            newQuantity: cant
        }
        plus(obj)
    }

    const handleMinus = (id) => {
        cant--
        if (cant <= 0) cant = 1;
        setCant(cant);
        const obj = {
            id: id,
            newQuantity: cant
        }
        minus(obj);

    }
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
                    <button onClick={() => { handleMinus(id) }} className="btn-minus"><i className="fa fa-minus"></i></button>
                    <input type="text" value={cant} readOnly />
                    <button onClick={() => { handlePlus(id) }} className="btn-plus"><i className="fa fa-plus"></i></button>
                </div>
            </td>
            <td>{totalItem}</td>
            <td><button onClick={() => { remove(id) }}><i className="fa fa-trash"></i></button></td>
        </tr>
    )
}

export default Item