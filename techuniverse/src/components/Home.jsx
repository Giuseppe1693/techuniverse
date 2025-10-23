import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="w-full min-h-screen bg-gradient-to-r from-indigo-600 to-purple-600 text-white flex items-center">
      <div className="max-w-4xl mx-auto text-center px-4 py-10 md:py-0">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold leading-tight">
          I migliori prodotti solo da noi!
        </h1>

        <p className="mt-6 text-base sm:text-lg md:text-xl text-indigo-100 px-2">
          Qualità, innovazione e convenienza in un unico posto.
        </p>

        <Link
          to="/productList"
          className="mt-10 inline-block bg-yellow-400 text-gray-900 font-bold py-3 px-8 rounded-lg text-lg hover:bg-yellow-300 transition"
        >
          Scopri i prodotti
        </Link>
      </div>
    </section>
  );
}

export default Home;
