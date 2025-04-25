import React from "react";

const CartList = ({ item, handleRemoveFromCart }) => {
  return (
    <>
      <img src={item.image} alt={item.title} className="h-64 w-full object-contain" />
      <div>
        <h2 className="text-lg font-semibold line-clamp-1">{item.title}</h2>
        <p className="text-gray-500 text-sm line-clamp-3 my-2">{item.description}</p>
        <div className="flex justify-between items-center">
          <p className="text-base font-bold mt-2">${item.price}</p>
          <button
            onClick={() => handleRemoveFromCart(item)}
            className="bg-red-400 hover:bg-red-500 cursor-pointer text-white py-1 px-3 rounded-md text-sm"
          >
            Remove
          </button>
        </div>
      </div>
    </>
  );
};

export default CartList;
