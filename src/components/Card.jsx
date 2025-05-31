import React from "react";
import imageSource from "../assets/coding_1329016.png";

function Card({ header, description, image }) {
  return (
    <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm">
      <img src={image} className="w-20 h-20" />
      <h5 className="mt-4 mb-2 text-xl font-bold tracking-tight text-gray-800">
        {header}
      </h5>
      <p className="mb-3 font-inter text-gray-700">{description}</p>
    </div>
  );
}

export default Card;
