export type ThemeMode = "light" | "dark";

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