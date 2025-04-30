import { Navigate } from "react-router-dom";
import { useAuth } from "../../store/AuthContext";

const PublicOnlyRoute = ({ children }) => {
  const { token } = useAuth();



  
  if (token) {
    return <Navigate to="/home" replace />;
  }

  return children;
};

export default PublicOnlyRoute;
