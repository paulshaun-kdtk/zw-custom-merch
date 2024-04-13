import  MapContainer  from "./MapContainer";
import NavBar from "./layouts/NavBar";

function Dashboard() {
  return (
    <main className="min-h-screen gap-2 bg-slate-100 dark:bg-gray-800">
        <NavBar />
        <MapContainer />
    </main>
  );
}

export default Dashboard;
