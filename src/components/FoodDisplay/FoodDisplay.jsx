import React, { useContext } from "react";
import FoodItem from "../FoodItem/FoodItem";
import { StoreContext } from "../../Context/StoreContext";

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);

  return (
    <div className="mt-8 pb-20 px-4 md:px-10" id="food-display">
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-800 mb-10">
        Top dishes near you
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
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
