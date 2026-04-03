import { clsx } from "clsx";

export function Section({
  children,
  className,
  bg,
  id,
}: {
  children: React.ReactNode;
  className?: string;
  bg?: "cream" | "white" | "brown";
  id?: string;
}) {
  return (
    <section
      id={id}
      className={clsx(
        "py-16 md:py-24",
        bg === "white" && "bg-white",
        bg === "brown" && "bg-brown text-cream",
        bg === "cream" && "bg-cream",
        className
      )}
    >
      {children}
    </section>
  );
}
