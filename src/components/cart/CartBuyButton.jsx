import React from "react";

function CartBuyButton() {
	const buy = () => {
		alert("Button clicked");
	};
	return (
		<button
			onClick={buy}
			className="btn btn-success d-block w-100 fw-bold mt-3"
		>
			Buy Now
		</button>
	);
}

export default CartBuyButton;
