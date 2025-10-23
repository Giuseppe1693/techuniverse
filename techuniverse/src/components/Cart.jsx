function Cart({ cart = [], removeFromCart, total = 0, clearCart }) {
  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-600 to-purple-600 px-4 sm:px-6 py-12">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-extrabold text-white mb-8 border-b-2 border-gray-300 pb-4 text-center md:text-left">
          Carrello
        </h2>

        {cart.length === 0 ? (
          <p className="text-white text-lg text-center mt-12">Il carrello è vuoto</p>
        ) : (
          <>
            <div className="space-y-6">
              {cart.map(({ product, quantity }) => (
                <div
                  key={product.id}
                  className="flex flex-col md:flex-row justify-between items-start md:items-center bg-gradient-to-r from-white to-gray-50 p-5 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex flex-col mb-4 md:mb-0">
                    <p className="font-semibold text-gray-800 text-lg">
                      {product.name} {quantity > 1 && `(${quantity})`}
                    </p>
                    <p className="text-gray-500 text-base mt-1">€ {(product.price * quantity).toFixed(2)}</p>
                  </div>

                  <button
                    onClick={() => removeFromCart(product.id)}
                    className="py-2 px-4 w-full md:w-auto bg-red-500 text-white font-semibold rounded-xl hover:bg-red-600 transition duration-300"
                  >
                    Rimuovi
                  </button>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="w-full md:w-auto">
                <button
                  onClick={clearCart}
                  className="w-full md:w-auto py-2 px-6 bg-yellow-400 text-gray-900 font-bold rounded-xl hover:bg-yellow-300 transition duration-300"
                >
                  Svuota carrello
                </button>
              </div>

              <div className="flex flex-col md:flex-row md:items-center md:space-x-6 text-center md:text-right">
                <p className="text-2xl font-bold text-white">Totale:</p>
                <p className="text-2xl font-bold text-white">€ {total.toFixed(2)}</p>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Cart;
