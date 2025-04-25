import React, { useEffect, useState } from "react";
import CartList from "./CartList";
import axios from "axios";
import ProductList from "./ProductList";
import Navbar from "./Navbar";

const ProductCard = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [cartList, setCartList] = useState([]);
  const [showCart, setShowCart] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    document.body.style.overflow = showCart ? "hidden" : "auto";
  }, [showCart]);
  const fetchData = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      setProducts(response.data);
      setLoading(false);
    } catch (err) {
      setError(err);
      setLoading(false);
    }
  };

  const toggleCart = () => setShowCart(!showCart);

  const handleAddToCart = (product) => {
    if (cartList.find((item) => item.id === product.id)) {
      alert("Product already in cart");
      return;
    }
    setCartList((prev) => [...prev, product]);
  };

  const handleRemoveFromCart = (item) => {
    setCartList(cartList.filter((i) => i.id !== item.id));
  };

  if (loading)
    return (
      <div className="flex justify-center items-center h-screen text-3xl font-bold">
        Loading...
      </div>
    );
  if (error)
    return (
      <div className="flex justify-center items-center h-screen text-3xl font-bold">
        Error: {error.message}
      </div>
    );

  return (
    <div>
      <Navbar cartList={cartList} toggleCart={toggleCart} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 bg-amber-200">
        {products.map((product) => (
          <div key={product.id} className="bg-white p-4 rounded-md shadow-md">
            <ProductList product={product} handleAddToCart={handleAddToCart} />
          </div>
        ))}
      </div>

      {showCart && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-40 flex justify-center items-center z-50">
          <div className="bg-white w-full max-w-6xl h-screen overflow-y-auto scrollbar-hide p-4">
            <h2 className="text-2xl font-bold text-center mb-4">Your Cart</h2>
            {cartList.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {cartList.map((item) => (
                  <div
                    key={item.id}
                    className="bg-blue-200 p-4 rounded-md shadow-md"
                  >
                    <CartList
                      item={item}
                      handleRemoveFromCart={handleRemoveFromCart}
                    />
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-center text-xl">No Products Found</p>
            )}

            <div className="flex justify-center mt-4">
              <button
                className="bg-red-500 text-white px-4 py-2 rounded-md cursor-pointer"
                onClick={toggleCart}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductCard;
