type BadgeProps = {
  label: string;
  variant?: "primary" | "success" | "warning";
  rounded?: boolean;
};

export const Badge = ({
  label,
  variant = "primary",
  rounded = false,
}: BadgeProps) => {
  return (
    <span className={`badge ${variant} ${rounded ? "rounded" : ""}`}>
      {label}
    </span>
  );
};
