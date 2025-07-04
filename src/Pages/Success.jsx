
import { IoCheckmarkCircleOutline } from 'react-icons/io5';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { PropagateLoader } from 'react-spinners';
import { useEffect, useState } from 'react';



const Success = () => {

  const [loading, setLoading] = useState(true);
  useEffect (()=>{
    setTimeout(()=>{
      setLoading(false);
      
    },3000);
  },[]);


  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-amber-50 p-4">

      {loading ? (<PropagateLoader color="#22c55e" size={24} />):(

     <div>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 100, damping: 10 }}
          className="bg-white shadow-xl rounded-2xl p-8 flex flex-col items-center gap-4 border border-gray-200"
        >
          <IoCheckmarkCircleOutline className="text-7xl text-green-500 animate-bounce" />
          
          <h2 className="text-2xl font-bold text-gray-700">Order Successful! <span className="text-amber-500">😊</span></h2>
          
          <p className="text-gray-600 text-center max-w-sm">
            Your order has been successfully placed. Thank you for choosing us!
          </p>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-4 px-6 py-2 bg-amber-400 text-gray-800 font-semibold rounded-lg shadow hover:bg-amber-500 transition"
            onClick={() => navigate('/')}
          >
            Go to Home
          </motion.button>
        </motion.div>
      </div>
     )}
      
    </div>
  );
};

export default Success;


