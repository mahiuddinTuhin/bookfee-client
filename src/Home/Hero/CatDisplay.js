import React from "react";
import { NavLink } from "react-router-dom";

const CatDisplay = ({ cat }) => {
  return (
    <NavLink to={`/category/${cat?.cat_id}`} className="">
      <div className="flex justify-center items-center">
        <div
          className="rounded-md shadow-lg flex flex-col justify-between w-72 sm:w-96 h-96 bg-white bg-center text-white   overflow-hidden cursor-pointer bg-cover"
          style={{
            backgroundImage: `url(${cat && cat?.cat_img})`,
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="flex justify-between items-center ml-4 pr-8">
            <div className="bg-red-600 text-white bg-opacity-95 shadow px-2 py-1 flex items-center font-bold text-xs rounded">
              Get more details
            </div>
            <div className="bg-red-600 w-10 h-12 shadow flex flex-col-reverse p-2 text-center font-bold text-white rounded-b-full">
              %
            </div>
          </div>
          <div className="bg-white text-gray-800 bg-opacity-95 shadow-md rounded-r-xl p-4 flex flex-col mr-4 mb-8">
            <h3 className="text-xl font-bold pb-2">{cat?.title}</h3>
            <p className="truncate  text-sm">
              Nowruz is the Persian New Year, which begins on the Spring
              equinox, marking the first day of Farvardin, the first month of
              the Iranian solar calendar.
            </p>
            <div className="flex justify-between items-center">
              <span className=" text-xs">Have a nice year...</span>
            </div>
          </div>
        </div>
      </div>
    </NavLink>
  );
};

export default CatDisplay;
