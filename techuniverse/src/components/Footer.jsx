import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-400 py-8">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 gap-6 justify-items-center">
        {/* Sezione Info */}
        <div className="text-center sm:text-left">
          <h3 className="text-white text-lg font-semibold mb-3">TechUniverse</h3>
          <p className="text-sm md:text-base">
            La tua destinazione per prodotti di qualità, innovazione e convenienza.
          </p>
        </div>

        {/* Contatti */}
        <div className="text-center sm:text-left">
          <h3 className="text-white text-lg font-semibold mb-3">Contatti</h3>
          <p className="text-sm md:text-base">Email: battigiuseppe6@gmail.com</p>
          <p className="text-sm md:text-base">Telefono: 388-4538689</p>
          <p className="text-sm md:text-base">
            GitHub:{" "}
            <a href="https://github.com/giuseppe1693" className="hover:text-blue-400" target="_blank" rel="noreferrer">
              giuseppe1693
            </a>
          </p>
        </div>
      </div>

      <div className="mt-8 border-t pt-3 text-center text-sm md:text-base">
        © {new Date().getFullYear()} TechUniverse. Tutti i diritti riservati.
      </div>
    </footer>
  );
}

export default Footer;
