"use client";
import { FiShoppingCart } from "react-icons/fi";
import { useAddToCart } from "@/hooks/useAddToCart";
function Cart({ children }) {
	const cartItems = useAddToCart((state) => state.cart);
	return (
		<figure className="flex gap-x-0.5 cursor-pointer">
			<FiShoppingCart className="w-6 h-6" />
			<figcaption className=" -mt-2 bg-green-500 w-5 h-5  p-1 rounded-full flex justify-center items-center ">
				<p className="text-[11px] font-medium  text-green-100">{cartItems}</p>
			</figcaption>
		</figure>
	);
}

export { Cart };
