export default function AppInput({
  label,
  hint,
  error,
  className = "",
  ...props
}) {
  return (
    <div className={`sav-field ${className}`}>
      {label && <label className="sav-field__label">{label}</label>}
      <input className={`sav-field__input ${error ? "is-invalid" : ""}`} {...props} />
      {hint && <div className="sav-field__hint">{hint}</div>}
      {error && <div className="sav-field__error">{error}</div>}
    </div>
  );
}
