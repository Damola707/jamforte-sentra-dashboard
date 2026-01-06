import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import ReportCard from "../components/ReportCard";

export default function Dashboard() {
  return (
    <div className="flex bg-sentra-dashboardBg min-h-screen">
      <Sidebar />

      <main className="flex-1 px-8 py-6">
        <Topbar />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          <ReportCard highlighted />
          <ReportCard />
          <ReportCard />
          <ReportCard />
          <ReportCard />
          <ReportCard />
          <ReportCard />
        </div>
      </main>
    </div>
  );
}
