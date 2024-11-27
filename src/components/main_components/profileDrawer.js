"use client";
import {
  Button,
  Drawer,
  Label,
  Textarea,
  TextInput,
  theme,
} from "flowbite-react";
import { HiCalendar, HiUserAdd, HiOutlineUserGroup } from "react-icons/hi";
import { twMerge } from "tailwind-merge";
import { Link } from "react-router-dom";

export function ProfileDrawer({ isOpen, setIsOpen }) {
  const handleClose = () => setIsOpen(false);

  return (
    <>
      <Drawer
        open={isOpen}
        onClose={handleClose}
        position="right"
        className="shadow-md shadow-blue-500 dark:shadow-emerald-500"
      >
        <Drawer.Header
          title="Profile Information"
          titleIcon={HiOutlineUserGroup}
        />
        <Drawer.Items>
          <form action="#">
            <div className="mb-6 mt-3">
              <Label htmlFor="title" className="mb-2 block">
                Full Name
              </Label>
              <TextInput id="title" name="title" defaultValue="Shaun K" />
            </div>
            <div className="mb-6 mt-3">
              <Label htmlFor="title" className="mb-2 block">
                Email Address
              </Label>
              <TextInput
                id="title"
                name="title"
                type="email"
                disabled
                defaultValue="shaun@zw_custom.com"
              />
            </div>
            <div className="mb-6 mt-3">
              <Label htmlFor="title" className="mb-2 block">
                Date Of Birth
              </Label>
              <TextInput
                id="title"
                name="title"
                type="date"
                value="2004-01-08"
                disabled
              />
            </div>
            <div className="mb-6 mt-3">
              <Label htmlFor="title" className="mb-2 block">
                Physical Address
              </Label>
              <TextInput id="title" name="title" />
            </div>
            <div className="mb-6">
              <Label htmlFor="description" className="mb-2 block">
                Bio
              </Label>
              <Textarea
                id="description"
                name="description"
                defaultValue="I'm a designer and developer from Zimbabwe."
                rows={4}
              />
            </div>
            <div className="mb-6">
              <TextInput
                id="guests"
                name="guests"
                placeholder="Add contact numbers"
                type="tel"
                rightIcon={() => (
                  <Button
                    size="sm"
                    className="[&>span]:items-center [&>span]:px-2 [&>span]:py-0"
                  >
                    <HiUserAdd className="mr-2" />
                    Add
                  </Button>
                )}
                theme={{
                  field: {
                    rightIcon: {
                      base: twMerge(
                        theme.textInput.field.rightIcon.base,
                        "pointer-events-auto",
                      ),
                    },
                  },
                }}
              />
            </div>
            <Button className="w-full">
              <HiCalendar className="mr-2" />
              Update Profile
            </Button>
          </form>
        </Drawer.Items>

        <Link to="/kdtk/admin/" className="mb-0 flex justify-end">
          <span className="text-blue-500 hover:underline dark:text-emerald-500">
            Admin Panel
          </span>
        </Link>
      </Drawer>
    </>
  );
}
