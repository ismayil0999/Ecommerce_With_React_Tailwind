import React, { useState } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { logout } from '../redux/data';
const ExitPopup = () => {
  const [isOpen, setIsOpen] = useState(true);
  const popup=useSelector(state=>state.contact.popup)
  const dispatch=useDispatch()
  const handleClosePopup = () => {
    setIsOpen(false);
  };

  return (
    <>
      {popup === true ? 
        <div className="fixed inset-0 flex items-center z-[1000] justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-white rounded-lg p-8 w-[300px]">
            <h2 className="text-2xl font-bold mb-4">Are you sure logout?</h2>
            <div className="flex justify-end">
              <button
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                onClick={()=>{dispatch(logout())}}
              >
                Log Out
              </button>
              <button
                className="px-4 py-2 bg-gray-300 text-gray-700 rounded ml-2 hover:bg-gray-400"
                onClick={handleClosePopup}
              >
                Cancel
              </button>
            </div>
          </div>
        </div> : null
      }
    </>
  );
};

export default ExitPopup;