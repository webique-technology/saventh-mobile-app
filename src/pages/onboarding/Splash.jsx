import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Splash() {
  const navigate = useNavigate();

  useEffect(() => {
    const t = setTimeout(() => navigate("/create-account"), 900);
    return () => clearTimeout(t);
  }, [navigate]);

  return (
    <div className="sav-splash">
      <div className="sav-splash__logo">
        <div className="sav-splash__mark">S</div>
      </div>

      <h1 className="sav-title">Saventh</h1>
      <p className="sav-subtitle">Fintech onboarding</p>
    </div>
  );
}
