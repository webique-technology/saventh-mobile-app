import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import AppInput from "../../components/common/AppInput";
// import AppButton from "../../components/common/AppButton";
import StepProgress from "../../components/common/StepProgress";
import { PrimaryBtn } from "../../components/common/AppButton";

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

      <div>
        <h2 className="sav-page__title">Create Account</h2>
        <p className="sav-page__desc">Enter your mobile number to continue</p>
      </div>

      <form onSubmit={submit} className="">
        <AppInput
          label="Mobile Number"
          placeholder="Enter 10 digit mobile number"
          value={mobile}
          onChange={(e) => setMobile(e.target.value.replace(/\D/g, "").slice(0, 10))}
          error={error}
        />

        <PrimaryBtn
          className=""
          onClick={() => navigate("/verify-otp")}
          text={"Continue"}
          arrowRight={true}
        />
      </form>

      <div className="sav-bottom-text mt-4">
        Already have an account? <Link to="/sign-in">Sign In</Link>
      </div>
    </div>
  );
}
