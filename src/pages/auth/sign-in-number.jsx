import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AppInput from "../../components/common/AppInput";
import { CircleX } from 'lucide-react';
import lgo from "../../images/seventh-lgo.svg";
import BottomLine from "../../components/common/BottomLine";

export default function SignIn() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    mobile: "",
    password: "",
  });

  const [showError, setShowError] = useState(false);

  const update = (k, v) =>
    setForm((p) => ({
      ...p,
      [k]: v,
    }));

  // ✅ Validate Indian mobile number
  const validateMobile = (mobile) => {
    const mobileRegex = /^[6-9]\d{9}$/;
    return mobileRegex.test(mobile);
  };

  const submit = (e) => {
    e.preventDefault();

    if (!validateMobile(form.mobile)) {
      setShowError(true);

      // Auto hide after 3 sec
      setTimeout(() => {
        setShowError(false);
      }, 70000);

      return;
    }

    navigate("/dashboard");
  };

  return (
    <div className="sav-page">
      {/* Error Note */}
      {showError && (
        <div className="mobile-error-box">
          <button
            className="close-btn"
            onClick={() => setShowError(false)}
          >
            <CircleX size={16}/>
          </button>

          <p>Enter a valid 10-digit mobile number</p>
        </div>
      )}

      <div className="logo-wrap d-flex align-items-center">
        <img src={lgo} />
        <h1 className="text-logo lato">Saventh</h1>
      </div>

      <h2 className="title-text lato-bold">Sign in</h2>

      <p className="subtitle">Enter your registered mobile number</p>

      <form onSubmit={submit}>



        <div className="mobile-input-wrap">
  <div className="mobile-field">
    <span className="country-code">+91</span>

    <input
      type="text"

     placeholder="9970673433"
      value={form.mobile}
      onChange={(e) =>
        update(
          "mobile",
          e.target.value.replace(/\D/g, "").slice(0, 10)
        )
      }
      className="sav-field__input"
    />
  </div>
</div>

        {/* <div className="d-flex justify-content-end">
          <Link className="sav-link" to="/forgot-password">
            Forgot Password?
          </Link>
        </div> */}

        <BottomLine />

        <button className="primary-btn" type="submit">
          Get OTP <span className="arrow">➜</span>
        </button>
      </form>

      <div className="sav-bottom-text mt-4">
        Don&apos;t have an account?{" "}
        <Link to="/create-account">Create Account</Link>
      </div>
    </div>
  );
}