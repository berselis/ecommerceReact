import React from 'react'

const Search = ({ handlerSubmitByName }) => {
    return (
        <div className="col-md-12">
            <div className="product-view-top">
                <div className="row">
                    <div className="col-md-6 col-sm-8 col-xs-12">
                        <form onSubmit={handlerSubmitByName} className="product-search">
                            <input type="text" placeholder='Search...' />
                            <button type='submit'><i className="bi bi-search"></i></button>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Search