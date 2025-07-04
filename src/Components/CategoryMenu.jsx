import React, { useEffect, useState } from 'react';
import FoodData from "../Data/FoodData";
import { useDispatch,useSelector } from 'react-redux';
import { setCategory } from '../redux/slices/CategorySlice';


const CategoryMenu = () => {

    const [categories, setCategories] = useState ([]);

    const listUniqueCategories = () =>{
      const uniqueCategories = [
        ...new Set(FoodData.map((food)=>food.category)),
      ];
      setCategories (uniqueCategories);
      console.log(uniqueCategories);  ['Lunch','Breakfast','Dinner','Snacks']
    };

    useEffect (()=>{
      listUniqueCategories();
    },[]);

    const dispatch = useDispatch();
    const selectedCategory = useSelector ((state)=> state.category.category);

  return (
    <div className='ml-6' >
       

        <h3 className="text-xl font-bold text-gray-700 pl-3 ">Find the Best Food</h3>

        <div className='my-5 flex gap-3 overflow-x-scroll scroll-smooth
        lg:overflow-x-hidden'>

            <button 
              onClick={()=> dispatch(setCategory("All"))}
              className={`px-4 py-2 bg-amber-100 text-amber-700 font-semibold rounded-xl border border-amber-300 shadow-sm 
              hover:bg-green-500 hover:text-white hover:border-green-600 hover:shadow-md transition-all duration-300
              ${selectedCategory === "All" && "bg-green-500 text-white" }`}>
             All
            </button>


          {categories.map((category, index)=>{
            return(
              <button 
              onClick={()=> dispatch(setCategory(category))}
              key={index}
              className={`px-4 py-2 bg-amber-100 text-amber-700 font-semibold rounded-xl border border-amber-300 shadow-sm 
              hover:bg-green-500 hover:text-white hover:border-green-600 hover:shadow-md transition-all duration-300
              ${selectedCategory === category && "bg-green-500 text-white"}`}>
             {category}
         </button>
            );
          })}
        
        </div>

    </div>
  )
}

export default CategoryMenu

