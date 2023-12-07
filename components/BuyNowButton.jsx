function BuyNow({ priceId}) {
    return (
    <form
    action="/api/checkout"
    method="POST"
    >
    <input
    type="hidden"
    name="id"
    value="id"
    />
    {/* ADD THE PRICE ID TO THE HIDDEN FIELD */}
    <input
    type="hidden"
    name="price"
    value={priceId}
    />
    <button
    type="submit"
    value="submit"
    className="p-4 my-4 text-sm font-semibold text-white rounded-md shadow-sm md:text-lg bg-gradient-to-l hover:bg-gradient-to-r hover:from-yellow-400 hover:to-orange-400 from-red-500 to-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
    >
    Buy Now
    </button>
    </form>
    );
    }
    export { BuyNow }