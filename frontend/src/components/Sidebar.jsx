import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, CreditCard, Plane, CheckSquare, Settings, PhoneCall } from "lucide-react";

const navigation = [
  { name: "Home", icon: Home, path: "/" },
  { name: "Expenses", icon: CreditCard, path: "/expenses" },
  { name: "Trips", icon: Plane, path: "/trips" },
  { name: "Approvals", icon: CheckSquare, path: "/approvals" },
  { name: "Settings", icon: Settings, path: "/settings" },
  { name: "Support", icon: PhoneCall, path: "/support" },
];

function Sidebar() {
  const location = useLocation();

  return (
    <div id="leftside" className="w-64 h-screen bg-[#242424] p-6 flex flex-col ml-[30px]">
      <div className="flex items-center gap-4 mb-8">
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-16%20123331-nQm996l2xFUU1WiKPaRoRs6aW8C2tW.png"
          alt="Profile"
          className="w-12 h-12 rounded-full"
        />
        <span className="text-gray-300">Janice Chandler</span>
      </div>

      <nav className="flex-1 space-y-2">
        {navigation.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            className={`w-full flex items-center gap-3 p-2 rounded-md text-left ${
              location.pathname === item.path ? "text-teal-400 bg-gray-700" : "text-gray-400 hover:bg-gray-700"
            }`}
          >
            <item.icon className="w-5 h-5" />
            {item.name}
          </Link>
        ))}
      </nav>

      <div className="mt-auto">
        <img src="/placeholder.svg" alt="Logo" className="h-8" />
      </div>
    </div>
  );
}

export default Sidebar;
