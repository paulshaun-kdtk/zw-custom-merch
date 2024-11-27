
"use client";

import { Card } from "flowbite-react";

function StatisticCards() {
  return (
    <div className="flex flex-row px-5" style={{marginTop: "2%", justifyContent: "space-evenly"}}>
    <Card href="#" className="max-w-sm">
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Total Number Of Vehicles
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        200
      </p>
    </Card>

    <Card href="#" className="max-w-sm">
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Active trips
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        5
      </p>
    </Card>

    <Card href="#" className="max-w-sm">
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Total Number Of Drivers
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        25
      </p>
    </Card>

    </div>
  );
}

export default StatisticCards;