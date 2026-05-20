import { Link } from "react-router-dom";
import { PrimaryBtn } from "../../components/common/AppButton";
// import AppButton from "../../components/common/AppButton";

export default function Done() {
  return (
    <div className="sav-page text-center">
      <div className="sav-success">
        <div className="sav-success__icon">✓</div>
      </div>

      <h2 className="sav-page__title mt-3">Account Created</h2>
      <p className="sav-page__desc">
        Your Saventh account has been created successfully.
      </p>

      <Link to="/dashboard">
        <PrimaryBtn
          className="primary-btn"
          text={"Go to Dashboard"}
        />
      </Link>

      <div className="sav-bottom-text mt-4">
        <Link to="/sign-in">Sign In</Link>
      </div>
    </div>
  );
}
