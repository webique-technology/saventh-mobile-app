import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div className="container py-4">
      <h2>Dashboard</h2>
      <p>This is a demo dashboard page.</p>
      <Link to="/sign-in">Logout</Link>
    </div>
  );
}
