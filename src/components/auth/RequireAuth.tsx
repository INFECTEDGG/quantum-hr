import type { ReactNode } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { getCurrentUser, type AuthRole } from "@/lib/auth";

type RequireAuthProps = {
  allowedRoles?: AuthRole[];
  children: ReactNode;
};

const RequireAuth = ({ allowedRoles, children }: RequireAuthProps) => {
  const location = useLocation();
  const user = getCurrentUser();

  if (!user) {
    return <Navigate to="/login" replace state={{ from: location.pathname }} />;
  }

  if (allowedRoles && !allowedRoles.includes(user.role)) {
    return <Navigate to={user.role === "admin" ? "/admin" : "/portal"} replace />;
  }

  return <>{children}</>;
};

export default RequireAuth;
