function Navbar() {
  return (
    <nav className="bg-slate-950/80 backdrop-blur-md sticky top-0 z-50 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className='flex items-center justify-between py-5'>
            <a href="#" className="bg-blue-600 text-white w-12 h-12 rounded-xl flex items-center justify-center font-bold text-xl shadow-lg shadow-blue-500/30 ">
          CC
        </a>
        <ul className="flex items-center text-white gap-8">
          <li className="hover:text-blue-500 border-b-2 border-blue-500 pb-1"><a href="#" className="hover:text-blue-500">Home</a></li>
          <li className="hover:text-blue-500 transition-all duration-300 cursor-pointer border-b-2 border-blue-500 pb-1"><a href="#" className="hover:text-blue-500">Rates</a></li>
          <li className="hover:text-blue-500 transition-all duration-300 cursor-pointer border-b-2 border-blue-500 pb-1"><a href="#" className="hover:text-blue-500">Charts</a></li>
          <li className="hover:text-blue-500 transition-all duration-300 cursor-pointer border-b-2 border-blue-500 pb-1"><a href="#" className="hover:text-blue-500">Features</a></li>
          <li className="hover:text-blue-500 transition-all duration-300 cursor-pointer border-b-2 border-blue-500 pb-1"><a href="#" className="hover:text-blue-500">About</a></li>
        </ul>
        <button className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition-all duration-300">
            Convert Now
        </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
