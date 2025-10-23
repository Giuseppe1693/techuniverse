import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

function Navigation({ cartCount }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md relative">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* LOGO */}
        <Link to="/" className="text-xl font-bold">
          TechUniverse
        </Link>

        {/* HAMBURGER - mobile */}
        <button className="md:hidden text-white text-2xl z-20" onClick={() => setIsOpen(!isOpen)}>
          ☰
        </button>

        {/* MENU DESKTOP */}
        <div className="hidden md:flex ml-auto items-center space-x-6">
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

      {/* MENU MOBILE */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-gradient-to-r from-indigo-600 to-purple-600 transition-all overflow-hidden ${
          isOpen ? "max-h-screen py-4" : "max-h-0"
        }`}
      >
        <div className="flex flex-col items-center space-y-3">
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `text-white font-semibold hover:text-yellow-200 transition ${
                isActive ? "underline underline-offset-4" : ""
              }`
            }
            onClick={() => setIsOpen(false)}
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
            onClick={() => setIsOpen(false)}
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
            onClick={() => setIsOpen(false)}
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
    </nav>
  );
}

export default Navigation;
