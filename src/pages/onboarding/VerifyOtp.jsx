import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import StepProgress from "../../components/common/StepProgress";
// import AppButton from "../../components/common/AppButton";
import OtpInput from "../../components/common/OtpInput";
import { PrimaryBtn } from "../../components/common/AppButton";

export default function VerifyOtp() {
  const navigate = useNavigate();
  const location = useLocation();
  const mobile = location.state?.mobile || "XXXXXXXXXX";

  const [otp, setOtp] = useState("");

  const submit = () => {
    if (otp.length < 6) return;
    navigate("/pan-verification");
  };

  return (
    <div className="sav-page">
      <StepProgress step={2} total={5} />

      <h2 className="sav-page__title">Verify OTP</h2>
      <p className="sav-page__desc">
        We sent a verification code to <b>{mobile}</b>
      </p>

      <div className="mt-4">
        <OtpInput value={otp} onChange={setOtp} />
      </div>

      <PrimaryBtn
        className="primary-btn mt-3"
        text={"Continue"}
        arrowRight={true}
      />

    </div>
  );
}
