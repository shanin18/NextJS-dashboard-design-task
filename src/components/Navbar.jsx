"use client";
import React, { useState } from "react";
import { FiSettings } from "react-icons/fi";
import { AiOutlineBars, AiOutlineHome } from "react-icons/ai";
import {
  HiOutlineBars3BottomLeft,
  HiOutlineBars3BottomRight,
  HiOutlineXMark,
} from "react-icons/hi2";
import Link from "next/link";
import Image from "next/image";
const Navbar = () => {
  const [hidden, setHidden] = useState(false);

  return (
    <nav
      className={`bg-[#171717] flex items-center justify-between px-8 py-3 z-50 $`}
    >
      <ul className="lg:flex items-center gap-6 hidden">
        <li>
          <Link href="#" className="flex items-center gap-1 text-white">
            <AiOutlineHome></AiOutlineHome>
            Home
          </Link>
        </li>
        <li>
          <Link href="#" className="flex items-center gap-1 text-white">
            <AiOutlineBars></AiOutlineBars>
            Contact
          </Link>
        </li>
        <li>
          <Link href="#" className="flex items-center gap-1 text-white">
            <HiOutlineBars3BottomRight></HiOutlineBars3BottomRight>
            Categories
          </Link>
        </li>
        <li>
          <Link href="#" className="flex items-center gap-1 text-white">
            <FiSettings></FiSettings>
            Settings
          </Link>
        </li>
      </ul>
      <ul
        className={`space-y-4 lg:hidden fixed top-[62px] h-[calc(100vh-62px)] w-48 bg-[#171717] p-5 z-50 duration-300 ease-in-out ${
          hidden ? "left-0" : "-left-56"
        }`}
      >
        <li>
          <Link href="#" className="flex items-center gap-1 text-white">
            <AiOutlineHome></AiOutlineHome>
            Home
          </Link>
        </li>
        <li>
          <Link href="#" className="flex items-center gap-1 text-white">
            <AiOutlineBars></AiOutlineBars>
            Contact
          </Link>
        </li>
        <li>
          <Link href="#" className="flex items-center gap-1 text-white">
            <HiOutlineBars3BottomRight></HiOutlineBars3BottomRight>
            Categories
          </Link>
        </li>
        <li>
          <Link href="#" className="flex items-center gap-1 text-white">
            <FiSettings></FiSettings>
            Settings
          </Link>
        </li>
      </ul>

      {hidden ? (
        <HiOutlineXMark
          onClick={() => setHidden(!hidden)}
          className="text-2xl text-white lg:hidden"
        />
      ) : (
        <HiOutlineBars3BottomLeft
          onClick={() => setHidden(!hidden)}
          className="text-2xl text-white lg:hidden"
        />
      )}

      <div className="flex items-center rounded-full gap-1 bg-white py-1 pl-1 pr-4">
        <Image
          src="https://media.licdn.com/dms/image/D5603AQH5YOxSvsm4Ng/profile-displayphoto-shrink_200_200/0/1687071030194?e=1695254400&v=beta&t=czy7wov8M2TjlAbHilC3JZkrkT7lEuDCe9WkOZMg-r0"
          width={30}
          height={30}
          className="rounded-full"
          alt="profile image"
        />
        <p>Shamim Hosan</p>
      </div>
    </nav>
  );
};

export default Navbar;
