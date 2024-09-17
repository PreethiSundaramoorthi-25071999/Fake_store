const Navbar = ({cartCount, openCart}) => {
    return(
        <nav className="bg-rose-300	 p-6 text-black flex justify-between">
            <h1 className="text-3xl font-bold left-1/2 relative">Products</h1>
            <button onClick={openCart} className = "relative right-20 bg-sky-300 text-black mt-2 px-8 py-2 rounded-lg">
                Cart {cartCount} 
            </button>
        </nav>
    )
}
export default Navbar