import React from 'react'
import './App.css'
import productData from './products.json'

function App() {
	return (
		<div className='App'>
			<div class='header'>Список товаров</div>
			<ul class='list'>
				{productData.map((product) => {
					if (product.id < 4) {
						return <li>{product.name}</li>
					}
				})}
			</ul>
		</div>
	)
}

export default App
