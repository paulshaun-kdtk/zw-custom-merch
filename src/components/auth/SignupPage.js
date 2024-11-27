"use client";
import {
  Button,
  Checkbox,
  Label,
  TextInput,
  DarkThemeToggle,
} from "flowbite-react";

export function SignupPage() {
  return (
    <main className="min-h-screen gap-2 dark:bg-gray-800">
      <div
        style={{
          top: "0",
          right: "0",
          position: "fixed",
          display: "flex",
        }}
      >
        <DarkThemeToggle />
      </div>

      <div className="m-auto max-w-3xl p-5">
        <h3 className="mb-5 text-center text-lg font-bold text-gray-900 dark:text-white">
          {" "}
          Request An Account
        </h3>

        <form className="flex w-full flex-col gap-4 border-4 border-double border-green-200 bg-white p-5 dark:bg-gray-600">
          <div>
            <div className="mb-2 block">
              <Label htmlFor="name" value="Your Full Name" />
            </div>
            <TextInput
              id="name"
              type="text"
              placeholder="eg. Kudzai Shaun Example"
              required
              shadow
            />
          </div>

          <div>
            <div className="mb-2 block">
              <Label htmlFor="email2" value="Your Email" />
            </div>
            <TextInput
              id="email2"
              type="email"
              placeholder="eg. name@email.com"
              required
              shadow
            />
          </div>

          <div>
            <div className="mb-2 block">
              <Label htmlFor="id_number" value="Your National Id Number" />
            </div>
            <TextInput
              id="id_number"
              type="text"
              placeholder="eg. 013456789A10"
              required
              shadow
            />
          </div>

          <div>
            <div className="mb-2 block">
              <Label htmlFor="phone_number" value="Your Phone Number" />
            </div>
            <TextInput
              id="phone_number"
              type="text"
              placeholder="eg. +(111) 22 333 4444"
              required
              shadow
            />
          </div>

          <div>
            <div className="mb-2 block">
              <Label
                htmlFor="reporting_manager"
                value="Your Line Manager's Email Address"
              />
            </div>
            <TextInput
              id="reporting_manager"
              type="email"
              placeholder="eg. kudzaimanager@example.com"
              required
              shadow
            />
          </div>

          <div className="flex items-center gap-2">
            <Checkbox id="agree" required />
            <Label htmlFor="agree" className="flex">
              I agree with the&nbsp;
              <a
                href="/app/terms/usage_terms"
                className="text-cyan-600 hover:underline dark:text-cyan-500"
              >
                terms of use
              </a>
            </Label>
          </div>
          <Button type="submit">Request Account Activation </Button>
        </form>
        <Label className="mt-1 flex justify-end">
          Have an active account?&nbsp;
          <a
            href="/"
            className="text-cyan-600 hover:underline dark:text-cyan-500"
          >
            Login
          </a>
        </Label>
      </div>
    </main>
  );
}
