function Navbar() {
  return (
    <nav className="bg-white border-b border-gray-200 px-8 py-4">
      <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-gray-900">Cardy</h2>
        <button className="bg-black text-white px-4 py-2 rounded-full text-sm font-bold hover:bg-gray-800 transition-colors">
          Cart 0
        </button>
      </div>
    </nav>
  )
}
export default Navbar