import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AppInput from "../../components/common/AppInput";
import { PrimaryBtn } from "../../components/common/AppButton";
// import AppButton from "../../components/common/AppButton";

export default function AddressDetails() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    address: "",
    city: "",
    state: "",
    pincode: "",
  });

  const update = (k, v) => setForm((p) => ({ ...p, [k]: v }));

  const submit = (e) => {
    e.preventDefault();
    navigate("/bank-details");
  };

  return (
    <div className="sav-page">
      <h2 className="sav-page__title">Address Details</h2>
      <p className="sav-page__desc">Enter your address information</p>

      <form onSubmit={submit}>
        <AppInput
          label="Address"
          placeholder="Enter address"
          value={form.address}
          onChange={(e) => update("address", e.target.value)}
        />
        <AppInput
          label="City"
          placeholder="Enter city"
          value={form.city}
          onChange={(e) => update("city", e.target.value)}
        />
        <AppInput
          label="State"
          placeholder="Enter state"
          value={form.state}
          onChange={(e) => update("state", e.target.value)}
        />
        <AppInput
          label="Pincode"
          placeholder="Enter pincode"
          value={form.pincode}
          onChange={(e) => update("pincode", e.target.value.replace(/\D/g, "").slice(0, 6))}
        />
        <PrimaryBtn
          className="primary-btn"
          text={"Continue"}
        />
        {/* <AppButton type="submit" className="w-100 mt-3">
          Continue
        </AppButton> */}
      </form>
    </div>
  );
}
