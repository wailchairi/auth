import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import MainLayout from "./components/MainLayout";
import ProtectedRoute from "./components/protectedroutes/ProtectedRoute";
import PublicOnlyRoute from "./components/protectedroutes/PublicOnlyRoute";
import CategoryDetails from "./pages/CategoryDetails";

function App() {
  return (
    <Routes>
      {/* Public route: login, but redirect if already logged in */}
      <Route path="/" element={
          <PublicOnlyRoute>
            <Login />
          </PublicOnlyRoute>
        }
      />

      {/* Protected routes (require login) */}
      <Route
        element={
          <ProtectedRoute>
            <MainLayout />
          </ProtectedRoute>
        }
      >
        <Route path="/home" element={<Home />} />
        <Route path="category/:id" element={<CategoryDetails />} />
        <Route path="/profile" element={<Profile />} />
      </Route>

      {/* Catch all */}
      <Route path="*" element={<h1>Page doesn't exist</h1>} />
    </Routes>
  );
}

export default App;
