import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AppInput from "../../components/common/AppInput";
import { PrimaryBtn } from "../../components/common/AppButton";
// import AppButton from "../../components/common/AppButton";

export default function SignIn() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ mobile: "", password: "" });

  const update = (k, v) => setForm((p) => ({ ...p, [k]: v }));

  const submit = (e) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  return (
    <div className="sav-page">
      <h2 className="sav-page__title">Sign In</h2>
      <p className="sav-page__desc">Welcome back, login to continue</p>

      <form onSubmit={submit}>
        <AppInput
          label="Mobile Number"
          placeholder="Enter mobile number"
          value={form.mobile}
          onChange={(e) => update("mobile", e.target.value.replace(/\D/g, "").slice(0, 10))}
        />

        <AppInput
          label="Password"
          type="password"
          placeholder="Enter password"
          value={form.password}
          onChange={(e) => update("password", e.target.value)}
        />

        <div className="d-flex justify-content-end">
          <Link className="sav-link" to="/forgot-password">
            Forgot Password?
          </Link>
        </div>
        <PrimaryBtn
          className="primary-btn"
          text={"Sign In"}
        />
      </form>

      <div className="sav-bottom-text mt-4">
        Don&apos;t have an account? <Link to="/create-account">Create Account</Link>
      </div>
    </div>
  );
}
