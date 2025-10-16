import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";
import { MapPin } from "lucide-react";
import React from "react";
import { CgClose } from "react-icons/cg";
import { FaCaretDown } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  // use a local variable instead of the global `location` object
  const userLocation = null;
  return (
    <div className="bg-white py-3 shadow-2xl">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* logo section */}
        <div className="flex gap-7 items-center">
          <Link to={"/"}>
            <h1 className="font-bold text-3xl">
              <span className="text-red-500 font-serif">Z</span>aptro
            </h1>
          </Link>
          <div className="md:flex gap-1 cursor-pointer text-gray-700 items-center ">
            <MapPin className="text-red-500" />
            <span className="font-semibold ">
              {userLocation ? <div></div> : "Add Address"}
            </span>
            <FaCaretDown />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
