import { Outlet } from "react-router-dom";

export default function AuthLayout() {
  return (
    <div className="saventh-auth">
      <div className="saventh-auth__container">
        <Outlet />
      </div>
    </div>
  );
}
