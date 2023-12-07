"use client";
import { useAddToCart } from "@/hooks/useAddToCart";
import { cn } from "@/lib/utils/mergeCss";

function AddToCart({ className, label }) {
	const addToCart = useAddToCart((state) => state.addToCart);
	const cartItems = useAddToCart((state) => state.cart);
	function handleClick(e) {
		addToCart();
	}

	return (
		<button className={cn(" ", className)} onClick={handleClick} type="button" value="button">
			{label}
		</button>
	);
}

export { AddToCart };
