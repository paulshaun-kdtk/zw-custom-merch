"use client";
import { Button, Label, TextInput, DarkThemeToggle } from "flowbite-react";

export function LoginPage() {
  return (
    <main
      className="min-h-screen gap-2 dark:bg-gray-800"
      style={{
        backgroundImage: "url('/images/zw_merch-variant.png')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
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

      <div className="my-auto p-5" style={{ width: "100%" }}>
        <h3 className="mb-5 text-center text-lg font-bold text-gray-900 dark:text-white">
          {" "}
          Sign In To Your Account
        </h3>

        <form className="mx-auto flex max-w-md flex-col gap-4 border-4 border-double border-green-200 bg-white p-5 dark:bg-gray-600">
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email2" value="Your Email" />
            </div>
            <TextInput id="email2" type="email" required shadow />
          </div>

          <div>
            <div className="mb-2 block">
              <Label htmlFor="password" value="Your Password" />
            </div>
            <TextInput id="password" type="password" required shadow />
          </div>

          <Button type="submit">Submit </Button>
        </form>
        <Label className="mt-1 flex" style={{ paddingLeft: "42%" }}>
          Don't Have an active account?&nbsp;
          <a
            href="/signup"
            className="text-cyan-600 hover:underline dark:text-cyan-500"
          >
            Request For One.
          </a>
        </Label>

        <Label className="mt-1 flex" style={{ paddingLeft: "57%" }}>
          Back To&nbsp;
          <a
            href="/landing"
            className="text-cyan-600 hover:underline dark:text-cyan-500"
          >
            Home
          </a>
        </Label>
      </div>
    </main>
  );
}
