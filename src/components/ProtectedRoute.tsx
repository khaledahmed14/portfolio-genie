import { Navigate, Outlet } from "react-router-dom";
import { getToken } from "../utils/storage";

export default function ProtectedRoute() {
  if (!getToken()) {
    return <Navigate to="/" replace />;
  }
  return <Outlet />;
}