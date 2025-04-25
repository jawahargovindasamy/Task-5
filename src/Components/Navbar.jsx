import React from "react";
import { FaShoppingCart } from "react-icons/fa";

const Navbar = ({ cartList, toggleCart }) => {
  return (
    <nav className="bg-amber-300 text-white p-4 pr-6 md:pr-10 flex justify-between items-center">
      <h1 className="text-xl md:text-2xl font-bold">Product List</h1>
      <button className="cursor-pointer relative" onClick={toggleCart}>
        <FaShoppingCart className="text-xl md:text-2xl" />
        <span className="absolute flex justify-center items-center -top-2 -right-2 text-red-600 bg-white rounded-full w-4 h-4 text-xs">
          {cartList.length}
        </span>
      </button>
    </nav>
  );
};

export default Navbar;
