import { ChevronRight} from "lucide-react"
import { Route, Routes } from "react-router-dom";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar"

export function NavMain({
  items,
}){
  return (
    <SidebarGroup>
      <SidebarGroupLabel>Admin</SidebarGroupLabel>
      <SidebarMenu className="flex gap-3">
        {items.map((item, index) => (
          <SidebarMenuItem key={index}>
          <a href={item.url}>
          <SidebarMenuButton className="flex gap-3 hover:bg-blue-100 hover:transition-all duration-200 ease-in-out" tooltip={item.title}>
                <h2 className="text-blue-400">{item.icon && <item.icon className="w-[20px]"/>}</h2>
                <span className="text-[16px] font-semibold">{item.title}</span>
          </SidebarMenuButton>
          </a>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  )
}
