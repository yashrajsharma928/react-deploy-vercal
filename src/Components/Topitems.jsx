import React, { useContext } from "react";
import { data } from "../data/data.jsx";
import { Context } from "../MainContext";

const Topitems = () => {
  const { cart } = useContext(Context);
  const item_ids = [3,5,8,10,12,15,21,25];
  const lists = data.filter((item) => item_ids.includes(item.id));
  console.log(lists);
  return (
    <div> <div className=" items-center justify-center text-center p-2">
          <h1 className="text-orange-600 font-bold text-4xl text-center my-1">
            Top Rated Salling  Items !
          </h1> 

        </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 p-4">
       
        {lists.map((item, index) => (
            <div
              key={index}
              className=" shadow-lg hover:scale-105 duration-300 rounded-[10px] "
            >
              <img
                className="w-full h-[200px] object-cover rounded-[10px]"
                src={item.image}
                alt={item.name}
              />
              <div className="flex justify-between px-2 py-4">
                <p className="font-bold w-[80px]">{item.name}</p>
                <p>
                <span
  onClick={() =>
    CartBtnHandler(
      item.id,
      item.price,
      cart.some((cartItem) => cartItem.id === item.id) ? 1 : 0
    )
  }
  className="bg-orange-500 text-white text-sm sm:text-base text-[8px] p-1 sm:p-2 rounded cursor-pointer hover:bg-orange-600 transition duration-300"
>
  {cart.some((cartItem) => cartItem.id === item.id)
    ? 'Remove From Cart'
    : 'Add To Cart'}
</span>
                </p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Topitems;
