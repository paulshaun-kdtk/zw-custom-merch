
"use client";
import { DarkThemeToggle, Navbar } from "flowbite-react";

// end imports

function NavBar() {
  return (
    <Navbar fluid rounded className="bg-gray-200 dark:bg-gray-900">
      <Navbar.Brand >
        <img src="/images/murare-logo.png" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold text-blue-500 dark:text-white">Murare Shuttle Tracking Service</span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <DarkThemeToggle />
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse className="">
        <Navbar.Link href="" active>
          Home
        </Navbar.Link>
        <Navbar.Link href="#">
          About
        </Navbar.Link>
        <Navbar.Link href="services">Services</Navbar.Link>
        <Navbar.Link href="#">Pricing</Navbar.Link>
        <Navbar.Link href="#">Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;