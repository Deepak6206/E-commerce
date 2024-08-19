import React from "react";

function CartNumbers() {
	const cartNumbers = {
		subtotal: 1599.0,
		shipping: 40.0,
		tax: 287.82,
		total: 1926.82,
	};
	const items = [
		{ title: "Subtotal", price: cartNumbers.subtotal },
		{ title: "Shipping", price: cartNumbers.shipping },
		{ title: "tax", price: cartNumbers.tax },
		{ title: "Total (INR)", price: cartNumbers.total },
	];
	return (
		<div id="cart-numbers">
			<ul className="list-group mb-3">
				{items.map((item) => {
					return (
						<li className="list-group-item d-flex justify-content-between">
							<span>{item.title}</span>
							<span className="text-muted">{item.price}</span>
						</li>
					);
				})}
			</ul>
		</div>
	);
}

export default CartNumbers;
