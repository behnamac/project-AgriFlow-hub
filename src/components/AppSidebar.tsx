import { NavLink, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  Inbox,
  FileText,
  Library,
  Settings,
  Building2,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";

const navigationItems = [
  { title: "Dashboard", url: "/", icon: LayoutDashboard },
  { title: "Document Inbox", url: "/inbox", icon: Inbox },
  { title: "Document Library", url: "/library", icon: Library },
  { title: "Settings", url: "/settings", icon: Settings },
];

export function AppSidebar() {
  const { collapsed } = useSidebar();
  const location = useLocation();

  const getNavClassName = (path: string) => {
    const isActive = location.pathname === path;
    return `flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
      isActive
        ? "bg-blue-100 text-blue-700 font-medium"
        : "text-gray-700 hover:bg-gray-100"
    }`;
  };

  return (
    <Sidebar
      className={`border-r border-gray-200 bg-white ${
        collapsed ? "w-16" : "w-64"
      }`}
    >
      <SidebarContent className="p-3 sm:p-4">
        <div className="flex items-center gap-2 mb-6 sm:mb-8 px-2">
          <Building2 className="h-6 w-6 sm:h-8 sm:w-8 text-green-600" />
          {!collapsed && (
            <div>
              <h1 className="text-lg sm:text-xl font-bold text-gray-900">AgriFlow</h1>
              <p className="text-xs sm:text-sm text-gray-500">Agricultural Logistics</p>
            </div>
          )}
        </div>

        <SidebarGroup>
          <SidebarGroupLabel className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
            Navigation
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-1">
              {navigationItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink
                      to={item.url}
                      className={getNavClassName(item.url)}
                    >
                      <item.icon className="h-4 w-4 sm:h-5 sm:w-5" />
                      {!collapsed && <span className="text-sm sm:text-base">{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
