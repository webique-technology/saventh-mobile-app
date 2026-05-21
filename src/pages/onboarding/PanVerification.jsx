import { useState } from "react";
import { useNavigate } from "react-router-dom";
import StepProgress from "../../components/common/StepProgress";
import AppInput from "../../components/common/AppInput";
// import AppButton from "../../components/common/AppButton";

export default function PanVerification() {
  const navigate = useNavigate();
  const [pan, setPan] = useState("");
  const [error, setError] = useState("");

  const submit = (e) => {
    e.preventDefault();
    if (pan.length !== 10) {
      setError("Enter valid PAN number");
      return;
    }
    setError("");
    navigate("/personal-details");
  };

  return (
    <div className="sav-page">
      <StepProgress step={3} total={5} />

      <h2 className="sav-page__title">PAN Verification</h2>
      <p className="sav-page__desc">Enter your PAN to verify identity</p>

      <form onSubmit={submit}>
        <AppInput
          label="PAN Number"
          placeholder="ABCDE1234F"
          value={pan}
          onChange={(e) =>
            setPan(
              e.target.value
                .toUpperCase()
                .replace(/[^A-Z0-9]/g, "")
                .slice(0, 10)
            )
          }
          error={error}
        />

        {/* <AppButton type="submit" className="w-100 mt-3">
          Verify & Continue
        </AppButton> */}
      </form>
    </div>
  );
}
