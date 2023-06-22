import React, { useState } from 'react';
import { CloseOutlined } from '@mui/icons-material';

const MyCards = () => {
  const [cards, setCards] = useState([
    {
      id: 1,
      name: 'John Doe',
      number: '**** **** **** 1234',
      expiration: '12/23',
    },
    {
      id: 2,
      name: 'Jane Smith',
      number: '**** **** **** 5678',
      expiration: '06/24',
    },
  ]);

  const handleDeleteCard = (id) => {
    setCards(cards.filter((card) => card.id !== id));
  };

  return (
    <div className="w-full">
      <h2 className="text-2xl font-semibold mb-4">My Cards</h2>
     <div className='flex gap-[30px]'>
     {cards.length===0 ? <h3>No cards yet!</h3> : cards.map((card) => (
        <div
          key={card.id}
          className="flex items-center justify-between bg-white p-4 rounded shadow mb-4"
        >
          <div>
            <p className="font-semibold">{card.name}</p>
            <p className="text-gray-500">{card.number}</p>
            <p className="text-gray-500">{card.expiration}</p>
          </div>
          <button
            className="text-red-600 hover:text-red-800"
            onClick={() => handleDeleteCard(card.id)}
          >
            <CloseOutlined className="h-5 w-5" />
          </button>
        </div>
      ))}
        </div>
    </div>
  );
};

export default MyCards;