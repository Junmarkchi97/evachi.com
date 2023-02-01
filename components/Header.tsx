import Link from "next/link";
import React from "react";

function Header() {
  return (
    <nav className="w-full flex justify-between py-10 text-2xl max-md:hidden 2xl:px-[200px]">
      <div>Eva Jane Chi</div>
      <ul className="flex gap-10">
        <Link
          href="#"
          className="relative hover:scale-110 transition-all after:duration-500 after:transition-all after:content-[''] after:bg-black after:h-1 after:w-1 after:scale-0 after:absolute after:rounded-full after:-bottom-3 after:left-1/2 hover:after:scale-[3] "
        >
          Services
        </Link>
        <Link
          href="#"
          className="relative hover:scale-110 transition-all after:duration-500 after:content-[''] after:bg-black after:h-1 after:w-1 after:scale-0 after:absolute after:rounded-full after:-bottom-3 after:left-1/2 hover:after:scale-[3] after:transition-all "
        >
          Contact
        </Link>
      </ul>
    </nav>
  );
}

export default Header;
