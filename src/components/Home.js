"use client";
import NavBar from "./layouts/NavBar";
import { RecentTripsTable } from "./main_components/RecentTripsTable";
import { ClothingDesigner } from "./main_components/designInterface";

// end imports

function Home() {
  return (
    <main className="min-h-screen gap-2 bg-slate-50  dark:bg-gray-800">
      <NavBar />
      <div className="mt-2 px-5">
        <p className="text-center text-2xl font-semibold text-cyan-600 dark:text-gray-300">
          Literally, own your look.
        </p>

        <div className="my-5 w-full">
          <ClothingDesigner />
        </div>

        <div className="mt-5 w-full">
          <h4 className="mb-2 text-center text-xl font-semibold text-gray-600 dark:text-gray-200">
            {" "}
            Active Orders{" "}
          </h4>
          <RecentTripsTable />
        </div>
      </div>
    </main>
  );
}

export default Home;
