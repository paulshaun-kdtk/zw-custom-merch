import { Modal, Label, Button, FileInput, Checkbox } from "flowbite-react";
import { useState } from "react";

export function DesignModal({ openModal = false, setOpenModal }) {
  const [publicDesign, setPublicDesign] = useState(false);
  return (
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
              <Label
                htmlFor="password"
                value="You can upload more than one example"
              />
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
              Public designs will be featured as part of our item catalogue and
              resold, your username will be embroided onto the print outs.
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
  );
}
