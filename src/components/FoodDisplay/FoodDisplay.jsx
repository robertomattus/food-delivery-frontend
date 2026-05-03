import React, { useContext } from "react";
import FoodItem from "../FoodItem/FoodItem";
import { StoreContext } from "../../Context/StoreContext";

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);

  return (
    <div
      className="mt-6 md:mt-8 pb-12 md:pb-20 px-4 md:px-10"
      id="food-display"
    >
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-zinc-800 mb-6 md:mb-10">
        Top dishes near you
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4 md:gap-6">
        {food_list.map((item) => {
          if (category === "All" || category === item.category) {
            return (
              <FoodItem
                key={item._id}
                image={item.image}
                name={item.name}
                desc={item.description}
                price={item.price}
                id={item._id}
              />
            );
          }
        })}
      </div>
    </div>
  );
};

export default FoodDisplay;
