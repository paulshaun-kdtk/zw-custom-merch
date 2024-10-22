"use client";
import { Card, Dropdown } from "flowbite-react";
import { FaCartPlus } from "react-icons/fa";
import { GiStarSattelites } from "react-icons/gi";
import { MdOutlinePlaylistRemove } from "react-icons/md";
import { LuPhoneForwarded } from "react-icons/lu";
import { TbStarHalf } from "react-icons/tb";
import { RiHeartAdd2Line } from "react-icons/ri";

export function Designs({
  item_name,
  item_price_base_currency,
  item_price_converted_currency,
  item_category,
}) {
  return (
    <Card className="max-w-2xl shadow-sm shadow-blue-300 dark:shadow-emerald-300">
      <div className="flex justify-end px-2">
        <Dropdown inline label="">
          <Dropdown.Item>
            <a
              href="/"
              className="flex items-start justify-evenly px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              <TbStarHalf className="mr-1" size={16} />
              Rate Design
            </a>
          </Dropdown.Item>
          <Dropdown.Item>
            <span className="flex items-start justify-evenly px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white">
              <RiHeartAdd2Line className="mr-1" size={16} />
              Like Design
            </span>
          </Dropdown.Item>
          <Dropdown.Item>
            <a
              href="/"
              className="flex items-start justify-evenly px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              <LuPhoneForwarded className="mr-1" size={16} />
              Contact us about design
            </a>
          </Dropdown.Item>
          <Dropdown.Item>
            <a
              href="/"
              className="flex items-start justify-evenly px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              <MdOutlinePlaylistRemove className="mr-1" size={16} />
              Request Design Removal
            </a>
          </Dropdown.Item>
        </Dropdown>
      </div>
      <div className="flex flex-col items-center pb-10">
        <img
          alt="Design Preview"
          height="250"
          src="/images/zw_merch-variant.png"
          width="250"
          className="mb-3 rounded-md shadow-lg"
        />
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
          {item_name}
        </h5>
        <span className="flex items-center justify-evenly gap-5 text-sm text-gray-700 dark:text-gray-300">
          <i>{item_price_base_currency}</i>{" "}
          <i>{item_price_converted_currency}</i>
        </span>
        <div className="mt-4 flex space-x-3 lg:mt-6">
          <a
            href="/"
            className="inline-flex items-center rounded-lg bg-cyan-700 px-4 py-2 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
          >
            <FaCartPlus size={18} className="mr-1" />
            Order
          </a>
          <a
            href="/"
            className="inline-flex items-center rounded-lg border border-gray-300 bg-white px-4 py-2 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
          >
            <GiStarSattelites size={16} className="mr-1" />
            Add to wishlist
          </a>
        </div>
      </div>
    </Card>
  );
}
