import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import AppInput from "../../components/common/AppInput";
import StepProgress from "../../components/common/StepProgress";
import { PrimaryBtn } from "../../components/common/AppButton";
import logo from "../../asstes/images/saventh-logo.png"
import { ArrowLeft } from "lucide-react"

export default function CreateAccount() {
  const navigate = useNavigate();
  const [mobile, setMobile] = useState("");
  const [error, setError] = useState("");

  const submit = (e) => {
    e.preventDefault();
    if (mobile.trim().length !== 10) {
      setError("Enter valid 10 digit mobile number");
      return;
    }
    setError("");
    navigate("/verify-otp", { state: { mobile } });
  };

  return (
    <div className="sav-page d-flex flex-column justify-content-between bg-white">

      {/* Top Header Section */}
      <div className="sav-page__top-container w-100">

        {/* Navigation Link & Progress Row */}
        <div className="d-flex justify-content-between align-items-center mb-4">
          <button
            type="button"
            className="btn p-0 border-0 bg-transparent fs-4 text-dark"
            onClick={() => navigate(-1)}
          >
            <ArrowLeft size={20} className="primary-color"/>
          </button>
          <StepProgress step={1} total={5} />
        </div>

        {/* Brand App Identity Block */}
        <div className="sav-brand-header d-flex align-items-center gap-2 mb-4">
          <div className="sav-logo-box d-flex align-items-center gap-3 justify-content-center">
            <img src={logo} alt="" />
            <h4 className="text-logo lato gray m-0">Saventh</h4>
          </div>
        </div>

        {/* Screen Typography Identifiers */}
        <div className="sav-heading-group mb-4">
          <h2 className="sav-page__title fw-bold text-dark mb-1">
            Create your account
          </h2>
          <p className="sav-page__desc text-muted small mt-0">
            Start with your mobile number
          </p>
        </div>

        {/* Input Form Module */}
        <form onSubmit={submit} className="sav-form mt-2">
          <AppInput
            label="Mobile Number"
            placeholder="98765 43210"
            value={mobile}
            onChange={(e) => setMobile(e.target.value.replace(/\D/g, "").slice(0, 10))}
            error={error}
          />

          {/* Terms & Legal Anchors */}
          <p className="sav-legal-notice text-muted small mt-3 lh-sm">
            By signing up, you agree to our{" "}
            <Link to="/terms" className="text-decoration-underline text-success fw-medium">Terms</Link>{" "}
            and{" "}
            <Link to="/privacy" className="text-decoration-underline text-success fw-medium">Privacy Policy</Link>.
          </p>
        </form>
      </div>

      {/* Persistent Bottom Action Dock */}
      <div className="sav-page__bottom-container w-100 mt-auto pt-4">
        <PrimaryBtn
          className="w-100 py-3"
          onClick={submit}
          text={"Continue"}
          arrowRight={true}
        />

        <div className="sav-bottom-text text-center text-muted small mt-3">
          Already have an account?{" "}
          <Link to="/sign-in" className="text-success text-decoration-underline fw-semibold">
            Sign in
          </Link>
        </div>
      </div>

    </div>
  );
}