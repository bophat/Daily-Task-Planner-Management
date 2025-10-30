import Dashboard from "./pages/Dashboard";
import { ThemeProvider, useTheme } from "./components/ThemeContext";
import { AuthProvider, useAuth } from "./components/AuthContext";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";

function AppShell() {
  const { isDark } = useTheme();
  const { user } = useAuth();
  return (
    <div className={isDark ? "min-h-screen bg-dark text-white" : "min-h-screen bg-white text-gray-900"}>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={user ? <Dashboard /> : <Navigate to="/login" replace />} />
          <Route path="*" element={<Navigate to={user ? "/" : "/login"} replace />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <ThemeProvider>
        <AppShell />
      </ThemeProvider>
    </AuthProvider>
  );
}
