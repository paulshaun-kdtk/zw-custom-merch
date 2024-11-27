"use client";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Navbar, Button, Avatar, Dropdown, Modal } from "flowbite-react";
import { GrCloudUpload } from "react-icons/gr";
import { IoIosHome } from "react-icons/io";
import { CgOpenCollective } from "react-icons/cg";
import { SiCloudfoundry } from "react-icons/si";
import {
  HiCog,
  HiLogout,
  HiViewGrid,
  HiOutlineExclamationCircle,
} from "react-icons/hi";
import { DesignModal } from "../main_components/DesignModal";
import { ProfileDrawer } from "../main_components/profileDrawer";
import { SettingsDrawer } from "../main_components/settingsDrawer";
import { Link, useNavigate } from "react-router-dom";
import { logoutThunk } from "../../redux/auth/loginThunk";

// end imports

function NavBar() {
  const [openModal, setOpenModal] = useState(false);
  const [openLogoutModal, setOpenLogoutModal] = useState(false);
  const [openSettingsDrawer, setOpenSettingsDrawer] = useState(false);
  const [openProfileDrawer, setOpenProfileDrawer] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logoutThunk())
      .unwrap()
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.error("Failed to log out:", error);
      });
  };

  return (
    <>
      <Navbar fluid rounded className="bg-gray-200 dark:bg-gray-900">
        <Link to={"/home"}>
          <Navbar.Brand>
            <img
              src="/logos/zw_merch_logo.png"
              className="mr-3 h-6 sm:h-9"
              alt="Murare Logo"
            />
            <span className="self-center whitespace-nowrap text-xl font-semibold text-blue-500 dark:text-white">
              ZW Custom Merch
            </span>
          </Navbar.Brand>
        </Link>
        <div className="flex md:order-2">
          <Button
            onClick={() => setOpenModal(true)}
            className="mr-2 rounded-md bg-blue-400 dark:bg-blue-500"
            size="sm"
          >
            <GrCloudUpload size={22} className="mr-1" />
            Upload Custom Design
          </Button>
          <Navbar.Toggle />
          <Dropdown
            label=""
            dismissOnClick={false}
            renderTrigger={() => (
              <span className="m-auto cursor-pointer">
                <Avatar
                  img="/assets/carousel-2.svg"
                  status="online"
                  rounded
                  statusPosition="bottom-right"
                />
              </span>
            )}
          >
            <Dropdown.Header>
              <span className="block text-sm">Shaun Test</span>
              <span className="block truncate text-sm font-medium">
                shaun@flowbite.com
              </span>
            </Dropdown.Header>
            <Dropdown.Item
              icon={HiViewGrid}
              onClick={() => setOpenProfileDrawer(true)}
            >
              Profile
            </Dropdown.Item>
            <Dropdown.Item
              icon={HiCog}
              onClick={() => setOpenSettingsDrawer(true)}
            >
              Utilities
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item
              icon={HiLogout}
              onClick={() => {
                setOpenLogoutModal(true);
              }}
            >
              Sign out
            </Dropdown.Item>
          </Dropdown>
        </div>
        <Navbar.Collapse className="">
          <Link to={"/home"}>
            <Navbar.Link className="flex justify-evenly" active>
              <IoIosHome className="mr-1" size={16} />
              Home
            </Navbar.Link>
          </Link>

          <Link to={"/trips/drivers"}>
            <Navbar.Link className="flex justify-evenly">
              <SiCloudfoundry size={16} className="mr-1" />
              Your Designs
            </Navbar.Link>
          </Link>
          <Link to={"/trips/drivers"}>
            <Navbar.Link href="/trips/drivers" className="flex justify-evenly">
              <CgOpenCollective className="mr-1" size={18} />
              Order History
            </Navbar.Link>
          </Link>
        </Navbar.Collapse>
      </Navbar>
      <DesignModal openModal={openModal} setOpenModal={setOpenModal} />
      <SettingsDrawer
        isOpen={openSettingsDrawer}
        setIsOpen={setOpenSettingsDrawer}
      />
      <ProfileDrawer
        isOpen={openProfileDrawer}
        setIsOpen={setOpenProfileDrawer}
      />
      <Modal
        show={openLogoutModal}
        size="md"
        onClose={() => setOpenLogoutModal(false)}
        dismissible
        popup
      >
        <Modal.Header />
        <Modal.Body>
          <div className="text-center">
            <HiOutlineExclamationCircle className="mx-auto mb-4 size-14 text-gray-400 dark:text-gray-200" />
            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
              Are you sure you want to sign out?
            </h3>
            <div className="flex justify-center gap-4">
              <Button color="failure" onClick={handleLogout}>
                {"Yes, I'm sure"}
              </Button>
              <Button color="gray" onClick={() => setOpenLogoutModal(false)}>
                No, cancel
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default NavBar;
