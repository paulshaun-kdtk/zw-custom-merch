import React, { useState } from "react";
import NavBar from "./layouts/NavBar";
import { DisplayTable } from "./admin_components/displayTable";
import { MdOutlineMoneyOff } from "react-icons/md";
import { FaEye, FaChartArea, FaEyeSlash } from "react-icons/fa";
import { FaArrowDownWideShort } from "react-icons/fa6";
import { Button, Tooltip, Dropdown } from "flowbite-react";
import { Link } from "react-router-dom";
import {
  SourcesPieChart,
  NewCustomersLineChart,
  UnitsSoldVsProfitLineChart,
} from "./main_components/SourcesPieChart";

function AdminPanel() {
  const [showCharts, setShowCharts] = useState(true);
  const inventoryData = {
    title: "Active Inventory Items",
    subtext: "List of items in inventory",
    keys: ["Item ID", "Item Name", "Quantity", "Price", "Category"],
    data: [
      [
        {
          content: "I001",
          styles:
            "font-semibold font-semibold text-gray-700 dark:text-gray-300",
        },
        { content: "Widget A", styles: "" },
        { content: "50", styles: "font-bold text-gray-700 dark:text-gray-300" },
        { content: "$25.00", styles: "" },
        { content: "Gadgets" },
      ],
      [
        {
          content: "I002",
          styles:
            "font-semibold font-semibold text-gray-700 dark:text-gray-300",
        },
        { content: "Widget B", styles: "" },
        { content: "20", styles: "font-bold text-gray-700 dark:text-gray-300" },
        { content: "$45.00", styles: "" },
        { content: "Gadgets" },
      ],
      [
        {
          content: "I003",
          styles:
            "font-semibold font-semibold text-gray-700 dark:text-gray-300",
        },
        { content: "Gizmo C", styles: "" },
        { content: "15", styles: "font-bold text-gray-700 dark:text-gray-300" },
        { content: "$75.00", styles: "" },
        { content: "Devices" },
      ],
    ],
    searchEnabled: true,
    showActionTabs: true,
  };

  const transactionData = {
    title: "Recent transactions",
    subtext: "Records of all transactions",
    keys: ["Transaction ID", "Customer", "Amount", "Date", "Status"],
    data: [
      [
        {
          content: "T1001",
          styles: "font-semibold text-gray-700 dark:text-gray-300",
        },
        { content: "John Doe", styles: "" },
        { content: "$150.00", styles: "" },
        { content: "2023-11-01" },
        {
          content: "Completed",
          styles: "text-emerald-500 dark:text-emerald-400",
        },
      ],
      [
        {
          content: "T1002",
          styles:
            "font-semibold font-semibold text-gray-700 dark:text-gray-300",
        },
        { content: "Jane Smith", styles: "" },
        { content: "$200.00", styles: "" },
        { content: "2023-11-03" },
        { content: "Pending", styles: "text-yellow-400 dark:text-yellow-300" },
      ],
      [
        {
          content: "T1003",
          styles:
            "font-semibold font-semibold text-gray-700 dark:text-gray-300",
        },
        { content: "Alice Johnson", styles: "" },
        { content: "$300.00", styles: "" },
        { content: "2023-11-05" },
        { content: "Failed", styles: "text-red-400" },
      ],
    ],
    searchEnabled: false,
    showActionTabs: true,
  };

  return (
    <main className="min-h-screen gap-2 bg-slate-50  dark:bg-gray-800">
      <NavBar />
      <div>
        <div className="flex justify-between p-5">
          <h1 className="text-2xl font-semibold text-gray-600 dark:text-gray-300">
            Administration Dashboard
          </h1>
          <div className="flex">
            <Dropdown
              dismissOnClick={false}
              renderTrigger={() => (
                <span className="m-auto flex cursor-pointer justify-end">
                  <Button color="gray">
                    <FaArrowDownWideShort
                      size={20}
                      className="mr-2 text-gray-500 dark:text-gray-200"
                    />
                    Which Business?
                  </Button>
                </span>
              )}
            >
              <Dropdown.Item>All</Dropdown.Item>
              <Dropdown.Item>ZW Custom Merch</Dropdown.Item>
              <Dropdown.Item>Insinuates</Dropdown.Item>
            </Dropdown>

            <Link to={"/kdtk/personal/budget-assist/"}>
              <Button color="gray" className="mx-2">
                <MdOutlineMoneyOff
                  size={20}
                  className="mr-2 text-gray-500 dark:text-gray-200"
                />
                Visit Budget Assist Module
              </Button>
            </Link>
            <Tooltip content="Toggle stat charts" placement="top-start">
              <Button
                color="transparent"
                onClick={() => setShowCharts(!showCharts)}
              >
                {!showCharts && (
                  <FaEye
                    size={18}
                    className="mr-2 text-gray-500 dark:text-gray-200"
                  />
                )}
                {showCharts && (
                  <FaEyeSlash
                    size={18}
                    className="mr-2 text-gray-500 dark:text-gray-200"
                  />
                )}
                <FaChartArea
                  size={18}
                  className="text-gray-500 dark:text-gray-200"
                />
              </Button>
            </Tooltip>
          </div>
        </div>
        {showCharts && (
          <div className="mt-4 grid w-full grid-cols-1 gap-4 px-5 md:grid-cols-2 xl:grid-cols-3">
            <SourcesPieChart />
            <NewCustomersLineChart />
            <UnitsSoldVsProfitLineChart />
          </div>
        )}
        <div className="grid w-full grid-cols-2 px-5 sm:grid-cols-1 md:grid-cols-2">
          <DisplayTable {...transactionData} />
          <DisplayTable {...inventoryData} />
        </div>
      </div>
    </main>
  );
}

export default AdminPanel;
