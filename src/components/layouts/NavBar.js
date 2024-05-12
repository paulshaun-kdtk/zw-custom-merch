"use client";
import { DarkThemeToggle, Navbar } from "flowbite-react";

// end imports

function NavBar() {
  return (
    <Navbar fluid rounded className="bg-gray-200 dark:bg-gray-900">
      <Navbar.Brand>
        <img
          src="/images/murare-logo.png"
          className="mr-3 h-6 sm:h-9"
          alt="Murare Logo"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold text-blue-500 dark:text-white">
          Shuttle Tracking Service
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <DarkThemeToggle />
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse className="">
        <Navbar.Link href="/home" active>
          Home
        </Navbar.Link>
        <Navbar.Link href="/trips/dashboard">Dashboard</Navbar.Link>
        <Navbar.Link href="/trips/list">Trips</Navbar.Link>
        <Navbar.Link href="/trips/drivers">Drivers</Navbar.Link>
        <Navbar.Link href="/trips/shuttles">Vehicles</Navbar.Link>
        <Navbar.Link href="/trips/reports">Reports</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
