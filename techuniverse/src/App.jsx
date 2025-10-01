import { Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import ProductList from "./components/ProductList";
import ProductDetail from "./components/ProductDetail";
import Cart from "./components/Cart";
import { useState } from "react";
import Footer from "./components/Footer";
import About from "./components/About";

function App() {
  const products = [
    {
      id: 1,
      name: "MacBook Pro 16''",
      description: "Notebook con M1 Pro, 16GB RAM, 512GB SSD",
      price: 2499.99,
      image: "https://m.media-amazon.com/images/I/41uhQ9P0UvL.jpg",
      onSale: true,
    },
    {
      id: 2,
      name: "iPhone 15",
      description: "Display Super Retina XDR 6.7'' con doppia fotocamera",
      price: 1199.99,
      image: "https://m.media-amazon.com/images/I/712Pyq1hPfL._UF1000,1000_QL80_.jpg",
      onSale: false,
    },
    {
      id: 3,
      name: "AirPods Max",
      description: "Cuffie over-ear con cancellazione del rumore",
      price: 599.99,
      image:
        "https://www.backmarket.it/cdn-cgi/image/format%3Dauto%2Cquality%3D75%2Cwidth%3D260/https://d2e6ccujb3mkqf.cloudfront.net/3a208c4f-ae10-413e-998c-e335bcd6ba61-1_1300cdc1-95e7-44a6-8a25-a711f143d3d4.jpg",
      onSale: true,
    },
    {
      id: 4,
      name: "Apple Watch Series 9",
      description: "Monitoraggio attività, cardiofrequenzimetro e notifiche smart",
      price: 449.99,
      image: "https://m.media-amazon.com/images/I/71ABtqvzVKL._UF1000,1000_QL80_.jpg",
      onSale: true,
    },
    {
      id: 5,
      name: "iPad Air",
      description: "Display Retina 10.9'' con chip M1 e 64GB memoria",
      price: 699.99,
      image: "https://m.media-amazon.com/images/I/71ARVqo4J2L._UF1000,1000_QL80_.jpg",
      onSale: false,
    },
    {
      id: 6,
      name: "Magic Keyboard",
      description: "Tastiera wireless retroilluminata per iPad e Mac",
      price: 199.99,
      image: "https://static.comet.it/b2c/public/e-cat/APL039967/APL039967-a255ea397c-0.jpg",
      onSale: false,
    },
    {
      id: 7,
      name: "HomePod Mini",
      description: "Smart speaker con audio stereo e compatibilità Siri",
      price: 99.99,
      image:
        "https://www.apple.com/newsroom/images/2024/07/apple-introduces-homepod-mini-in-midnight/tile/Apple-HomePod-mini-midnight-lp.jpg.news_app_ed.jpg",
      onSale: false,
    },
    {
      id: 8,
      name: "Apple TV 4K",
      description: "Streaming video in 4K HDR con telecomando Siri Remote",
      price: 179.99,
      image:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/refurb-apple-tv-4k-2022?wid=4000&hei=4000&fmt=jpeg&qlt=90&.v=1675454573354",
      onSale: true,
    },
    {
      id: 9,
      name: "iMac 24''",
      description: "Computer desktop con chip M1 e display Retina 4.5K",
      price: 1399.99,
      image: "https://www.fcf.it/62443-home_default/apple-imac-24-m4-cpu-8-coreram-16gbssd-256gb.jpg",
      onSale: true,
    },
    {
      id: 10,
      name: "AirTag",
      description: "Dispositivo per localizzare oggetti tramite iPhone",
      price: 29.99,
      image:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/airtag-double-select-202104_FMT_WHH?wid=2000&hei=2000&fmt=jpeg&qlt=90&.v=aUZiM0Z1TmxieDdSR0Z6RU5uemRuOHVJWlMva2FYSFVWb3Q4TXJyVGJVY2VnSEp2SE4xaUJuS0VhaWlSWW9obFBJSEI4eEprQ3k5NVh3Y3BXYkFrUFNsZGR5cUwzMzFEcGtUWTFWWHlHNDhsZjhjS2U1N1RFQ3VYKzBrK3l5TkI",
      onSale: false,
    },
    {
      id: 11,
      name: "iPhone SE",
      description: "Smartphone compatto con chip A15 Bionic",
      price: 499.99,
      image:
        "https://www.apple.com/newsroom/images/product/iphone/standard/Apple_new-iphone-se-white_04152020_big.jpg.large.jpg",
      onSale: true,
    },
    {
      id: 12,
      name: "Mac Mini",
      description: "Computer compatto con chip M2, 256GB SSD",
      price: 699.99,
      image: "https://www.notebookcheck.it/fileadmin/_processed_/5/e/csm_IMG_7625_d5ec5f95a9.jpg",
      onSale: false,
    },
    {
      id: 13,
      name: "Magic Mouse",
      description: "Mouse wireless Apple con design ergonomico",
      price: 79.99,
      image: "https://m.media-amazon.com/images/I/51utTTF3AYL.jpg",
      onSale: false,
    },
    {
      id: 14,
      name: "Magic Trackpad",
      description: "Trackpad wireless Apple con Multi-Touch",
      price: 129.99,
      image:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MXKA3?wid=1200&hei=630&fmt=jpeg&qlt=95&.v=1730508286011",
      onSale: true,
    },
    {
      id: 15,
      name: "Apple Pencil",
      description: "Stilo per iPad di seconda generazione",
      price: 129.99,
      image: "https://adlstoretelefonia.com/cdn/shop/files/83279DB1-0FD4-4CFE-B463-0945C454115A.jpg?v=1712205134",
      onSale: false,
    },
    {
      id: 16,
      name: "iPad Pro 12.9''",
      description: "Tablet professionale con chip M2 e display Liquid Retina XDR",
      price: 1299.99,
      image:
        "https://cdn.alloallo.media/catalog/product/apple/ipad/ipad-pro-12-9-in-4e-generation/ipad-pro-12-9-in-4e-generation-silver.jpg",
      onSale: true,
    },
    {
      id: 17,
      name: "Beats Studio Buds",
      description: "Auricolari wireless con cancellazione rumore attiva",
      price: 149.99,
      image:
        "https://www.beatsbydre.com/content/dam/beats/web/product/earbuds/studio-buds-plus/global/serp/studiobudsplus-pdp-global-serp-transparent.jpg",
      onSale: false,
    },
    {
      id: 18,
      name: "iPhone 14 Pro",
      description: "Smartphone con display Super Retina XDR 6.1'' e fotocamera Pro",
      price: 1099.99,
      image: "https://files.refurbed.com/ii/iphone-14-pro-1662623063.jpg",
      onSale: true,
    },
    {
      id: 19,
      name: "AirPods Pro",
      description: "Auricolari wireless con cancellazione attiva del rumore",
      price: 249.99,
      image: "https://m.media-amazon.com/images/I/51R8U4qEfAL.jpg",
      onSale: true,
    },
    {
      id: 20,
      name: "Apple Watch SE",
      description: "Smartwatch con monitoraggio salute e sport",
      price: 299.99,
      image: "https://m.media-amazon.com/images/I/61X+VUhO-LL._UF1000,1000_QL80_.jpg",
      onSale: false,
    },
  ];
  const [cart, setCart] = useState([]);

  const addBtn = (product) => {
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.product.id === product.id);
      if (existing) {
        return prevCart.map((item) =>
          item.product.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCart, { product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.product.id !== id));
  };

  const clearCart = () => {
    setCart([]);
  };

  const total = cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

  return (
    <div className="flex flex-col min-h-screen">
      <Navigation cartCount={cart.length} />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/productList" element={<ProductList products={products} addBtn={addBtn} />} />
          <Route
            path="/cart"
            element={<Cart cart={cart} removeFromCart={removeFromCart} clearCart={clearCart} total={total} />}
          />
          <Route path="/about" element={<About />} />
          <Route path="/product/:id" element={<ProductDetail products={products} addBtn={addBtn} />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
