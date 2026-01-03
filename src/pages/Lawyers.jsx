import React, { useContext, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { AppContext } from "../context/Context";
import { specialityData } from "../assets/assets";

const Lawyers = () => {
  const { speciality } = useParams();

  const [showFilter, setShowFilter] = useState(false);
  const navigate = useNavigate();
  const { lawyers } = useContext(AppContext);

  const filterLawyer = speciality
    ? lawyers.filter((law) => law.speciality === speciality)
    : lawyers;

  return (
    <div>
      <p className="text-gray-600">Browse through the lawyers specialist.</p>
      <div className="flex flex-col sm:flex-row items-start gap-5 mt-5">
        <div className="flex flex-col gap-4 text-sm text-gray-600">
          <button
            onClick={() => setShowFilter((prev) => !prev)}
            className={`py-1 px-3 border rounded text-sm transition-all sm:hidden ${
              showFilter ? "bg-primary text-white" : ""
            }`}
          >
            Filters
          </button>
          <div
            className={`flex-col gap-4 text-sm text-gray-600 ${
              showFilter ? "flex" : "hidden sm:flex"
            }`}
          >
            {specialityData.map((item, index) => (
              <p
                key={index}
                onClick={() =>
                  speciality === item.speciality
                    ? navigate("/lawyers")
                    : navigate(`/lawyers/${item.speciality}`)
                }
                className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-100 rounded transition-all cursor-pointer ${
                  speciality === item.speciality
                    ? "bg-indigo-100 text-black"
                    : ""
                }`}
              >
                {item.speciality}
              </p>
            ))}
          </div>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
          {filterLawyer.map((item, index) => (
            <div
              onClick={() => navigate(`/appointment/${item._id}`)}
              className="border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:-translate-y-2.5 transition-all duration-500"
              key={index}
            >
              <img className="bg-blue-50" src={item.image} alt="" />
              <div className="p-4">
                <div className="flex items-center gap-2 text-sm text-center text-green-500">
                  <p className="w-2 h-2 bg-green-500 rounded-full"></p>
                  <p>Available</p>
                </div>
                <p className="text-gray-900 text-lg font-medium">{item.name}</p>
                <p className="text-gray-600 text-sm">{item.speciality}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Lawyers;
