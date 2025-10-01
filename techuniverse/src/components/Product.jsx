import { Link } from "react-router-dom";

function Product({ product, addBtn }) {
  const onSale = product.onSale;
  const price = product.price.toFixed(2);
  const originalPrice = onSale ? (product.price * 1.2).toFixed(2) : null;

  return (
    <div className="relative bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow flex flex-col">
      {onSale && (
        <span className="absolute top-2 right-2 px-3 py-1 bg-red-500 text-white rounded-full text-xs font-semibold z-10">
          In offerta
        </span>
      )}
      <Link to={`/product/${product.id}`}>
        <img src={product.image} alt={product.name} className="w-full h-48 object-contain" />
      </Link>
      <div className="p-4 flex flex-col justify-between flex-1">
        <div>
          <h2 className="text-lg font-semibold text-gray-800">{product.name}</h2>
          <p className="text-sm text-gray-600 mt-1 line-clamp-2">{product.description}</p>
        </div>
        <div className="mt-3">
          {onSale ? (
            <div className="flex items-center space-x-2">
              <span className="text-gray-400 line-through">€ {originalPrice}</span>
              <span className="text-lg font-bold text-indigo-600">€ {price}</span>
            </div>
          ) : (
            <span className="text-lg font-bold text-indigo-600">€ {price}</span>
          )}
        </div>
        <div className="mt-4 flex items-center justify-between">
          <button
            onClick={() => addBtn(product)}
            className="py-1 px-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            Aggiungi
          </button>
        </div>
      </div>
    </div>
  );
}

export default Product;
