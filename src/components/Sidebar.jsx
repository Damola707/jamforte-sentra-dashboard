import {
  LayoutDashboard,
  BookOpen,
  Eye,
  FileText,
  Target,
} from "lucide-react";

const items = [
  { icon: LayoutDashboard, label: "Dashboard", active: true },
  { icon: BookOpen, label: "Book Assessment" },
  { icon: Eye, label: "Observability News" },
  { icon: FileText, label: "Assessment Reports" },
  { icon: Target, label: "Plan PoV" },
];

export default function Sidebar() {
  return (
    <aside className="w-64 bg-white h-screen px-6 py-6 border-r">
      <h1 className="text-xl font-semibold mb-8 tracking-wide">SENTRA</h1>

      <nav className="space-y-2">
        {items.map(({ icon: Icon, label, active }) => (
          <div
            key={label}
            className={`flex items-center gap-3 px-4 py-2 rounded-lg text-sm cursor-pointer transition
              ${active
                ? "bg-sentra-dashboardBg text-sentra-dashboardAccent font-medium"
                : "text-gray-600 hover:bg-sentra-dashboardBg"}
            `}
          >
            <Icon size={18} />
            {label}
          </div>
        ))}
      </nav>
    </aside>
  );
}
