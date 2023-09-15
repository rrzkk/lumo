import React from "react";

import Link from "next/link";

const Header = () => {
  return (
    <div>
      <Link href={"/aboutus"}>About Us</Link>
      <Link href={"/menu"}>Menu</Link>
      <Link href={"/cateringmenu"}>Catering Menu</Link>
      <Link href={"/contactus"}>Contact us</Link>
    </div>
  );
};
export default Header;
