"use client";
import { DarkThemeToggle, Navbar } from "flowbite-react";
import { IoIosHome } from "react-icons/io";
import { CgOpenCollective } from "react-icons/cg";
import { SiCloudfoundry } from "react-icons/si";
import { RiUserSettingsFill } from "react-icons/ri";

// end imports

function NavBar() {
  return (
    <Navbar fluid rounded className="bg-gray-200 dark:bg-gray-900">
      <Navbar.Brand>
        <img
          src="/logos/zw_merch_logo.png"
          className="mr-3 h-6 sm:h-9"
          alt="Murare Logo"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold text-blue-500 dark:text-white">
          ZW Custom Merch
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <DarkThemeToggle />
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse className="">
        <Navbar.Link href="/home" className="flex justify-evenly" active>
          <IoIosHome className="mr-1" size={16} />
          Home
        </Navbar.Link>
        <Navbar.Link href="/trips/drivers" className="flex justify-evenly">
          <SiCloudfoundry size={16} className="mr-1" />
          Your Designs
        </Navbar.Link>
        <Navbar.Link href="/trips/drivers" className="flex justify-evenly">
          <CgOpenCollective className="mr-1" size={18} />
          Order History
        </Navbar.Link>
        <Navbar.Link href="/trips/dashboard" className="flex justify-evenly">
        <RiUserSettingsFill size={16} className="mr-1" />
        Your Profile</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
