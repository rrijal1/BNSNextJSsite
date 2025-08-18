import React from "react";
import clsx from "clsx";

type Variant = "primary" | "secondary" | "outline";
type Size = "sm" | "md" | "lg";
type IconType = "stars" | "shield" | "trophy";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  iconType?: IconType;
  iconCount?: number; // used only for stars
  className?: string;
  children: React.ReactNode;
}

/* Small SVG icon factory — uses CSS variable for fill so colors follow theme */
const StarIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    viewBox="0 0 24 24"
    aria-hidden="true"
    className={clsx("icon", className)}
  >
    <path
      fill="var(--color-brandGreen)"
      d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.54 5.82 22 7 14.14 2 9.27l6.91-1.01L12 2z"
    />
  </svg>
);

/* Placeholder icons (add proper paths if needed) */
const ShieldIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    viewBox="0 0 24 24"
    aria-hidden="true"
    className={clsx("icon", className)}
  >
    <path
      fill="currentColor"
      d="M12 2l6 3v5c0 5-3 9-6 12-3-3-6-7-6-12V5l6-3z"
    />
  </svg>
);

const TrophyIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    viewBox="0 0 24 24"
    aria-hidden="true"
    className={clsx("icon", className)}
  >
    <path
      fill="currentColor"
      d="M5 3h14v2a4 4 0 0 1-4 4h-6A4 4 0 0 1 5 5V3zm3 14h8v2H8v-2z"
    />
  </svg>
);

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  iconType = "stars",
  iconCount = 6,
  className,
  children,
  ...props
}) => {
  const classes = clsx(
    "btn",
    {
      "btn-primary": variant === "primary",
      "btn-secondary": variant === "secondary",
      "btn-outline": variant === "outline",
      "btn-sm": size === "sm",
      "btn-md": size === "md",
      "btn-lg": size === "lg",
    },
    className
  );

  const renderStars = (count: number) =>
    Array.from({ length: Math.max(0, Math.min(12, count)) }).map((_, i) => (
      <span key={i} className={`star star-${i + 1}`} aria-hidden>
        <StarIcon />
      </span>
    ));

  const renderIcon = () => {
    if (iconType === "stars") return renderStars(iconCount ?? 0);
    if (iconType === "shield")
      return (
        <span className="icon-wrapper" aria-hidden>
          <ShieldIcon />
        </span>
      );
    if (iconType === "trophy")
      return (
        <span className="icon-wrapper" aria-hidden>
          <TrophyIcon />
        </span>
      );
    return null;
  };

  return (
    <button className={classes} {...props} type={props.type ?? "button"}>
      {children}
      {renderIcon()}
    </button>
  );
};

export default Button;
