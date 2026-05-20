import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AppInput from "../../components/common/AppInput";
import AppButton from "../../components/common/AppButton";

export default function ForgotPassword() {
  const navigate = useNavigate();
  const [mobile, setMobile] = useState("");

  const submit = (e) => {
    e.preventDefault();
    navigate("/reset-password");
  };

  return (
    <div className="sav-page">
      <h2 className="sav-page__title">Forgot Password</h2>
      <p className="sav-page__desc">Enter your mobile number to reset password</p>

      <form onSubmit={submit}>
        <AppInput
          label="Mobile Number"
          placeholder="Enter mobile number"
          value={mobile}
          onChange={(e) => setMobile(e.target.value.replace(/\D/g, "").slice(0, 10))}
        />

        <AppButton type="submit" className="w-100 mt-3">
          Continue
        </AppButton>
      </form>
    </div>
  );
}
