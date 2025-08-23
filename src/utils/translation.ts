import type { Translation } from "@/types";

/**
 * Get nested translation value by dot notation path
 * @param obj - Translation object
 * @param path - Dot notation path (e.g., "common.dashboard")
 * @returns The translation value or the path if not found
 */
export const getNestedTranslation = (
  obj: Translation,
  path: string
): string => {
  const keys = path.split(".");
  let value: any = obj;

  for (const key of keys) {
    if (value && typeof value === "object" && key in value) {
      value = value[key];
    } else {
      return path; // Return the path if translation not found
    }
  }

  return typeof value === "string" ? value : path;
};

/**
 * Format translation key for stats
 * @param title - The stat title
 * @returns Formatted key for translation
 */
export const formatStatKey = (title: string): string => {
  return title.toLowerCase().replace(/\s+/g, "");
};

/**
 * Format navigation key for translation
 * @param title - The navigation title
 * @returns Formatted key for translation
 */
export const formatNavigationKey = (title: string): string => {
  return title.toLowerCase().replace(/\s+/g, "");
};

/**
 * Get responsive table cell classes
 * @param isHeader - Whether this is a table header
 * @param isHiddenOnMobile - Whether to hide on mobile
 * @returns CSS classes for responsive table cells
 */
export const getResponsiveTableCellClasses = (
  isHeader: boolean = false,
  isHiddenOnMobile: boolean = false
): string => {
  const baseClasses = isHeader
    ? "font-semibold text-gray-700 dark:text-gray-300"
    : "text-gray-600 dark:text-gray-400";
  
  return isHiddenOnMobile ? `${baseClasses} hidden sm:table-cell` : baseClasses;
};
