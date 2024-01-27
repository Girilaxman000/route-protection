"use client";

import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div>
      <ul className="flex gap-4">
        <Link href="/">
          <li>Home</li>
        </Link>
        <Link href="client">
          <li>Client Side</li>
        </Link>
        <Link href="hoc">
          <li>Client Side with HOC</li>
        </Link>
        <Link href="serverside">
          <li>Server Side</li>
        </Link>
        <Link href="middleware">
          <li>Middleware</li>
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;
