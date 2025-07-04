import React ,{useState} from 'react'
import { IoClose } from "react-icons/io5";
import ItemCard from './ItemCard';
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';


const Cart = () => {

  const [activeCart, setActiveCart] = useState(false);

  const cartItems = useSelector((state) => state.cart.cart);
  const totalQty = cartItems.reduce
    ((totalQty , item)=> totalQty + item.qty , 0);

  const totalPrice = cartItems.reduce
  ((total , item) => total +item.qty *item.price ,0);
  
  const navigate = useNavigate();
  
  return (
<>
    <div className={`fixed right-0 top-0 w-full lg:w-[20vw] h-full 
    p-5 bg-amber-100 flex flex-col border-l-2 border-amber-200
    ${
      activeCart ? "translate-x-0" : "translate-x-full"
    } transition-all duration-500 z-50`}>


        <div className='flex justify-between items-center mb-4 rounded-lg shadow-lg p-3 bg-amber-200'>
          <span className='text-xl font-bold text-gray-800 transform transition duration-300 hover:scale-110 hover:text-amber-800 animate-slideDown'>My Order</span>
          <IoClose onClick={()=> setActiveCart(!activeCart)}
          className='border-2 border-gray-600 text-gray-600 font-bold p-1 text-2xl rounded-md hover:text-white hover:bg-red-500 hover:border-red-800 cursor-pointer' />
        </div>
    

      
      <div className='flex-grow overflow-y-auto'>
        
        { cartItems.length>0 ?
          cartItems.map((food)=>{
            return(
              <ItemCard 
              key={food.id}
              id={food.id}
              name ={food.name}
              price ={food.price}
              img = {food.img}
              qty = {food.qty}
              />
            )
          }):<h2 className='text-center text-xl 
          font-bold text-gray-800'>Your Cart is Empty</h2>
        }


      </div>

      
      <div className='p-3 rounded-lg shadow-lg'>
        <h3 className='font-semibold text-gray-800 mb-1'>Total Items: {totalQty} <span className='font-normal'></span></h3>
        <h3 className='font-semibold text-gray-800 mb-2'>Total Amount:{totalPrice} <span className='font-normal'></span></h3>
        <hr className='w-full my-2 border-gray-400' />
        <button 
        onClick={()=>navigate("/success")}
        className='bg-green-500 font-bold px-3 text-white py-2 rounded-lg w-full hover:bg-green-600'>
          Checkout
        </button>
      </div>

    </div>

    <FaShoppingCart 
     onClick={() => setActiveCart(!activeCart)}
      className={`rounded-full bg-orange-300 shadow-md cursor-pointer hover:bg-amber-500  text-5xl p-3 fixed bottom-4 right-4 
       ${totalQty > 0 && "animate-bounce delay-500 transition-all"}`} />

</>

  )
}

export default Cart