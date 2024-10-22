"use client";
import { useState } from "react";
import {
  Button,
  Checkbox,
  Label,
  Modal,
  FileInput,
  Tooltip,
  Card,
} from "flowbite-react";
import { GrCloudUpload } from "react-icons/gr";
import { Designs } from "./designsList";
import { SearchInput } from "../sub_components/SearchInput";
import { InformationList } from "../sub_components/InformationList";

// end imports

export function ClothingDesigner() {
  const [orderedItem, setOrderedItem] = useState(false);
  const informationContent = [
    {
      name: "How to order?",
      data: [
        "Scroll through items to see which item you like, you can filter and sort them to quickly find your perfect pick",
        "you can also import your own custom design which our team will receive and build according to your specifications",
        "you can also share your designs with friends and family to get more inspiration",
        "click on ther order button and confirm your order to purchase",
        "you can also presave an item you like by clicking the add to wishlist button, to purchase it later",
        "you can contact our team if you face any trouble along the way",
        "+263 773 270 686, support@zw_merch.com",
      ],
    },
  ];

  const [openModal, setOpenModal] = useState(false);
  const [publicDesign, setPublicDesign] = useState(false);
  const designs = [
    {
      item_name: "Sweatshirt",
      item_price_base_currency: "€15",
      item_price_converted_currency: "£12",
      item_category: "menswear, shirt, longsleeve",
    },
    {
      item_name: "T-Shirt",
      item_price_base_currency: "£10",
      item_price_converted_currency: "€12",
      item_category: "menswear, shirt, shortsleeve",
    },
    {
      item_name: "Pants",
      item_price_base_currency: "£15",
      item_price_converted_currency: "€18",
      item_category: "menswear, pants",
    },
    {
      item_name: "Shoes",
      item_price_base_currency: "£20",
      item_price_converted_currency: "€24",
      item_category: "bisexual, footwear",
    },
    {
      item_name: "Shoes",
      item_price_base_currency: "£20",
      item_price_converted_currency: "€24",
      item_category: "bisexual, footwear",
    },
    {
      item_name: "Shoes",
      item_price_base_currency: "£20",
      item_price_converted_currency: "€24",
      item_category: "bisexual, footwear",
    },
    {
      item_name: "Shoes",
      item_price_base_currency: "£20",
      item_price_converted_currency: "€24",
      item_category: "bisexual, footwear",
    },
    {
      item_name: "Shoes",
      item_price_base_currency: "£20",
      item_price_converted_currency: "€24",
      item_category: "bisexual, footwear",
    },
  ];

  return (
    <div className="w-full">
      <div className="flex w-full items-start justify-start gap-5">
        <SearchInput />
        <Button
          onClick={() => setOpenModal(true)}
          className="mb-5 rounded-md bg-blue-400 dark:bg-blue-500"
        >
          <GrCloudUpload size={22} className="mr-1" />
          Upload Custom Design
        </Button>
      </div>

      <div className="flex w-full items-start justify-start gap-5">
        <div className="w-3/4">
          <div className="flex w-full flex-wrap items-center justify-start gap-5">
            {designs &&
              designs.map((design, index) => (
                <Designs
                  key={index}
                  item_name={design.item_name}
                  item_price_base_currency={design.item_price_base_currency}
                  item_price_converted_currency={
                    design.item_price_converted_currency
                  }
                  item_category={design.item_category}
                />
              ))}
            ;
          </div>
        </div>
        <div className="w-1/4">
          {!orderedItem && <InformationList information={informationContent} />}
          {orderedItem && (
            <Card
              className="max-w-sm shadow-sm shadow-blue-500 dark:shadow-emerald-500"
              renderImage={() => (
                <Tooltip content="view design">
                  <a href="/trips/dashboard">
                    {" "}
                    <img
                      width={500}
                      height={500}
                      src="/images/inspirations3.jpg"
                      alt="inspiration 3"
                    />{" "}
                  </a>
                </Tooltip>
              )}
            >
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                RE23401230
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                {" "}
                <span className="text-green-300">First Creation</span> Has been
                received by our team, and is looking amazing!
              </p>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                {" "}
                <span className="text-green-300">+263 773 270 686 </span> Is the
                number to call about any inquires or concerns concerning your
                order. They must have reached out to you by now!
              </p>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                {" "}
                Your order will be ready for collection or delivery in
                approximately <span className="text-green-300">3</span> days.
              </p>
            </Card>
          )}
        </div>
      </div>
      <Modal
        show={openModal}
        size="3xl"
        dismissible
        popup
        onClose={() => setOpenModal(false)}
      >
        <Modal.Header />
        <Modal.Body>
          <div className="space-y-6">
            <h3 className="text-xl font-medium text-emerald-500 dark:text-emerald-400">
              Send us your design
            </h3>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="password" value="Upload your design" />
              </div>
              <Label
                htmlFor="dropzone-file"
                className="flex h-64 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:border-gray-500 dark:hover:bg-gray-600"
              >
                <div className="flex flex-col items-center justify-center pb-6 pt-5">
                  <svg
                    className="mb-4 size-8 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 16"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                    />
                  </svg>
                  <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                    <span className="font-semibold">Click to upload</span>
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    SVG, PNG, JPG or JPEG
                  </p>
                </div>
                <FileInput
                  id="dropzone-file"
                  className="hidden"
                  accept=".svg .png .jpeg .jpg"
                />
              </Label>
            </div>
            <div className="flex justify-between">
              <div className="flex items-center gap-2">
                <Checkbox
                  id="public_design"
                  onClick={() => setPublicDesign(!publicDesign)}
                />
                <Label htmlFor="remember">Make Public</Label>
              </div>
              <a
                href="/"
                className="text-sm text-cyan-700 hover:underline dark:text-cyan-500"
              >
                Public design policy
              </a>
            </div>
            {publicDesign && (
              <span className="text-sm font-light text-yellow-400">
                Public designs will be featured as part of our item catalogue
                and resold, your username will be embroided onto the print outs.
              </span>
            )}
            <div className="w-full">
              <Button>Send Design and request quotation</Button>
            </div>
            <div className="flex justify-between text-sm font-medium text-gray-500 dark:text-gray-300">
              Having issues?&nbsp;
              <a
                href="/"
                className="text-cyan-700 hover:underline dark:text-cyan-500"
              >
                Contact Us
              </a>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}
