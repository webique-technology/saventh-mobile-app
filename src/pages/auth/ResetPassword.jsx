import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AppInput from "../../components/common/AppInput";
import { PrimaryBtn } from "../../components/common/AppButton";
// import AppButton from "../../components/common/AppButton";

export default function ResetPassword() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ password: "", confirm: "" });

  const update = (k, v) => setForm((p) => ({ ...p, [k]: v }));

  const submit = (e) => {
    e.preventDefault();
    navigate("/sign-in");
  };

  return (
    <div className="sav-page">
      <h2 className="sav-page__title">Reset Password</h2>
      <p className="sav-page__desc">Set your new password</p>

      <form onSubmit={submit}>
        <AppInput
          label="New Password"
          type="password"
          placeholder="Enter new password"
          value={form.password}
          onChange={(e) => update("password", e.target.value)}
        />

        <AppInput
          label="Confirm Password"
          type="password"
          placeholder="Confirm password"
          value={form.confirm}
          onChange={(e) => update("confirm", e.target.value)}
        />

        <PrimaryBtn
          className="primary-btn"
          text={"Update Password"}
        />
      </form>
    </div>
  );
}
