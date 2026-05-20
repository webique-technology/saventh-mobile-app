import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import AppInput from "../../components/common/AppInput";
import AppButton from "../../components/common/AppButton";
import StepProgress from "../../components/common/StepProgress";

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
    <div className="sav-page">
      <StepProgress step={1} total={5} />

      <h2 className="sav-page__title">Create Account</h2>
      <p className="sav-page__desc">Enter your mobile number to continue</p>

      <form onSubmit={submit}>
        <AppInput
          label="Mobile Number"
          placeholder="Enter 10 digit mobile number"
          value={mobile}
          onChange={(e) => setMobile(e.target.value.replace(/\D/g, "").slice(0, 10))}
          error={error}
        />

        <AppButton type="submit" className="w-100 mt-3">
          Continue
        </AppButton>
      </form>

      <div className="sav-bottom-text mt-4">
        Already have an account? <Link to="/sign-in">Sign In</Link>
      </div>
    </div>
  );
}
