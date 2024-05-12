"use client";
import NavBar from "./layouts/NavBar";
import { Card } from "flowbite-react";
import BarChart from "./main_dashboard_components/BarChart";
import { RecentTripsTable } from "./main_dashboard_components/RecentTripsTable";
import { Tooltip } from "flowbite-react";

// end imports

function Home() {
  return (
    <main className="min-h-screen gap-2 bg-slate-50  dark:bg-gray-800">
      <NavBar />
      <div className="mt-2 px-5">
        <p className="text-xl font-semibold text-cyan-600 dark:text-green-300">
          Welcome to your dashboard
        </p>

        <div
          className="mb-2 mt-3 flex"
          style={{ justifyContent: "space-between" }}
        >
          <div style={{ width: "72%" }}>
            <BarChart />
          </div>
          <div style={{ width: "25%" }}>
            <Card
              className="max-w-sm"
              renderImage={() => (
                <Tooltip content="go to trips">
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
                Kudzai Shaun Test
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                Is your most active driver this week with{" "}
                <span className="text-green-300">12</span> completed trips and{" "}
                <span className="text-green-300">6</span> submitted reports. He
                drives the:{" "}
                <span className="text-green-300">TOYOTA QUANTAUM AFG 769 </span>
              </p>
            </Card>
          </div>
        </div>

        <div className="mt-3" style={{ width: "100%" }}>
          <h4 className="mb-2 text-center text-xl font-semibold text-cyan-600 dark:text-green-300">
            {" "}
            Recent Trips{" "}
          </h4>
          <RecentTripsTable />
        </div>
      </div>
    </main>
  );
}

export default Home;
