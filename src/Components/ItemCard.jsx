
import React from 'react';
import { FaPlus, FaMinus } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast';
import { removeFromCart, incrementQty, decrementQty } from '../redux/slices/CartSlice';

const ItemCard = ({ id, name, qty, price, img }) => {

  const dispatch = useDispatch();

  return (
    <div className="flex gap-2 shadow-md rounded-lg p-2 mb-3 items-center bg-white flex-wrap justify-between">
      
      {/* Left Section: Image */}
      <img src={img} alt="" className="w-[50px] h-[50px] object-cover rounded" />

      {/* Middle Section: Details */}
      <div className="flex flex-col flex-grow min-w-[120px]">
        
        <h2 className="font-bold text-sm text-gray-800 truncate max-w-[150px]">{name}</h2>
        
        <div className="flex justify-between items-center mt-1 flex-wrap gap-2">
          
          <span className="text-green-500 font-bold">₹{price}</span>
          
          {/* Quantity Controls */}
          <div className="flex items-center gap-1">
            
            <FaMinus
              onClick={() =>
                qty > 1 ? dispatch(decrementQty({ id })) : dispatch(removeFromCart({ id }))
              }
              className="border border-gray-600 text-gray-600 rounded-sm hover:text-white hover:bg-green-500 hover:border-green-700 p-1 text-base cursor-pointer"
            />

            <span className="min-w-[20px] text-center text-sm">{qty}</span>

            <FaPlus
              onClick={() => dispatch(incrementQty({ id }))}
              className="border border-gray-600 text-gray-600 rounded-sm hover:text-white hover:bg-green-500 hover:border-green-700 p-1 text-base cursor-pointer"
            />

          </div>

        </div>
      </div>

      {/* Right Section: Delete Icon */}
      <MdDelete
        onClick={() => {
          dispatch(removeFromCart({ id, img, name, price, qty }));
          toast(`${name} Removed`, { icon: '👋' });
        }}
        className="text-gray-600 cursor-pointer hover:text-red-600 text-xl self-start"
      />

    </div>
  );
};

export default ItemCard;

