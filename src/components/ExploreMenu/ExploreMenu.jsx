import React, { useContext } from "react";
import { StoreContext } from "../../Context/StoreContext";

const ExploreMenu = ({ category, setCategory }) => {
  const { menu_list } = useContext(StoreContext);

  return (
    <div
      className="flex flex-col gap-4 py-10 md:py-20 px-4 md:px-10 items-center"
      id="explore-menu"
    >
      {/* Header Section */}
      <div className="w-full max-w-3xl mb-2 md:mb-4 mx-auto text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-zinc-800 mb-3 md:mb-4">
          Explore our menu
        </h1>
        <p className="text-sm sm:text-base md:text-lg text-zinc-500 leading-relaxed">
          Choose from a diverse menu featuring a delectable array of dishes. Our
          mission is to satisfy your cravings and elevate your dining
          experience, one delicious meal at a time.
        </p>
      </div>

      {/* Scrollable Menu Categories */}
      <div className="flex overflow-x-auto gap-4 sm:gap-6 md:gap-8 pb-4 w-full md:justify-center [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] px-2">
        {menu_list.map((item, index) => (
          <div
            onClick={() =>
              setCategory((prev) =>
                prev === item.menu_name ? "All" : item.menu_name,
              )
            }
            key={index}
            className="flex flex-col items-center gap-2 md:gap-3 group cursor-pointer shrink-0"
          >
            <div
              className={`w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-2 transition-all duration-300 shadow-sm
                ${
                  category === item.menu_name
                    ? "border-orange-500 ring-2 ring-orange-300"
                    : "border-transparent group-hover:border-orange-400"
                }`}
            >
              <img
                src={item.menu_image}
                alt={item.menu_name}
                className="w-full h-full object-cover"
              />
            </div>
            <p
              className={`text-xs sm:text-sm font-semibold tracking-wide transition-colors duration-200 text-center max-w-[70px] sm:max-w-none
                ${
                  category === item.menu_name
                    ? "text-orange-600 font-bold"
                    : "text-zinc-700"
                }`}
            >
              {item.menu_name}
            </p>
          </div>
        ))}
      </div>

      <hr className="mt-2 border-none h-[2px] bg-zinc-200 w-full" />
    </div>
  );
};

export default ExploreMenu;
