"use client";

import { Button, Timeline } from "flowbite-react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { useState, useEffect } from "react";
// import  MapInterface  from "./MapContainer";

// end import

function DashboardTables() {
  const [currentMonth, setCurrentMonth] = useState("");

  useEffect(() => {
    const currentDate = new Date();
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const month = currentDate.getMonth();
    const monthName = monthNames[month];
    setCurrentMonth(monthName);
  }, []);

  return (
    <div className="flex px-5" style={{ justifyContent: "space-around" }}>
      <div className="px-5">
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          <span className="text-gray-400 dark:text-white"> Drivers' List </span>
          <li className="pb-3 sm:pb-4">
            <div className="flex items-center space-x-4 rtl:space-x-reverse">
              <div className="shrink-0">
                <img
                  className="size-8 rounded-full"
                  src="/docs/images/people/profile-picture-1.jpg"
                  alt="Neil"
                />
              </div>
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-medium text-gray-900 dark:text-white">
                  Neil Sims
                </p>
                <p className="truncate text-sm text-gray-500 dark:text-gray-400">
                  email@flowbite.com
                </p>
              </div>
              <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                $320
              </div>
            </div>
          </li>
          <li className="py-3 sm:py-4">
            <div className="flex items-center space-x-4 rtl:space-x-reverse">
              <div className="shrink-0">
                <img
                  className="size-8 rounded-full"
                  src="/docs/images/people/profile-picture-3.jpg"
                  alt="Neil"
                />
              </div>
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-medium text-gray-900 dark:text-white">
                  Bonnie Green
                </p>
                <p className="truncate text-sm text-gray-500 dark:text-gray-400">
                  email@flowbite.com
                </p>
              </div>
              <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                $3467
              </div>
            </div>
          </li>
          <li className="py-3 sm:py-4">
            <div className="flex items-center space-x-4 rtl:space-x-reverse">
              <div className="shrink-0">
                <img
                  className="size-8 rounded-full"
                  src="/docs/images/people/profile-picture-2.jpg"
                  alt="Neil"
                />
              </div>
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-medium text-gray-900 dark:text-white">
                  Michael Gough
                </p>
                <p className="truncate text-sm text-gray-500 dark:text-gray-400">
                  email@flowbite.com
                </p>
              </div>
              <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                $67
              </div>
            </div>
          </li>
          <li className="py-3 sm:py-4">
            <div className="flex items-center space-x-4 rtl:space-x-reverse">
              <div className="shrink-0">
                <img
                  className="size-8 rounded-full"
                  src="/docs/images/people/profile-picture-5.jpg"
                  alt="Neil"
                />
              </div>
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-medium text-gray-900 dark:text-white">
                  Thomas Lean
                </p>
                <p className="truncate text-sm text-gray-500 dark:text-gray-400">
                  email@flowbite.com
                </p>
              </div>
              <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                $2367
              </div>
            </div>
          </li>
          <li className="pb-0 pt-3 sm:pt-4">
            <div className="flex items-center space-x-4 rtl:space-x-reverse">
              <div className="shrink-0">
                <img
                  className="size-8 rounded-full"
                  src="/docs/images/people/profile-picture-4.jpg"
                  alt="Neil"
                />
              </div>
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-medium text-gray-900 dark:text-white">
                  Lana Byrd
                </p>
                <p className="truncate text-sm text-gray-500 dark:text-gray-400">
                  email@flowbite.com
                </p>
              </div>
              <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                $367
              </div>
            </div>
          </li>
        </ul>
      </div>

      {/* map */}
      {/* <div className="px-5" style={{width: "40%"}}>
                <MapInterface />
            </div> */}
      {/* second list */}

      <div className="px-5" style={{ maxHeight: "5%", width: "40%" }}>
        <ul className="max-w-md divide-y divide-gray-200 dark:divide-gray-700">
          <Timeline>
            <Timeline.Item>
              <Timeline.Point />
              <Timeline.Content>
                <Timeline.Time>{currentMonth}</Timeline.Time>
                <Timeline.Title>
                  Application UI code in Tailwind CSS
                </Timeline.Title>
                <Timeline.Body>
                  Get access to over 20+ pages including a dashboard layout,
                  charts, kanban board, calendar, and pre-order E-commerce &
                  Marketing pages.
                </Timeline.Body>
                <Button color="gray">
                  Learn More
                  <HiArrowNarrowRight className="ml-2 size-3" />
                </Button>
              </Timeline.Content>
            </Timeline.Item>
          </Timeline>
        </ul>
      </div>
    </div>
  );
}

export default DashboardTables;
