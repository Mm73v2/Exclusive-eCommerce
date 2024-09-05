import { Navigate } from "react-router-dom";
import getUser from "../../utils/getUser";

const ProtectedRoute = ({ children }) => {
  const user = getUser();

  if (!user) return <Navigate to="/login" />;

  return <>{children}</>;
};

export default ProtectedRoute;
