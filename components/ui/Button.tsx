import Link from "next/link";
import type { AnchorHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  children: ReactNode;
  variant?: "primary" | "ghost";
};

export function Button({
  href,
  children,
  className,
  variant = "primary",
  ...props
}: ButtonProps) {
  return (
    <Link
      href={href}
      className={cn(
        "button-base",
        variant === "primary" ? "button-primary" : "button-ghost",
        className,
      )}
      {...props}
    >
      {children}
    </Link>
  );
}
