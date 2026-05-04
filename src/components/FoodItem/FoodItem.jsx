import React, { useContext } from "react";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../Context/StoreContext";
import { FaMinusCircle, FaPlusCircle } from "react-icons/fa";

const FoodItem = ({ image, name, price, desc, id }) => {
  const { cartItems, addToCart, removeFromCart, url, currency } =
    useContext(StoreContext);

  return (
    <div className="group bg-white rounded-xl overflow-hidden shadow-[0_24px_48px_-12px_rgba(0,0,0,0.04)] hover:shadow-[0_32px_64px_-16px_rgba(0,0,0,0.08)] transition-all duration-500 border border-zinc-100 flex flex-col">
      {/* Imagen */}
      <div className="aspect-[4/3] overflow-hidden">
        <img
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          src={image}
          alt={name}
        />
      </div>

      {/* Info */}
      <div className="p-2.5 sm:p-4 md:p-5 flex flex-col flex-1">
        {/* Nombre + Rating */}
        <div className="flex justify-between items-start mb-1.5 gap-1">
          <h3 className="text-sm sm:text-base font-bold text-zinc-800 leading-snug line-clamp-1">
            {name}
          </h3>
          <div className="flex items-center shrink-0 ml-1">
            <img
              src={assets.rating_starts}
              alt="rating"
              className="w-10 sm:w-12 md:w-14"
            />
          </div>
        </div>

        {/* Descripción */}
        <p className="text-xs text-zinc-500 mb-3 line-clamp-2 leading-relaxed flex-1">
          {desc}
        </p>

        {/* Precio + Acción */}
        <div className="flex justify-between items-center gap-2 mt-auto">
          <span className="text-base sm:text-lg font-bold text-zinc-800 shrink-0">
            {currency}
            {price}
          </span>

          {!cartItems[id] ? (
            <button
              onClick={() => addToCart(id)}
              className="bg-black text-white px-2.5 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs font-semibold tracking-wide hover:bg-zinc-800 active:scale-95 transition-all cursor-pointer whitespace-nowrap"
            >
              Add +
            </button>
          ) : (
            <div className="flex items-center bg-zinc-100 rounded-full px-1.5 py-1">
              <button
                onClick={() => removeFromCart(id)}
                className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center hover:bg-white rounded-full transition-colors cursor-pointer touch-manipulation"
              >
                <FaMinusCircle size={15} color="#f44336" />
              </button>
              <span className="px-1.5 sm:px-2 text-xs font-bold text-zinc-800 min-w-[18px] text-center">
                {cartItems[id]}
              </span>
              <button
                onClick={() => addToCart(id)}
                className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center hover:bg-white rounded-full transition-colors cursor-pointer touch-manipulation"
              >
                <FaPlusCircle size={15} color="#8bc34a" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FoodItem;
