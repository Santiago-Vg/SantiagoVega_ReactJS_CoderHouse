import React from 'react'

function ItemListContainer( {greeting} ) {
    return (
        <div className="item-list-container">
            <p>{greeting}</p>
        </div>
    )
}

export default ItemListContainer