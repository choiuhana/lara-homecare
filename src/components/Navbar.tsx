"use client";

import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="navbar bg-base-100 shadow sticky top-0 z-20">
      <div className="flex-1">
        <Link href="/" className="btn btn-ghost normal-case text-xl">
          라라재가 요양센터
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1 hidden md:flex">
          <li>
            <Link href="/about">센터 소개</Link>
          </li>
          <li>
            <Link href="/find">오시는 길</Link>
          </li>
        </ul>
        <div className={`dropdown dropdown-end md:hidden ${open ? "dropdown-open" : ""}`}>
          <label tabIndex={0} className="btn btn-ghost" onClick={() => setOpen(!open)}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link href="/" onClick={() => setOpen(false)}>
                홈
              </Link>
            </li>
            <li>
              <Link href="/about" onClick={() => setOpen(false)}>
                센터 소개
              </Link>
            </li>
            <li>
              <Link href="/find" onClick={() => setOpen(false)}>
                오시는 길
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
