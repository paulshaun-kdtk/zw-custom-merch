import React from "react";
import { Button, Tooltip } from "flowbite-react";
import { MdOutlinePayments } from "react-icons/md";
import { OrderFormComponent } from "./orderFormModal";
import { FaMoneyBillTransfer, FaMoneyBillWheat } from "react-icons/fa6";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { SiWebmoney } from "react-icons/si";
import { RiMenu2Fill } from "react-icons/ri";
import { SearchInput } from "../sub_components/SearchInput";
export function DisplayTable({
  title = "",
  subtext = "",
  data = [],
  keys = [],
  searchEnabled = true,
  showActionTabs = false,
  actionComponent = Node,
}) {
  const [showOrderModal, setShowOrderModal] = React.useState(false);
  const [showActions, setShowActions] = React.useState(false);
  return (
    <div className="rounded-lg bg-slate-50 p-4 shadow dark:bg-gray-800 sm:p-6 xl:p-8">
      <div className="mb-4 flex items-center justify-between">
        <div className="w-1/3">
          <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
            {title}
          </h3>
          <span className="text-base font-normal text-gray-600 dark:text-gray-400">
            {subtext}
          </span>
        </div>
        <div className="flex w-full flex-wrap items-end justify-end gap-2">
          {searchEnabled && <SearchInput />}
          {showActions && (
            <>
              <Button color="gray">
                <SiWebmoney
                  size={20}
                  className="mr-2 text-gray-500 dark:text-gray-200"
                />
                All Customers
              </Button>
              <Button color="gray">
                <FaMoneyBillTransfer
                  size={20}
                  className="mr-2 text-gray-500 dark:text-gray-200"
                />
                All Transactions
              </Button>
              <Button color="yellow">
                <FaMoneyBillWheat
                  size={20}
                  className="mr-2 text-gray-500 dark:text-gray-200"
                />
                Customer Entry
              </Button>
              <Button color="green" onClick={() => setShowOrderModal(true)}>
                {" "}
                <MdOutlinePayments
                  className="mr-2 text-gray-500 dark:text-gray-200"
                  size={20}
                />{" "}
                Order Entry
              </Button>
            </>
          )}
          {showActionTabs && (
            <Tooltip content="Toggle actions" placement="top-start">
              <Button
                color="transparent"
                onClick={() => setShowActions(!showActions)}
              >
                {!showActions && (
                  <FaEye
                    size={18}
                    className="mr-2 text-gray-500 dark:text-gray-200"
                  />
                )}
                {showActions && (
                  <FaEyeSlash
                    size={18}
                    className="mr-2 text-gray-500 dark:text-gray-200"
                  />
                )}
                <RiMenu2Fill
                  size={18}
                  className="text-gray-500 dark:text-gray-200"
                />
              </Button>
            </Tooltip>
          )}
          {actionComponent && actionComponent}
        </div>
      </div>
      <div className="mt-8 flex flex-col">
        <div className="overflow-x-auto rounded-lg">
          <div className="inline-block min-w-full align-middle">
            <div className="overflow-hidden shadow sm:rounded-lg">
              <div
                data-testid="table-element"
                className="relative overflow-x-auto shadow-md sm:rounded-lg"
              >
                <table className="w-full min-w-full divide-y divide-gray-200 text-left text-sm text-gray-500 dark:divide-gray-600 dark:text-gray-400">
                  <thead className="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                      {keys.map((row, index) => (
                        <th className="px-6 py-3" key={index}>
                          {row}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="bg-white dark:bg-gray-800">
                    {data.map((rows, index) => (
                      <tr
                        data-testid="table-row-element"
                        className="odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700"
                        key={index}
                      >
                        {rows.map((row, index) => (
                          <td className={`px-6 py-4 ${row.styles}`} key={index}>
                            {row.content}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <OrderFormComponent
        openModal={showOrderModal}
        setOpenModal={setShowOrderModal}
      />
    </div>
  );
}
