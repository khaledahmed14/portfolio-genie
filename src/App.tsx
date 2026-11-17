import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import ProtectedRoute from "./components/ProtectedRoute";
import AuthPage from "./pages/AuthPage";
import ForgotPassword from "./pages/ForgotPasswordPage";
import ForgotPasswordSuccess from "./pages/ForgotPasswordSuccessPage";
import SignUpPage from "./pages/SignUpPage";
import IntakePage from "./pages/IntakePage";
import CustomizePage from "./pages/CustomizePage";
import PreviewPage from "./pages/PreviewPage";
import { ThemeProvider } from "./context/ThemeContext";
import { PortfolioConfigProvider } from "./context/PortfolioConfigContext";
import { IntakeProvider } from "./context/IntakeContext";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        { index: true, element: <AuthPage /> },
        { path: "auth", element: <AuthPage /> },
        { path: "signup", element: <SignUpPage /> },
        { path: "forgot-password", element: <ForgotPassword /> },
        { path: "forgot-password-success", element: <ForgotPasswordSuccess /> },
        {
          element: <ProtectedRoute />,
          children: [
            { path: "intake", element: <IntakePage /> },
            { path: "customize", element: <CustomizePage /> },
            { path: "preview", element: <PreviewPage /> },
          ],
        },
        { path: "*", element: <Navigate to="/" replace /> },
      ],
    },
  ]);

  return (
    <ThemeProvider>
      <PortfolioConfigProvider>
        <IntakeProvider>
          <RouterProvider router={router} />
        </IntakeProvider>
      </PortfolioConfigProvider>
    </ThemeProvider>
  );
}