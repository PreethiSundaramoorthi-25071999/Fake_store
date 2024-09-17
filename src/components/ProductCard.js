const ProductCard = ({product, addToCart, cartItems}) => {

    const isIncart = cartItems.some((item) => item.id === product.id);
    
    const handleAddToCart = () => {
        if(isIncart){
            alert("item is already added to the cart")
        } else {
            addToCart(product)
        }
    }

    return (
        <div className = "border p-12 rounded-lg">
           <img src={product.image} alt={product.title} className="h-28 mx-auto" />
           <h2 className="font-bold text-lg">{product.title}</h2>
           <p className="text-sky-950 font-bold">${product.price}</p>
           <button
               onClick={handleAddToCart}
               className={`mt-2 px-4 py-2 ${isIncart ? 'bg-lime-400' : 'bg-green-500'} text-black`}      
               disabled = {isIncart}
           >
           {isIncart ? 'In cart' : 'Add To cart'}
           </button>
        </div>
    )
}
export default ProductCard