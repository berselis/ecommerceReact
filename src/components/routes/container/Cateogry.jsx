import React from 'react'

const Cateogry = ({ handlerQuerybyPrice, categorys }) => {
    return (
        <div className="sidebar-widget category">
            <h2 className="title">Category</h2>
            <nav className="navbar bg-light">
                <ul onClick={handlerQuerybyPrice} className="navbar-nav">
                    <a data-category='ALL' className="nav-link" href="#"><i className="bi bi-caret-right-fill"></i>All products</a>
                    {
                        categorys.map(categ => (
                            <li className="nav-item" key={categ.id}>
                                <a data-category={categ.name} className="nav-link" href="#"><i className="bi bi-caret-right-fill"></i>{categ.name}</a>
                            </li>
                        ))
                    }

                </ul>
            </nav>
        </div>
    )
}

export default Cateogry