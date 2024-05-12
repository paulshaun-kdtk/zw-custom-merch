import MapInterface from "./trip_components/MapContainer";
import NavBar from "./layouts/NavBar";
import StatisticCards from "./trip_components/StatCards";
import DashboardTables from "./trip_components/DashboardTables";

function Dashboard() {
  return (
    <main className="min-h-screen gap-2 bg-slate-50 dark:bg-gray-800">
      <NavBar />
      <StatisticCards />

      <div
        className="flex flex-row px-10"
        style={{
          marginTop: "4%",
          justifyContent: "space-evenly",
          width: "100%",
        }}
      >
        <MapInterface />
        <DashboardTables />
      </div>
    </main>
  );
}

export default Dashboard;
