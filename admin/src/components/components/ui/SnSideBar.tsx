import { cn } from "../../lib/utils"
import {
  Home,
  Settings,
  Users,
  BarChart,
  Menu
} from "lucide-react"
import React from "react"
import { useState } from "react"

const links = [
  { name: "Dashboard", href: "#", icon: Home },
  { name: "Users", href: "#", icon: Users },
  { name: "Settings", href: "#", icon: Settings },
  { name: "Analytics", href: "#", icon: BarChart }
]

export default function SnSideBar() {
  const [collapsed, setCollapsed] = useState(false)

  return (
    <div className={cn("h-screen bg-gray-100 border-r transition-all duration-300", collapsed ? "w-20" : "w-64")}>
      <div className="flex items-center justify-between p-4 border-b">
        <span className={cn("text-lg font-semibold", collapsed && "hidden")}>
          Admin
        </span>
        <button onClick={() => setCollapsed(!collapsed)}>
          <Menu />
        </button>
      </div>
      <nav className="flex flex-col gap-1 p-4">
        {links.map((link, index) => (
          <a
            key={index}
            href={link.href}
            className="flex items-center gap-3 text-gray-700 hover:bg-gray-200 p-2 rounded"
          >
            <link.icon className="h-5 w-5" />
            {!collapsed && <span>{link.name}</span>}
          </a>
        ))}
      </nav>
    </div>
  )
}
