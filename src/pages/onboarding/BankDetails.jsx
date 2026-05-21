import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AppInput from "../../components/common/AppInput";
// import AppButton from "../../components/common/AppButton";

export default function BankDetails() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    accountName: "",
    accountNumber: "",
    ifsc: "",
  });

  const update = (k, v) => setForm((p) => ({ ...p, [k]: v }));

  const submit = (e) => {
    e.preventDefault();
    navigate("/done");
  };

  return (
    <div className="sav-page">
      <h2 className="sav-page__title">Bank Details</h2>
      <p className="sav-page__desc">Add your bank account information</p>

      <form onSubmit={submit}>
        <AppInput
          label="Account Holder Name"
          placeholder="Enter account holder name"
          value={form.accountName}
          onChange={(e) => update("accountName", e.target.value)}
        />

        <AppInput
          label="Account Number"
          placeholder="Enter account number"
          value={form.accountNumber}
          onChange={(e) =>
            update("accountNumber", e.target.value.replace(/\D/g, "").slice(0, 18))
          }
        />

        <AppInput
          label="IFSC Code"
          placeholder="SBIN0001234"
          value={form.ifsc}
          onChange={(e) =>
            update("ifsc", e.target.value.toUpperCase().replace(/[^A-Z0-9]/g, "").slice(0, 11))
          }
        />

        {/* <AppButton type="submit" className="w-100 mt-3">
          Finish
        </AppButton> */}
      </form>
    </div>
  );
}
