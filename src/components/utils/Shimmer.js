import React from 'react'
import { logo } from '../../contants/keys';

const Shimmer = () => {
  return (
    <div className="max-w-md mx-auto bg-white rounded overflow-hidden shadow-md">
      <img
        className="w-full h-48 object-cover"
        src={logo}
        alt="Card "></img>
      
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">SkySense</h2>
        <p className="text-gray-600">weather app </p>
        
      </div>
    </div>
  )
}

export default Shimmer;
