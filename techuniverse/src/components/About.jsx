function About() {
  return (
    <section className="min-h-screen bg-gradient-to-r from-indigo-600 to-purple-600 text-white flex items-center">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6">Chi Siamo</h1>
        <p className="text-lg md:text-xl text-indigo-100 mb-8">
          TechUniverse è la tua destinazione per prodotti di alta qualità, innovativi e a prezzi competitivi. La nostra
          missione è offrire un'esperienza di acquisto semplice, affidabile e conveniente per tutti i nostri clienti.
        </p>

        {/* Bottone per andare ai prodotti */}
        <a
          href="/productList"
          className="inline-block bg-yellow-400 text-gray-900 font-bold py-3 px-8 rounded-lg text-lg hover:bg-yellow-300 transition"
        >
          Scopri i nostri prodotti
        </a>
      </div>
    </section>
  );
}

export default About;
