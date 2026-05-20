export default function StepProgress({ step = 1, total = 5 }) {
  const percent = Math.round((step / total) * 100);

  return (
    <div className="sav-progress">
      <div className="sav-progress__top">
        <span className="sav-progress__title">Step {step} of {total}</span>
        <span className="sav-progress__pct">{percent}%</span>
      </div>
      <div className="sav-progress__bar">
        <div className="sav-progress__fill" style={{ width: `${percent}%` }} />
      </div>
    </div>
  );
}
