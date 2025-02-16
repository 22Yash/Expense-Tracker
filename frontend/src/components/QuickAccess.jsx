import { Link } from "react-router-dom";
import { CreditCard, FileText, Plane, Receipt } from "lucide-react";

const actions = [
  { label: "New expense", icon: CreditCard, path: "/new-expense", color: "bg-purple-600 hover:bg-purple-700" },
  { label: "Add receipt", icon: Receipt, path: "/add-receipt", color: "bg-blue-600 hover:bg-blue-700" },
  { label: "Create report", icon: FileText, path: "/create-report", color: "bg-teal-600 hover:bg-teal-700" },
  { label: "Create trip", icon: Plane, path: "/create-trip", color: "bg-pink-600 hover:bg-pink-700" },
];

function QuickAccess() {
  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold">Quick Access</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {actions.map((action) => (
          <Link
            key={action.label}
            to={action.path}
            className={`flex items-center justify-center p-2 rounded-md text-white ${action.color}`}
          >
            <action.icon className="w-5 h-5 mr-2" />
            + {action.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default QuickAccess;
