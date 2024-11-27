"use client";

import {
  Button,
  Drawer,
  Label,
  Textarea,
  TextInput,
  DarkThemeToggle,
  Dropdown,
  Checkbox,
  Select,
} from "flowbite-react";
import { HiCog } from "react-icons/hi";
import { HiEnvelope } from "react-icons/hi2";

export function SettingsDrawer({ isOpen, setIsOpen }) {
  const handleClose = () => setIsOpen(false);

  return (
    <>
      <Drawer
        open={isOpen}
        onClose={handleClose}
        position="left"
        className="shadow-md shadow-blue-500 dark:shadow-emerald-500"
      >
        <Drawer.Header title="Utilities" titleIcon={HiCog} />
        <Drawer.Items>
          <form action="#">
            <div className="mb-6 mt-3 flex flex-row flex-wrap justify-between gap-5">
              <div>
                <Label htmlFor="theme" className="mb-2 block">
                  Theme Mode
                </Label>
                <DarkThemeToggle />
              </div>
              <div>
                <Label htmlFor="preferences" className="mb-2 block">
                  Listing Preferences
                </Label>
                <Dropdown
                  dismissOnClick={false}
                  renderTrigger={() => (
                    <span className="m-auto flex cursor-pointer justify-end">
                      <Button color="gray">Select</Button>
                    </span>
                  )}
                >
                  <Dropdown.Item>
                    <Checkbox className="mr-2" /> All items
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <Checkbox className="mr-2" /> Female
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <Checkbox className="mr-2" /> Male
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <Checkbox className="mr-2" /> Kids
                  </Dropdown.Item>
                </Dropdown>
              </div>
              <div>
                <Label htmlFor="email" className="mb-2 block">
                  Unlist All Public Designs
                </Label>
                <Checkbox />
              </div>
              <div>
                <Label htmlFor="email" className="mb-2 block">
                  Mail Notifications
                </Label>
                <Checkbox />
              </div>
            </div>

            <div className="mb-5 flex w-full justify-start">
              <Button>Update Preferences</Button>
            </div>
            <div className="flex w-full items-center justify-center">
              {" "}
              <HiEnvelope size={22} className="mr-2 dark:text-gray-100" />
              <span className="text-xl dark:text-gray-100">Contact Us</span>
            </div>
            <div className="mb-6 mt-3">
              <Label htmlFor="query_type" className="mb-2 block">
                Query Type
              </Label>
              <Select id="query_type" name="query_type">
                <option value="help">Help</option>
                <option value="report">Bug Report</option>
                <option value="feedback">Feedback</option>
                <option value="other">Other</option>
              </Select>
            </div>
            <div className="mb-6">
              <Label htmlFor="subject" className="mb-2 block">
                Subject
              </Label>
              <TextInput
                id="subject"
                name="subject"
                placeholder="Let us know how we can help you"
              />
            </div>
            <div className="mb-6">
              <Label htmlFor="message" className="mb-2 block">
                Your message
              </Label>
              <Textarea
                id="message"
                name="message"
                placeholder="Your message..."
                rows={4}
              />
            </div>
            <div className="mb-6">
              <Button type="submit" className="w-full" color="green">
                Send message
              </Button>
            </div>
            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
              <a
                href="mailto:info@company.com"
                target="__blank"
                className="hover:underline"
              >
                dev@zw_custom.com
              </a>
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              <a
                href="tel:263773270686"
                target="__blank"
                className="hover:underline"
              >
                263 773 270 686
              </a>
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              <a href="/" className="hover:underline" target="__blank">
                Facebook
              </a>
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              <a href="/" className="hover:underline">
                Instagram
              </a>
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              <a
                href="tel:2124567890"
                target="__blank"
                className="hover:underline"
              >
                Whatsapp
              </a>
            </p>
          </form>
        </Drawer.Items>
      </Drawer>
    </>
  );
}
