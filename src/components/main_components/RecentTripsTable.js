"use client";

import { Table } from "flowbite-react";

export function RecentTripsTable() {
  return (
    <div className="overflow-x-auto">
      <Table hoverable>
        <Table.Head>
          <Table.HeadCell>Title</Table.HeadCell>
          <Table.HeadCell>Driver</Table.HeadCell>
          <Table.HeadCell>Vehicle</Table.HeadCell>
          <Table.HeadCell>Status</Table.HeadCell>
          <Table.HeadCell>
            <span className="sr-only">View</span>
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              Delivery
            </Table.Cell>
            <Table.Cell>Jake Test</Table.Cell>
            <Table.Cell>AEF9001</Table.Cell>
            <Table.Cell>Active</Table.Cell>
            <Table.Cell>
              <a
                href="/"
                className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
              >
                View
              </a>
            </Table.Cell>
          </Table.Row>
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              Client Pickup
            </Table.Cell>
            <Table.Cell>John Doe</Table.Cell>
            <Table.Cell>AJK 5541</Table.Cell>
            <Table.Cell>Completed</Table.Cell>
            <Table.Cell>
              <a
                href="/"
                className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
              >
                View
              </a>
            </Table.Cell>
          </Table.Row>
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              Staff Drop Off
            </Table.Cell>
            <Table.Cell>Kdtk Test</Table.Cell>
            <Table.Cell>AFD 7626</Table.Cell>
            <Table.Cell>In Progress</Table.Cell>
            <Table.Cell>
              <a
                href="/"
                className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
              >
                View
              </a>
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
  );
}
