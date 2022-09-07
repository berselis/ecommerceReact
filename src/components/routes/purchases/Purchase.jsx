import React from 'react';


const Purchase = ({ row, handleShowModal }) => {
    const { index, date, totalItem, amount, products } = row;
    return (

        <tr>
            <td>{index}</td>
            <td>{date}</td>
            <td>{totalItem}</td>
            <td>{amount}</td>
            <td>
                <button onClick={() => { handleShowModal(products, index) }} className='btn cart'>
                    <i className="bi bi-eye-fill"></i>
                    <span>Items</span>
                </button>
            </td>
        </tr>



    )
}

export default Purchase