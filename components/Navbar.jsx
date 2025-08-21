
const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-6 md:px-16 lg:px-32 py-3 border-b border-gray-300 text-gray-700">
      <a href="/" className="aguafina-script-regular text-2xl">M.9-SHOP</a>
      <div className="flex items-center gap-6 hover:text-black">
        <a href="/">Home</a>
        <a href="/all-products">Shop</a>
        <a href="/">About Us</a>
        <a href="/">Contact</a>
        <button className="flex border border-gray-300 shadow-2xl text-[12px] rounded-4xl px-2 cursor-pointer">Seller Dashboard</button>
      </div>
      <div>
        <button className="cursor-pointer"><i className='bx  bx-user'  ></i> Account </button>
      </div>
    </nav>   
  )
}

export default Navbar
