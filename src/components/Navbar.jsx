import React, { useState } from "react";
import { assets } from "../assets/assets";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const [token, setToken] = useState(true);
  const [showProfile, setShowProfile] = useState(false);

  return (
    <div className="flex justify-between items-center text-sm mb-5 border-b border-b-gray-400">
      <img
        onClick={() => navigate("/")}
        className="w-40 cursor-pointer"
        src={assets.logo}
        alt="Logo"
      />
      <ul className=" hidden md:flex items-start gap-5 font-medium">
        <NavLink to="/">
          <li className="py-1">Home</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
        </NavLink>
        <NavLink to="/lawyers">
          <li className="py-1">All Lawyers</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
        </NavLink>
        <NavLink to="/about">
          <li className="py-1">About</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
        </NavLink>
        <NavLink to="/contact">
          <li className="py-1">Contact</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
        </NavLink>
      </ul>
      <div className="flex items-center gap-2">
        {token ? (
          <div className="flex items-center gap-2 relative">
            <img
              onClick={() => setShowProfile((prev) => !prev)}
              className="w-8 rounded-full cursor-pointer"
              src={assets.profile_pic}
              alt=""
            />
            <img
              onClick={() => setShowProfile((prev) => !prev)}
              className="w-2.5 cursor-pointer"
              src={assets.dropdown_icon}
              alt=""
            />
            <div
              className={`absolute top-12 right-0 w-48 text-base font-medium z-20 text-gray-600 ${
                showProfile ? "block" : "hidden"
              } rounded-md shadow-lg rounded-b-2xl`}
            >
              <div className="pb-2 ">
                <ul className="flex flex-col gap-2 p-3 min-w-48 bg-white rounded-xl shadow-xl border border-gray-100">
                  <li
                    onClick={() => {
                      navigate("/my-profile");
                      setShowProfile(false);
                    }}
                    className="px-4 py-2 hover:bg-primary/10 rounded-lg cursor-pointer text-gray-700 hover:text-black transition-colors"
                  >
                    My Profile
                  </li>
                  <li
                    onClick={() => {
                      navigate("/my-appointment");
                      setShowProfile(false);
                    }}
                    className="px-4 py-2 hover:bg-primary/10 rounded-lg cursor-pointer text-gray-700 hover:text-black transition-colors"
                  >
                    My Appointment
                  </li>
                  <li
                    onClick={() => setToken(false)}
                    className="px-4 py-2 hover:bg-primary/10 rounded-lg cursor-pointer text-gray-700 hover:text-black transition-colors"
                  >
                    Logout
                  </li>
                </ul>
              </div>
            </div>
          </div>
        ) : (
          <button
            className="bg-primary text-white px-4 py-2 rounded-full font-light hidden md:block"
            onClick={() => navigate("/login")}
          >
            Create Account
          </button>
        )}
        <img
          onClick={() => setShowMenu(true)}
          className="w-6 md:hidden"
          src={assets.menu_icon}
          alt=""
        />
        {/* ---- Mobile Menu ---- */}
        <div
          className={` ${
            showMenu ? "fixed w-full" : "h-0 w-0"
          } md:hidden right-0 top-0 bottom-0 z-20 overflow-hidden bg-white transition-all`}
        >
          <div className="flex items-center justify-between px-5 py-6">
            <img className="w-36" src={assets.logo} alt="" />
            <img
              className="w-7 md:hidden"
              onClick={() => setShowMenu(false)}
              src={assets.cross_icon}
              alt=""
            />
          </div>
          <ul className="flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium">
            <NavLink onClick={() => setShowMenu(false)} to="/">
              <p className="px-4 py-2 rounded inline-block">Home</p>
            </NavLink>
            <NavLink onClick={() => setShowMenu(false)} to="/lawyers">
              <p className="px-4 py-2 rounded inline-block">All Lawyers</p>
            </NavLink>
            <NavLink onClick={() => setShowMenu(false)} to="/about">
              <p className="px-4 py-2 rounded inline-block">About</p>
            </NavLink>
            <NavLink onClick={() => setShowMenu(false)} to="/contact">
              <p className="px-4 py-2 rounded inline-block">Contact</p>
            </NavLink>
            {!token && (
              <button
                className="bg-primary text-white px-4 py-2 rounded-full font-light mt-4"
                onClick={() => {
                  setShowMenu(false);
                  navigate("/login");
                }}
              >
                Create Account
              </button>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
