import React from "react";

import Link from "next/link";

const Header = () => {
  return (
    <div class="m-2 md:m-5 min-w-screen flex justify-center md:justify-between">
      <div class="">
        <Link href="/">logo</Link>
      </div>
      <div class="hidden md:block md:flex md:space-x-4">
        <Link href={"/aboutus"}>About Us</Link>
        <Link href={"/menu"}>Menu</Link>
        <Link href={"/cateringmenu"}>Catering Menu</Link>
        <Link href={"/contactus"}>Contact us</Link>
      </div>
    </div>
  );
};
export default Header;
