import React from 'react';

const ProductInfoCircle = ({ positionClass, circleSize = 'w-32 h-32', innerCircleSize = 'w-3/4 h-3/4' }) => {
  return (
    <div className={`absolute ${positionClass} bg-[#e3e3e33a] border-white rounded-full ${circleSize} flex items-center justify-center`}>
      <div className={`bg-white rounded-full ${innerCircleSize}`} />
    </div>
  );
};

export default ProductInfoCircle;
