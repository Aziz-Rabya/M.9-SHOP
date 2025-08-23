
const Navbar = () => {

  return (
    <nav className="flex items-center justify-between px-6 md:px-16 lg:px-32 py-3 border-b border-gray-300 text-gray-700">
       <a href="/" className="aguafina-script-regular text-2xl">M.9-SHOP</a>
       <div className="flex relative gap-6">
          <a href="/" className="hover:text-black">Home</a>
          <a href="/" className="hover:text-black">Shop</a>
          <a href="#" className="hover:text-black">About us</a>
          <a href="#" className="hover:text-black">Contact</a>
          <button className="text-[12px] border border-gray-200 shadow-2xl rounded-2xl px-3 py-1.5 cursor-pointer hover:text-black">Seller dashboard</button>
       </div>
        <div>
            <button className="cursor-pointer"><i className='bx  bx-user'  ></i> Account</button>
        </div>
    </nav>
  );
};

export default Navbar;