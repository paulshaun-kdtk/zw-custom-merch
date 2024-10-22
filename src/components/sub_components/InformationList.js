"use client";
import { List, Card } from "flowbite-react";

export function InformationList({ information }) {
  return (
    <>
      <Card className="w-full rounded-lg bg-slate-100 shadow-md shadow-blue-500 dark:bg-gray-800 dark:shadow-emerald-500">
        <List className="w-full">
          {information.map((info, index) => (
            <List.Item
              key={index}
              className="text-2xl font-bold dark:text-gray-400"
            >
              {info.name}
              <List
                ordered
                nested
                className="text-clip font-mono text-lg font-thin dark:text-gray-200"
              >
                {info.data.map((data, dataIndex) => (
                  <List.Item key={dataIndex}>{data}</List.Item>
                ))}
              </List>
            </List.Item>
          ))}
        </List>
      </Card>
    </>
  );
}
