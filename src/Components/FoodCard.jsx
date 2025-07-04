import React from 'react';
import { IoIosStar } from "react-icons/io";
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/slices/CartSlice';


const FoodCard = ({id,name,price,rating,desc,img ,handleToast}) => {

  const dispatch = useDispatch();


  return (
    
<div className="w-[240px] bg-gray-100 p-5 flex flex-col rounded-xl gap-3 shadow-md
       hover:shadow-2xl hover:scale-[1.03] transition-all duration-500 ease-in-out font-bold">

  
        <img 
            src={img}
            alt="" 
            className="w-full h-[130px] object-cover rounded-lg hover:scale-105 cursor-grab transition-all duration-500 ease-in-out"
        />

        
        <div className="text-sm flex justify-between items-center">
            <h2 className="text-gray-800">{name}</h2>
            <span className="text-green-600 font-semibold">₹{price}</span>
        </div>

        
        <p className="text-sm font-normal text-gray-600">
           {desc.slice(0,50)}...
        </p>

        
        <div className="flex justify-between items-center">
            <span className="flex items-center text-gray-700">
            <IoIosStar className="mr-1 text-yellow-500" /> {rating}
            </span>
            <button onClick={()=>{
              dispatch(addToCart({id,name,price,img,rating,qty:1}));
              handleToast(name);
            }}
            className="px-3 py-1 bg-green-500 hover:bg-green-600 text-white rounded-lg text-sm 
                shadow hover:shadow-lg transition-all duration-300 ease-in-out">
            Add to Cart
            </button>
        </div>

</div>

        
    

  )
}

export default FoodCard