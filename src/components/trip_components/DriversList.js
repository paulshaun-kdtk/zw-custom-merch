"use client";
import React, { useState } from "react";
import { Table, TextInput } from "flowbite-react";

export function DriversList() {
  const [searchQuery, setSearchQuery] = useState("");

  const data = [
    {
      name: "Mcdonald models",
      national_id: "32490edjs",
      vehicle: "bugatti",
      trips: "2999",
    },
    {
      name: "Leeroy Skeem",
      national_id: "3wjw",
      vehicle: "",
      trips: "1999",
    },
    {
      name: "Magic Mouse",
      national_id: "748ye8219",
      vehicle: "maserati",
      trips: "99",
    },
    {
      name: "Cyril Lance",
      national_id: "test2918",
      vehicle: "ferrari",
      trips: "799",
    },
  ];

  // Filter data based on search query
  const filteredItems = data.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  // Function to handle search input change
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <main className="min-h-screen gap-2 bg-slate-50  dark:bg-gray-800">
      <div className="py-10" style={{ height: "100%" }}>
        <TextInput
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="Search by name ..."
          className="mt-2 border-none"
        />
        <Table striped className="mt-2">
          <Table.Head>
            <Table.HeadCell>Driver Name</Table.HeadCell>
            <Table.HeadCell>National Id</Table.HeadCell>
            <Table.HeadCell>Vehicle</Table.HeadCell>
            <Table.HeadCell>Trips Count</Table.HeadCell>
            <Table.HeadCell>
              <span className="sr-only">Edit</span>
            </Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            {filteredItems.map((item, index) => (
              <Table.Row
                key={index}
                className="bg-white dark:border-gray-700 dark:bg-gray-800"
              >
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  {item.name}
                </Table.Cell>
                <Table.Cell>{item.national_id}</Table.Cell>
                <Table.Cell>{item.vehicle}</Table.Cell>
                <Table.Cell>{item.trips}</Table.Cell>
                <Table.Cell>
                  <a
                    href="#/"
                    className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                  >
                    Edit
                  </a>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </div>
    </main>
  );
}
