export type Theme = "light" | "dark";
export type ThemeMode = Theme;

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  message?: string;
}

export interface NavItem {
  label: string;
  path: string;
  icon?: string;
}