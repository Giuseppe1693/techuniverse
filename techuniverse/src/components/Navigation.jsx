import { Link, NavLink } from "react-router-dom";

function Navigation({ cartCount }) {
  return (
    <nav className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="text-xl font-bold">
          TechUniverse
        </Link>
        <div className="flex items-center space-x-6">
          <div className="relative space-x-4">
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `text-white font-semibold hover:text-yellow-200 transition ${
                  isActive ? "underline underline-offset-4" : ""
                }`
              }
            >
              Chi siamo
            </NavLink>
            <NavLink
              to="/productList"
              className={({ isActive }) =>
                `text-white font-semibold hover:text-yellow-200 transition ${
                  isActive ? "underline underline-offset-4" : ""
                }`
              }
            >
              Prodotti
            </NavLink>
            <NavLink
              to="/cart"
              className={({ isActive }) =>
                `relative text-white font-semibold hover:text-yellow-200 transition ${
                  isActive ? "underline underline-offset-4" : ""
                }`
              }
            >
              Carrello
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-3 w-5 h-5 bg-yellow-100 text-gray-800 text-xs font-bold flex items-center justify-center rounded-full">
                  {cartCount}
                </span>
              )}
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
