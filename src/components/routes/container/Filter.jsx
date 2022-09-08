import React from 'react'

const Filter = ({ handleFilter }) => {
    return (
        <div className="sidebar-widget category">
            <h2 className="title">Product</h2>
            <div className="product-price-range">
                <select onChange={handleFilter} className='select-price-range'>
                    <option value={'ALL'}>-Price range-</option>
                    <option data-min='0' data-max='500' value={'filter'}> 0 to 500</option>
                    <option data-min='501' data-max='1000' value={'filter'}> 501 to 1000</option>
                    <option data-min='1001' value={'up'}> 1001 to up</option>
                </select>
            </div>
        </div>
    )
}

export default Filter