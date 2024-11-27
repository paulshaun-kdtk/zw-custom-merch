"use client";
import React, { useState } from "react";
import { Table } from "flowbite-react";
import { TextInput } from "flowbite-react";

export function VehiclesList() {
  const [searchQuery, setSearchQuery] = useState("");

  const data = [
    {
      productName: 'Apple MacBook Pro 17"',
      color: "Silver",
      category: "Laptop",
      price: "$2999",
    },
    {
      productName: "Microsoft Surface Pro",
      color: "White",
      category: "Laptop PC",
      price: "$1999",
    },
    {
      productName: "Magic Mouse 2",
      color: "Black",
      category: "Accessories",
      price: "$99",
    },
    {
      productName: "Google Pixel Phone",
      color: "Gray",
      category: "Phone",
      price: "$799",
    },
    {
      productName: "Apple Watch 5",
      color: "Red",
      category: "Wearables",
      price: "$999",
    },
  ];

  // Filter data based on search query
  const filteredItems = data.filter(
    (item) =>
      item.productName.toLowerCase().includes(searchQuery.toLowerCase()),
    // item.color.toLowerCase().includes(searchQuery.toLowerCase()),
    // item.category.toLowerCase().includes(searchQuery.toLowerCase()),
    // item.price.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <main className="min-h-screen gap-2 bg-slate-50  dark:bg-gray-800">
      <div className="overflow-auto" style={{ height: "100%" }}>
        <TextInput
          type="text"
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="Search by vehicle name"
        />
        <Table striped className="mt-2">
          <Table.Head>
            <Table.HeadCell>Product name</Table.HeadCell>
            <Table.HeadCell>Color</Table.HeadCell>
            <Table.HeadCell>Category</Table.HeadCell>
            <Table.HeadCell>Price</Table.HeadCell>
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
                  {item.productName}
                </Table.Cell>
                <Table.Cell>{item.color}</Table.Cell>
                <Table.Cell>{item.category}</Table.Cell>
                <Table.Cell>{item.price}</Table.Cell>
                <Table.Cell>
                  <a
                    href="#"
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
