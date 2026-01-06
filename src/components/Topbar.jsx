export default function Topbar() {
  return (
    <div className="flex justify-between items-center mb-8">
      <div>
        <h1 className="text-xl font-semibold">
          Welcome,{" "}
          <span className="text-sentra-dashboardAccent">Mane</span>
        </h1>
        <p className="text-sm text-gray-500 mt-1">
          Your Assessments
        </p>
      </div>

      <button className="bg-sentra-dashboardAccent text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:opacity-90 transition">
        + Start Assessment
      </button>
    </div>
  );
}
