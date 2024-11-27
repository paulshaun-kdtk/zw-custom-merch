"use client";

import {
  Button,
  Checkbox,
  Label,
  Modal,
  TextInput,
  Textarea,
} from "flowbite-react";
import { useRef } from "react";
import { MdPayments } from "react-icons/md";

export function OrderFormComponent({ openModal, setOpenModal }) {
  const emailInputRef = useRef < HTMLInputElement > null;

  return (
    <Modal
      show={openModal}
      size="5xl"
      dismissible
      popup
      onClose={() => setOpenModal(false)}
      initialFocus={emailInputRef}
    >
      <Modal.Header />
      <Modal.Body>
        <div className="space-y-6">
          <h3 className="text-center text-2xl font-bold text-slate-800 dark:text-slate-300">
            Create Order
          </h3>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="customer" value="Customer Name" />
            </div>
            <TextInput id="customer" name="customer" required />
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="return_customer" />
            <Label htmlFor="return_customer">Is return customer</Label>
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="item_sold" value="Item Sold" />
            </div>
            <TextInput id="item_sold" name="text" type="text" required />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="item_sold" value="Item Sold Price" />
            </div>
            <TextInput id="item_sold" name="text" type="text" required />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="item_sold" value="Item Cost" />
            </div>
            <TextInput id="item_sold" name="text" type="text" required />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="supplier" value="Supplier" />
            </div>
            <TextInput id="supplier" name="text" type="text" required />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="sold_from" value="Sold From" />
            </div>
            <TextInput id="sold_from" name="sold_from" type="text" required />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="date" value="Sold Date" />
            </div>
            <TextInput id="sold_date" name="text" type="date" required />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="description" value="Order Description" />
            </div>
            <Textarea id="description" name="text" type="text" />
          </div>
          <div className="flex items-center justify-evenly">
            <div className="flex items-center gap-2">
              <Checkbox id="in_progress" />
              <Label htmlFor="in_progress">In Progress</Label>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox id="completed" />
              <Label htmlFor="completed">Completed</Label>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox id="cancelled" />
              <Label htmlFor="cancelled">Cancelled</Label>
            </div>
          </div>
          <div className="w-full">
            <Button color="green">
              <MdPayments
                className="mr-2 text-gray-500 dark:text-gray-300"
                size={24}
              />
              Create Order
            </Button>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}
