import React from 'react'
import productData from './products.json'

function productList() {
	return (
		<ul class='list'>
			{productData.map((product) => {
				return <li>{product.name}</li>
			})}
		</ul>
	)
}

export default productList
