// src/components/AppSidebar.tsx
import {
    Sidebar,
    SidebarContent,
    SidebarMenu,
    SidebarMenuItem,
    SidebarMenuButton,
    SidebarProvider,
    SidebarTrigger,
    SidebarGroup,
    SidebarGroupLabel,
    SidebarGroupContent
  } from "@/components/ui/sidebar";
  import { Home, UserPlus} from "lucide-react";
  import { Link } from "react-router-dom";
  
  export default function AppSidebar() {
    return (
      <SidebarProvider>
        <Sidebar>
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel>Main</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild isActive>
                      <Link to="/dashboard" className="flex items-center gap-2">
                        <Home className="h-4 w-4" />
                        Dashboard
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                      <Link to="/add-doctor" className="flex items-center gap-2">
                        <UserPlus className="h-4 w-4" />
                        Appointments
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                      <Link to="/add-doctor" className="flex items-center gap-2">
                        <UserPlus className="h-4 w-4" />
                        Add Doctor
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                      <Link to="/add-doctor" className="flex items-center gap-2">
                        <UserPlus className="h-4 w-4" />
                        Add Doctor
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
          <SidebarTrigger />
        </Sidebar>
      </SidebarProvider>
    );
  }
  