import { NavLink, useParams } from "react-router-dom";

function ProductDetail({ products }) {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) return <p className="text-center mt-10 text-gray-200">Prodotto non trovato</p>;

  return (
    <div className="bg-gradient-to-r from-indigo-600 to-purple-600 min-h-screen px-6 py-12">
      <NavLink to="/productList" className="text-white font-semibold hover:underline transition-colors">
        Torna alla lista prodotti
      </NavLink>

      <div className="flex flex-col md:flex-row bg-white rounded-2xl shadow-lg overflow-hidden mt-6">
        <img src={product.image} alt={product.name} className="w-full md:w-1/2 h-96 object-contain" />
        <div className="p-8 flex flex-col justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">{product.name}</h1>
            <p className="text-gray-500 mt-2">{product.description}</p>
            {product.onSale && (
              <span className="inline-block mt-4 px-3 py-1 bg-red-500 text-white rounded-full text-sm font-semibold">
                In offerta
              </span>
            )}
          </div>
          <div className="mt-6 flex items-center justify-between">
            <p className="text-2xl font-bold text-blue-600">€ {product.price.toFixed(2)}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
