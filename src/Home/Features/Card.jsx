import React from 'react';

const Card = ({cardImage , cardTitle , cardDesc}) => {
    return (
        <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white border border-gray-200">
  <img
    className="w-full h-48 object-cover"
    src={cardImage}
    alt="Card Image"
  />
  <div className="p-5">
    <h3 className="text-2xl font-semibold text-gray-900 mb-2">
      {cardTitle}
    </h3>
    <p className="text-gray-700 text-sm">
      {cardDesc}
    </p>
  </div>
</div>
    );
};

export default Card;