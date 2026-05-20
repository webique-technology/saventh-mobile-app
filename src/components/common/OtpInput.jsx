import { useEffect, useRef } from "react";

export default function OtpInput({ length = 6, value, onChange }) {
  const inputsRef = useRef([]);

  useEffect(() => {
    inputsRef.current = inputsRef.current.slice(0, length);
  }, [length]);

  const handleChange = (idx, v) => {
    const digit = v.replace(/\D/g, "").slice(-1);
    const arr = value.split("");
    while (arr.length < length) arr.push("");
    arr[idx] = digit;
    const newVal = arr.join("").slice(0, length);
    onChange(newVal);

    if (digit && idx < length - 1) {
      inputsRef.current[idx + 1]?.focus();
    }
  };

  const handleKeyDown = (idx, e) => {
    if (e.key === "Backspace") {
      const arr = value.split("");
      while (arr.length < length) arr.push("");
      if (arr[idx]) {
        arr[idx] = "";
        onChange(arr.join(""));
      } else if (idx > 0) {
        inputsRef.current[idx - 1]?.focus();
      }
    }
  };

  const digits = value.split("");
  while (digits.length < length) digits.push("");

  return (
    <div className="sav-otp">
      {digits.map((d, idx) => (
        <input
          key={idx}
          ref={(el) => (inputsRef.current[idx] = el)}
          className="sav-otp__box"
          inputMode="numeric"
          maxLength={1}
          value={d}
          onChange={(e) => handleChange(idx, e.target.value)}
          onKeyDown={(e) => handleKeyDown(idx, e)}
        />
      ))}
    </div>
  );
}
