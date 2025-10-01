import Product from "./Product";

function ProductList({ products, addBtn }) {
  return (
    <div className="bg-gradient-to-r from-indigo-600 to-purple-600 min-h-screen px-6 py-10">
      <h2 className="text-2xl font-bold text-white mb-6">Lista Prodotti</h2>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products.map((product) => (
          <Product key={product.id} product={product} addBtn={addBtn} />
        ))}
      </div>
    </div>
  );
}

export default ProductList;
