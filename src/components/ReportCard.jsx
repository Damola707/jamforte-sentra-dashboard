export default function ReportCard({ highlighted }) {
  return (
    <div
      className={`p-5 rounded-xl shadow-sm transition
        ${highlighted
          ? "bg-gradient-to-br from-sentra-dashboardAccent to-sentra-light text-white"
          : "bg-white hover:shadow-md"}
      `}
    >
      <h3 className="text-base font-semibold mb-1">Report3</h3>
      <p className={`text-sm mb-6 ${highlighted ? "text-white/90" : "text-gray-500"}`}>
        14 Mb
      </p>

      <div className={`flex justify-between text-sm ${highlighted ? "text-white/80" : "text-gray-500"}`}>
        <span>Robert Jonson</span>
        <span>3 w ago</span>
      </div>
    </div>
  );
}
