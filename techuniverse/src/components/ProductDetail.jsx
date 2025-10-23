import { NavLink, useParams } from "react-router-dom";

function ProductDetail({ products }) {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) return <p className="text-center mt-10 text-gray-200">Prodotto non trovato</p>;

  return (
    <div className="bg-gradient-to-r from-indigo-600 to-purple-600 min-h-screen px-4 sm:px-6 py-12 flex justify-center">
      <div className="w-full max-w-3xl">
        <NavLink to="/productList" className="text-white font-semibold hover:underline block mb-4 sm:mb-6">
          ← Torna alla lista prodotti
        </NavLink>

        <div className="flex flex-col md:flex-row bg-white rounded-2xl shadow-lg overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full md:w-1/2 h-64 sm:h-72 md:h-80 lg:h-96 object-contain"
          />

          <div className="p-4 sm:p-6 flex flex-col justify-between">
            <div>
              <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800">{product.name}</h1>
              <p className="text-gray-500 mt-2 text-sm sm:text-base">{product.description}</p>

              {product.onSale && (
                <span className="inline-block mt-4 px-3 py-1 bg-red-500 text-white rounded-full text-xs sm:text-sm font-semibold">
                  In offerta
                </span>
              )}
            </div>

            <div className="mt-4">
              <p className="text-lg sm:text-xl md:text-2xl font-bold text-blue-600">€ {product.price.toFixed(2)}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
