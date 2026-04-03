import { clsx } from "clsx";

type ButtonProps = {
  variant?: "primary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  children: React.ReactNode;
  className?: string;
} & (
  | React.ButtonHTMLAttributes<HTMLButtonElement>
  | React.AnchorHTMLAttributes<HTMLAnchorElement>
);

const baseStyles =
  "inline-flex items-center justify-center font-forum tracking-[0.15em] uppercase transition-all duration-300 ease-out cursor-pointer";

const variants = {
  primary:
    "bg-blush text-charcoal hover:bg-blush-dark border border-blush hover:border-blush-dark",
  outline:
    "border border-charcoal/30 text-charcoal hover:border-brown hover:text-brown",
  ghost:
    "text-brown hover:text-brown-dark",
};

const sizes = {
  sm: "px-5 py-2 text-xs",
  md: "px-7 py-3 text-xs",
  lg: "px-9 py-4 text-sm",
};

export function Button({
  variant = "primary",
  size = "md",
  href,
  children,
  className,
  ...props
}: ButtonProps) {
  const classes = clsx(baseStyles, variants[variant], sizes[size], className);

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      className={classes}
      {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {children}
    </button>
  );
}
