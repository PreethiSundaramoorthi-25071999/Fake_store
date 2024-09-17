const CartModal = ({cartItems, removeFromCart, closeModal}) => {
    return (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
           <div className="bg-white p-6 rounded-lg">
               <h2 className="font-bold text-lg mb-4">Cart Items</h2>
               {cartItems.length === 0 ? (
                  <p>Your cart is empty</p>
               ) : (
                  <div>
                     {cartItems.map((item) => (
                        <div key={item.id} className = "flex justify-between mb-4">
                           <span>{item.title}</span>

                           <button
                              onClick={() => removeFromCart(item.id)}
                              className="bg-red-900 text-white px-2 py-1 rounded"
                           >   
                           Remove 
                           </button>
                        </div>
                     ))}
                  </div>
               )}
               <button onClick={closeModal} className="mt-4 bg-rose-500 text-white px-8 py-2 rounded-lg">
                  Close
               </button>
           </div>
        </div>
    )
}

export default CartModal

//hi
//bye