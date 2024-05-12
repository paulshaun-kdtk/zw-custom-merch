import { React } from "react";
// import NavBar from "../layouts/NavBar";

const LandingPage = () => {
  return (
    <main
      className="min-h-screen gap-2 bg-slate-200  dark:bg-gray-800"
      style={{
        backgroundImage: "url('/images/landing/landing-bg-1.jpeg')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div
        className="min-h-screen gap-4"
        style={{ backdropFilter: "blur(2px)" }}
      >
        <h3 className="mb-4 py-5 text-center text-lg font-semibold text-gray-900 dark:text-white">
          Murare Car Rental Shuttle Tracking Service
        </h3>

        <div
          className="mx-auto mb-2 mt-8 grid rounded-lg border border-gray-200 bg-transparent shadow-sm dark:border-gray-700 dark:bg-transparent md:mb-12 md:grid-cols-2"
          style={{
            width: "90%",
            filter: "drop-shadow(0 -6mm 4mm rgb(5 150 105))",
          }}
        >
          <figure
            className="flex flex-col items-center justify-center rounded-t-lg border-b border-gray-200 bg-transparent p-8 text-center hover:scale-75 dark:border-gray-700 md:rounded-t-none md:rounded-ss-lg md:border-e "
            style={{ backgroundColor: "rgba(30, 41, 59, 0.4)" }}
          >
            <a href="/">
              <blockquote className="mx-auto mb-4 max-w-2xl text-gray-500 dark:text-gray-400 lg:mb-8">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Sign In
                </h3>
                <p className="my-4 text-blue-200">
                  Log in to your account if you are already registered
                </p>
              </blockquote>
              <figcaption className="flex items-center justify-center ">
                <img
                  className="size-9 rounded-full"
                  src="/images/landing/landing-bg-2.webp"
                  alt="profile"
                />
                <div className="ms-3 space-y-0.5 text-left font-medium rtl:text-right">
                  <div className="text-sm text-white dark:text-gray-400 ">
                    Click me
                  </div>
                </div>
              </figcaption>
            </a>
          </figure>

          <figure
            className="flex flex-col items-center justify-center border-b border-gray-200 bg-transparent p-8 text-center hover:scale-75 dark:border-gray-700 dark:bg-gray-800 md:rounded-se-lg"
            style={{ backgroundColor: "rgba(30, 41, 59, 0.4)" }}
          >
            <a href="/signup">
              <blockquote className="mx-auto mb-4 max-w-2xl text-gray-500 dark:text-gray-400 lg:mb-8">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Sign Up
                </h3>
                <p className="my-4 text-blue-200">
                  New to this app? Send a request to your organization for log
                  in credentials
                </p>
              </blockquote>
              <figcaption className="flex items-center justify-center ">
                <img
                  className="size-9 rounded-full"
                  src="/images/landing/landing-bg-2.webp"
                  alt="profile"
                />
                <div class="ms-3 space-y-0.5 text-left font-medium dark:text-white rtl:text-right">
                  <div className="text-sm text-white">Click me</div>
                </div>
              </figcaption>
            </a>
          </figure>

          <figure
            className="flex flex-col items-center justify-center border-b border-gray-200 bg-transparent p-8 text-center hover:scale-75 dark:border-gray-700 dark:bg-gray-800 md:rounded-es-lg md:border-b-0 md:border-e"
            style={{ backgroundColor: "rgba(30, 41, 59, 0.4)" }}
          >
            <a href="#">
              <blockquote className="mx-auto mb-4 max-w-2xl text-gray-500 dark:text-gray-400 lg:mb-8">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  About Service
                </h3>
                <p className="my-4 text-blue-200">
                  This service was built and designed to help organizations to
                  track their assets and vehicles. It integrates with third
                  party applications to provide vital information about their
                  service providers, workers and assets.
                </p>
              </blockquote>
              <figcaption className="flex items-center justify-center ">
                <img
                  className="size-9 rounded-full"
                  src="/images/landing/landing-bg-2.webp"
                  alt="profile"
                />
                <div className="ms-3 space-y-0.5 text-left font-medium dark:text-white rtl:text-right">
                  <div className="text-sm text-green-200">Read More ...</div>
                </div>
              </figcaption>
            </a>
          </figure>
          <figure
            className="flex flex-col items-center justify-center rounded-b-lg border-gray-200 bg-transparent p-8 text-center hover:scale-75 dark:border-gray-700 dark:bg-gray-800 md:rounded-se-lg"
            style={{ backgroundColor: "rgba(30, 41, 59, 0.4)" }}
          >
            <a href="https://petalmafrica.com" target="__blank">
              <blockquote className="mx-auto mb-4 max-w-2xl text-gray-500 dark:text-gray-400 lg:mb-8">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  More products
                </h3>
                <p class="my-4 text-blue-200">
                  Contact us to discover more products and services that we
                  offer to help you streamline and sufficiently manage your
                  business processess. Visit our site at: <i> Petalm africa </i>{" "}
                  or
                </p>
              </blockquote>
              <figcaption className="flex items-center justify-center ">
                <img
                  className="size-9 rounded-full"
                  src="/images/landing/landing-bg-2.webp"
                  alt="profile"
                />
                <div class="ms-3 space-y-0.5 text-left font-medium dark:text-white rtl:text-right">
                  <div className="text-sm text-green-200">
                    <a href="organization/contacts/" target="_blank">
                      Email Us{" "}
                    </a>
                  </div>
                </div>
              </figcaption>
            </a>
          </figure>
        </div>
        <a href="https://toolbox.ocecy.com" className="mb-4">
          {" "}
          <p className="mb-4 text-center text-blue-600">
            <i> © Oacey 2024</i>
          </p>
        </a>
      </div>
    </main>
  );
};

export default LandingPage;
