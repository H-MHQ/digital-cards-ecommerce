function ProductCard({ product }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
      
      {/* Placeholder Image Area */}
      <div className="h-48 bg-gray-200 flex items-center justify-center">
        <span className="text-gray-500 font-medium">{product.platform}</span>
      </div>

      {/* Card Content */}
      <div className="p-5">
        <h2 className="text-lg font-bold text-gray-800 mb-1">{product.name}</h2>
        <p className="text-sm text-gray-500 mb-4 line-clamp-2">{product.description}</p>
        
        <div className="flex items-center justify-between mt-auto">
          <span className="text-xl font-black text-gray-900">${product.price}</span>
          <button className="bg-black text-white px-4 py-2 rounded-full text-sm font-bold hover:bg-gray-800 transition-colors">
            Add to Cart
          </button>
        </div>
      </div>

    </div>
  )
}
export default ProductCard
