function Cart({cartItems , removeFromCart, updateQuantity}) {
// Calculate the total price of items in the cart
const totalPrice = cartItems.reduce((total, item) => total + (parseFloat(item.price) * item.quantity), 0);    return (
        <div className="bg-white p-8 rounded-2xl shadow-sm">
            <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
            {cartItems.length === 0 ? (
      <p className="text-gray-600">Your cart is currently empty.</p>
  ) : (
      <div className="space-y-4 mt-6">
          {/* Loop through the cartItems array */}
          {cartItems.map((item, index) => (
<div key={index} className="flex justify-between items-center border-b border-gray-100 pb-4">
                  
                  {/* 1. Left Side: Name and Platform */}
                  <div className="w-1/3">
                      <h3 className="font-bold text-gray-800">{item.name}</h3>
                      <p className="text-sm text-gray-500">{item.platform}</p>
                  </div>

                  {/* 2. Middle: Quantity Controls (+ / -) */}
                  <div className="flex items-center space-x-3 bg-gray-50 rounded-full px-3 py-1 border border-gray-200">
                      <button 
                          onClick={() => updateQuantity(item.id, 'decrease')} 
                          className="text-gray-500 hover:text-black font-bold px-2"
                      >
                          -
                      </button>
                      <span className="font-bold text-gray-900">{item.quantity}</span>
                      <button 
                          onClick={() => updateQuantity(item.id, 'increase')} 
                          className="text-gray-500 hover:text-black font-bold px-2"
                      >
                          +
                      </button>
                  </div>

                  {/* 3. Right Side: Price and Remove Button */}
                  <div className="text-right w-1/3 flex flex-col items-end">
                      <span className="font-black text-gray-900 text-lg block">
                          ${(parseFloat(item.price) * item.quantity).toFixed(2)}
                      </span>
<button 
    onClick={() => removeFromCart(item.id)} 
    className="flex items-center gap-1 text-gray-400 hover:text-red-500 bg-gray-50 hover:bg-red-50 px-2 py-1 rounded-md transition-all duration-200 mt-2"
>
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
    </svg>
    <span className="text-xs font-semibold">Remove</span>
</button>
                  </div>

              </div>
          ))}
          <div className="border-t border-gray-200 mt-8 pt-6 flex justify-between items-center">
          <span className="text-xl font-bold text-gray-800">Total:</span>
          <span className="text-3xl font-black text-gray-900">${totalPrice.toFixed(2)}</span>
      </div>
      <button className="w-full mt-6 bg-black text-white py-3 px-4 rounded-xl font-bold text-lg hover:bg-gray-800 transition-colors shadow-sm">
          Proceed to Checkout
      </button>
      </div>
  )}
        </div>
    );
}
export default Cart;