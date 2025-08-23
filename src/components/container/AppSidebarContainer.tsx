import { NavLink, useLocation } from "react-router-dom";
import { Building2 } from "lucide-react";
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
import { NAVIGATION_ITEMS } from "@/constants";
import { useTranslation } from "@/hooks/useTranslation";

export const AppSidebarContainer: React.FC = () => {
  const { state } = useSidebar();
  const collapsed = state === "collapsed";
  const location = useLocation();
  const { t } = useTranslation();

  const getNavClassName = (path: string) => {
    const isActive = location.pathname === path;
    return `flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
      isActive
        ? "bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 font-medium"
        : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
    }`;
  };

  return (
    <Sidebar
      className={`border-r border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 ${
        collapsed ? "w-16" : "w-64"
      }`}
    >
      <SidebarContent className="p-3 sm:p-4">
        <div className="flex items-center gap-2 mb-6 sm:mb-8 px-2">
          <Building2 className="h-6 w-6 sm:h-8 sm:w-8 text-green-600" />
          {!collapsed && (
            <div>
              <h1 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">
                {t("company.name")}
              </h1>
              <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                {t("company.tagline")}
              </p>
            </div>
          )}
        </div>

        <SidebarGroup>
          <SidebarGroupLabel className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">
            Navigation
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-1">
              {NAVIGATION_ITEMS.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink
                      to={item.url}
                      className={getNavClassName(item.url)}
                    >
                      <item.icon className="h-4 w-4 sm:h-5 sm:w-5" />
                      {!collapsed && (
                        <span className="text-sm sm:text-base">
                          {t(
                            `common.${item.title
                              .toLowerCase()
                              .replace(/\s+/g, "")}`
                          )}
                        </span>
                      )}
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
};
