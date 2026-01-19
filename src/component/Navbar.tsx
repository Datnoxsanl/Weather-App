/** @format */

import React from "react";
import { MdWbSunny, MdMyLocation, MdOutlineLocationOn } from "react-icons/md";
import SearchBox from "./SearchBox";
type Prop = {};

export default function Navbar({}: Prop) {
  return (
    <nav className=" shadow-sm sticky top-0 left-0 z-50 bg-white">
      <div className="h-20 w-full flex items-center justify-between max-w-7xl px-3 mx-auto">
        <p className=" flex justify-center items-center gap-2">
          <h2 className=" text-gray-500 text-3xl"> Weather</h2>
          <MdWbSunny className="text-3xl mt-1 text-yellow-500" />
        </p>
        {/* Right Side  */}

        <section className="flex gap-2 items-center">
          <MdMyLocation className="text-3xl mt-1 text-gray-400 hover:opacity-80 cursor-pointer " />
          <MdOutlineLocationOn className="text-3xl mt-1 text-gray-400 hover:opacity-80 cursor-pointer " />
          <p className="text-slate-900/80 text-sm">VietNam</p>
          <div>{/* search box  */}
            <SearchBox />
          </div>
        </section>
      </div>
    </nav>
  );
}
