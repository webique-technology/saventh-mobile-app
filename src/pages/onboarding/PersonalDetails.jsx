import { useState } from "react";
import { useNavigate } from "react-router-dom";
import StepProgress from "../../components/common/StepProgress";
import AppInput from "../../components/common/AppInput";
// import AppButton from "../../components/common/AppButton";

export default function PersonalDetails() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    dob: "",
  });

  const update = (k, v) => setForm((p) => ({ ...p, [k]: v }));

  const submit = (e) => {
    e.preventDefault();
    navigate("/address-details");
  };

  return (
    <div className="sav-page">
      <StepProgress step={4} total={5} />

      <h2 className="sav-page__title">Personal Details</h2>
      <p className="sav-page__desc">Fill in your personal information</p>

      <form onSubmit={submit}>
        <AppInput
          label="Full Name"
          placeholder="Enter full name"
          value={form.fullName}
          onChange={(e) => update("fullName", e.target.value)}
        />

        <AppInput
          label="Email"
          placeholder="Enter email"
          value={form.email}
          onChange={(e) => update("email", e.target.value)}
        />

        <AppInput
          label="Date of Birth"
          type="date"
          value={form.dob}
          onChange={(e) => update("dob", e.target.value)}
        />

        {/* <AppButton type="submit" className="w-100 mt-3">
          Continue
        </AppButton> */}
      </form>
    </div>
  );
}
