export default function AppButton({
  children,
  variant = "",
  className = "",
  ...props
}) {
  return (
    <button
      className={`${className}`} {...props}>
      {children}
    </button>
  );
}


