import React, { useState } from "react";
import NavBar from "./layouts/NavBar";
import { Link } from "react-router-dom";
import { Button, Card, Tooltip } from "flowbite-react";
import { MdManageAccounts } from "react-icons/md";
import { FaEye, FaChartArea, FaEyeSlash } from "react-icons/fa";
import { GiReceiveMoney, GiPayMoney } from "react-icons/gi";
import {
  MonthlyRevenue,
  IncomeSources,
} from "./main_components/budgetAssistCharts";
import { DisplayTable } from "./admin_components/displayTable";

function BudgetAssist() {
  const [showCharts, setShowCharts] = useState(true);
  const revenueData = {
    title: "Quarterly Revenue Data",
    subtext: "Revenue overview for the current quarter",
    keys: ["Month", "Source", "Date Received", "Account", "Total Received"],
    data: [
      [
        {
          content: "Nov",
          styles: "font-semibold text-gray-900 dark:text-gray-300",
        },
        { content: "Salary", styles: "text-cyan-500" },
        { content: "30-11-24", styles: "text-gray-700 dark:text-gray-200" },
        { content: "Main" },
        { content: "$100.00", styles: "text-emerald-400" },
      ],
      [
        {
          content: "Oct",
          styles: "font-semibold text-gray-900 dark:text-gray-300",
        },
        { content: "Salary", styles: "text-cyan-500" },
        { content: "31-10-24", styles: "text-gray-700 dark:text-gray-200" },
        { content: "Main" },
        { content: "$150", styles: "text-emerald-400" },
      ],
      [
        {
          content: "Sep",
          styles: "font-semibold text-gray-900 dark:text-gray-300",
        },
        { content: "Salary", styles: "text-cyan-500" },
        { content: "30/09/24", styles: "text-gray-700 dark:text-gray-200" },
        { content: "Main" },
        { content: "$50", styles: "text-emerald-400" },
      ],
    ],
    showActionTabs: false,
    searchable: true,
    actionComponent: (
      <div className="flex gap-x-5">
        {" "}
        <Button color="green">
          <GiReceiveMoney
            size={18}
            className="mr-2 text-gray-500 dark:text-gray-200"
          />
          Add Record
        </Button>{" "}
        <Button color="gray">View History</Button>{" "}
      </div>
    ),
  };

  const expenseData = {
    title: "Recent Expense Entries",
    subtext: "Expenditure overview for the current quarter",
    keys: ["Month", "Type", "Date Spent", "Account", "Total Spent", "reason"],
    data: [
      [
        {
          content: "Oct",
          styles: "font-semibold text-gray-900 dark:text-gray-300",
        },
        { content: "General", styles: "text-yellow-400" },
        { content: "30-11-24", styles: "text-gray-700 dark:text-gray-200" },
        { content: "Main" },
        { content: "$10.00", styles: "text-red-400" },
        { content: "Paid for lunch", styles: "" },
      ],
      [
        {
          content: "Oct",
          styles: "font-semibold text-gray-900 dark:text-gray-300",
        },
        { content: "Debt", styles: "text-yellow-400" },
        { content: "31-10-24", styles: "text-gray-700 dark:text-gray-200" },
        { content: "Main" },
        { content: "$100", styles: "text-red-400" },
        {
          content: "Paid supplier amount owed from previos period",
          styles: "",
        },
      ],
      [
        {
          content: "Sep",
          styles: "font-semibold text-gray-900 dark:text-gray-300",
        },
        { content: "General", styles: "text-yellow-400" },
        { content: "30/09/24", styles: "text-gray-700 dark:text-gray-200" },
        { content: "Main" },
        { content: "$50", styles: "text-red-400" },
        { content: "Bought Clothers" },
      ],
      [
        {
          content: "Sep",
          styles: "font-semibold text-gray-900 dark:text-gray-300",
        },
        { content: "Lost Money", styles: "text-yellow-400" },
        { content: "30/09/24", styles: "text-gray-700 dark:text-gray-200" },
        { content: "Main" },
        { content: "$50", styles: "text-red-400" },
        { content: "Lost money in town" },
      ],
    ],
    showActionTabs: false,
    searchable: true,
    actionComponent: (
      <div className="flex gap-x-5">
        {" "}
        <Button color="yellow">
          <GiPayMoney
            size={18}
            className="mr-2 text-gray-500 dark:text-gray-200"
          />
          Add Record
        </Button>{" "}
        <Button color="gray">View History</Button>{" "}
      </div>
    ),
  };

  const itemsBoughtData = {
    title: "Bought Items...",
    subtext: "Overview of capstone items bought",
    keys: ["Item Name", "Amount Spent", "Date Spent"],
    data: [
      [
        {
          content: "Yamaha Bike",
          styles: "font-semibold text-gray-900 dark:text-gray-300",
        },
        { content: "$1400.00", styles: "text-red-400" },
        { content: "30-11-24", styles: "text-gray-700 dark:text-gray-200" },
      ],
      [
        {
          content: "Iphone SE",
          styles: "font-semibold text-gray-900 dark:text-gray-300",
        },
        { content: "$40.00", styles: "text-red-400" },
        { content: "30-06-24", styles: "text-gray-700 dark:text-gray-200" },
      ],
      [
        {
          content: "Iphone 8",
          styles: "font-semibold text-gray-900 dark:text-gray-300",
        },
        { content: "$50", styles: "text-red-400" },
        { content: "31-04-24", styles: "text-gray-700 dark:text-gray-200" },
      ],
    ],
    showActionTabs: false,
    searchEnabled: true,
    actionComponent: (
      <div className="flex gap-x-5">
        {" "}
        <Button color="gray">
          <GiPayMoney
            size={18}
            className="mr-2 text-gray-500 dark:text-gray-200"
          />
          Add Record
        </Button>{" "}
        <Button color="gray">View ALl</Button>{" "}
      </div>
    ),
  };

  const itemsInWishlistData = {
    title: "Wishlist...",
    subtext: "Overview of items desired",
    keys: ["Item Name", "Cost", "Expense Type", "Target Date"],
    data: [
      [
        {
          content: "BMW M1200",
          styles: "font-semibold text-gray-900 dark:text-gray-300",
        },
        { content: "$10400.00", styles: "text-red-400" },
        { content: "Asset Acquisition", styles: "" },
        { content: "30-09-26", styles: "text-gray-700 dark:text-gray-200" },
      ],
      [
        {
          content: "Iphone 13 Pro Max",
          styles: "font-semibold text-gray-900 dark:text-gray-300",
        },
        { content: "$340.00", styles: "text-red-400" },
        { content: "Asset Acquisition", styles: "" },
        { content: "30-01-25", styles: "text-gray-700 dark:text-gray-200" },
      ],
      [
        {
          content: "Customized Clothers",
          styles: "font-semibold text-gray-900 dark:text-gray-300",
        },
        { content: "$20", styles: "text-red-400" },
        { content: "General", styles: "" },
        { content: "09-11-24", styles: "text-gray-700 dark:text-gray-200" },
      ],
    ],
    showActionTabs: false,
    searchEnabled: true,
    actionComponent: (
      <div className="flex gap-x-5">
        {" "}
        <Button color="gray">
          <GiPayMoney
            size={18}
            className="mr-2 text-gray-500 dark:text-gray-200"
          />
          Add Record
        </Button>{" "}
        <Button color="gray">View ALl</Button>{" "}
      </div>
    ),
  };

  const lostItemsData = {
    title: "Lost Items...",
    subtext: "Overview of capstone items lost or displaced",
    keys: ["Item Name", "Loss Type", "Amount Lost", "Date Lost"],
    data: [
      [
        {
          content: "$60",
          styles: "font-semibold text-gray-900 dark:text-gray-300",
        },
        { content: "Careless Loss", styles: "" },
        { content: "$60.00", styles: "text-red-400" },
        { content: "30-09-24", styles: "text-gray-700 dark:text-gray-200" },
      ],
      [
        {
          content: "$150",
          styles: "font-semibold text-gray-900 dark:text-gray-300",
        },
        { content: "Scam", styles: "" },
        { content: "$150.00", styles: "text-red-400" },
        { content: "30-07-24", styles: "text-gray-700 dark:text-gray-200" },
      ],
      [
        {
          content: "Headphones",
          styles: "font-semibold text-gray-900 dark:text-gray-300",
        },
        { content: "Depreciation", styles: "" },
        { content: "$24", styles: "text-red-400" },
        { content: "31-08-24", styles: "text-gray-700 dark:text-gray-200" },
      ],
    ],
    showActionTabs: false,
    searchEnabled: true,
    actionComponent: (
      <div className="flex gap-x-5">
        {" "}
        <Button color="gray">
          <GiPayMoney
            size={18}
            className="mr-2 text-gray-500 dark:text-gray-200"
          />
          Add Record
        </Button>{" "}
        <Button color="gray">View ALl</Button>{" "}
      </div>
    ),
  };

  return (
    <main className="min-h-screen gap-2 bg-slate-50  dark:bg-gray-800">
      <NavBar />
      <div>
        <div className="flex justify-between p-5">
          <h1 className="pl-5 text-2xl font-semibold text-gray-600 dark:text-gray-300">
            Budget Assistance
          </h1>
          <div className="flex pr-5">
            <Link to={"/kdtk/admin/"}>
              <Button color="gray" className="mr-2">
                <MdManageAccounts
                  size={20}
                  className="mr-2 text-gray-500 dark:text-gray-200"
                />
                Back to admin panel
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
          <div>
            <div className="flex flex-wrap items-center justify-center gap-x-5 px-5">
              <Tooltip content="View Revenue Entries" placement="top">
                <Link to={"/"}>
                  <Card className="max-w-sm">
                    <h5 className="text-center text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      $ 0
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                      Total revenue this year
                    </p>
                  </Card>
                </Link>
              </Tooltip>
              <Tooltip content="View Expenditure Entries" placement="top">
                <Link to={"/"}>
                  <Card className="max-w-sm">
                    <h5 className="text-center text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      $ 0
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                      Total expenses this year
                    </p>
                  </Card>
                </Link>
              </Tooltip>
              <Tooltip content="View Wallet" placement="top">
                <Link to={"/"}>
                  <Card className="max-w-sm">
                    <h5 className="text-center text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      $ 0
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                      Total balance in wallet
                    </p>
                  </Card>
                </Link>
              </Tooltip>
              <Tooltip content="View Savings" placement="top">
                <Link to={"/"}>
                  <Card className="max-w-sm">
                    <h5 className="text-center text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      $ 0
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                      Total amount in savings
                    </p>
                  </Card>
                </Link>
              </Tooltip>
              <Tooltip content="View Wishlist" placement="top">
                <Link to={"/"}>
                  <Card className="max-w-sm">
                    <h5 className="text-center text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      0
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                      Total items in wishlist
                    </p>
                  </Card>
                </Link>
              </Tooltip>
              <Tooltip content="View Items Bought" placement="top">
                <Link to={"/"}>
                  <Card className="max-w-sm">
                    <h5 className="text-center text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      0
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                      Total items bought
                    </p>
                  </Card>
                </Link>
              </Tooltip>
              <Tooltip content="View Items Lost" placement="top">
                <Link to={"/"}>
                  <Card className="max-w-sm">
                    <h5 className="text-center text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      0
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                      Total items lost
                    </p>
                  </Card>
                </Link>
              </Tooltip>
            </div>
            <div className="mt-5 flex justify-between gap-x-5 px-20">
              <div className="w-1/2">
                <MonthlyRevenue />
              </div>
              <div className="w-1/2">
                <IncomeSources />
              </div>
            </div>
          </div>
        )}
        <div className="mt-5 px-5">
          <DisplayTable {...revenueData} />
          <DisplayTable {...expenseData} />
          <DisplayTable {...itemsInWishlistData} />
          <DisplayTable {...itemsBoughtData} />
          <DisplayTable {...lostItemsData} />
        </div>
      </div>
    </main>
  );
}

export default BudgetAssist;
