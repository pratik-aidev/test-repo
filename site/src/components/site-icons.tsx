import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

function IconShell({ children, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {children}
    </svg>
  );
}

export type SiteIconName =
  | "spark"
  | "layers"
  | "workflow"
  | "rocket"
  | "shield"
  | "database"
  | "chart"
  | "clock"
  | "check"
  | "book"
  | "tag"
  | "users"
  | "mail"
  | "phone"
  | "target"
  | "menu"
  | "arrow-right";

export function SiteIcon({
  name,
  className,
}: {
  name: SiteIconName;
  className?: string;
}) {
  switch (name) {
    case "spark":
      return (
        <IconShell className={className}>
          <path d="M12 3l1.6 4.7L18 9.3l-4.4 1.6L12 15l-1.6-4.1L6 9.3l4.4-1.6L12 3z" />
          <path d="M19 14l.8 2.2L22 17l-2.2.8L19 20l-.8-2.2L16 17l2.2-.8L19 14z" />
        </IconShell>
      );
    case "layers":
      return (
        <IconShell className={className}>
          <path d="M12 3l8 4-8 4-8-4 8-4z" />
          <path d="M4 11l8 4 8-4" />
          <path d="M4 15l8 4 8-4" />
        </IconShell>
      );
    case "workflow":
      return (
        <IconShell className={className}>
          <path d="M7 7h5a2 2 0 0 1 2 2v0a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v0a2 2 0 0 1 2-2z" />
          <path d="M12 13h5a2 2 0 0 1 2 2v0a2 2 0 0 1-2 2h-5" />
          <path d="M16 7V5" />
          <path d="M16 19v-2" />
          <path d="M19 13h2" />
          <path d="M3 11h2" />
        </IconShell>
      );
    case "rocket":
      return (
        <IconShell className={className}>
          <path d="M14 4c3 0 6 3 6 6-1 6-5 9-11 10l-2-2c1-6 4-10 10-14z" />
          <path d="M9 15l-4 1 1-4" />
          <path d="M15 9l-4 4" />
        </IconShell>
      );
    case "shield":
      return (
        <IconShell className={className}>
          <path d="M12 3l7 3v5c0 4.9-3.3 8.7-7 10-3.7-1.3-7-5.1-7-10V6l7-3z" />
          <path d="M9 12l2 2 4-4" />
        </IconShell>
      );
    case "database":
      return (
        <IconShell className={className}>
          <ellipse cx="12" cy="6" rx="7" ry="3" />
          <path d="M5 6v6c0 1.7 3.1 3 7 3s7-1.3 7-3V6" />
          <path d="M5 12v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6" />
        </IconShell>
      );
    case "chart":
      return (
        <IconShell className={className}>
          <path d="M4 19h16" />
          <path d="M7 15v-4" />
          <path d="M12 15V8" />
          <path d="M17 15v-6" />
        </IconShell>
      );
    case "clock":
      return (
        <IconShell className={className}>
          <circle cx="12" cy="12" r="8" />
          <path d="M12 8v4l3 2" />
        </IconShell>
      );
    case "check":
      return (
        <IconShell className={className}>
          <path d="M4 12l4 4 12-12" />
        </IconShell>
      );
    case "book":
      return (
        <IconShell className={className}>
          <path d="M6 4h10a2 2 0 0 1 2 2v13a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2V6a2 2 0 0 1 2-2z" />
          <path d="M8 8h6" />
          <path d="M8 12h5" />
        </IconShell>
      );
    case "tag":
      return (
        <IconShell className={className}>
          <path d="M4 12l8-8 8 8-8 8-8-8z" />
          <path d="M9 9h.01" />
        </IconShell>
      );
    case "users":
      return (
        <IconShell className={className}>
          <path d="M17 20v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2" />
          <circle cx="10" cy="7" r="3" />
          <path d="M22 20v-1a4 4 0 0 0-3-3.8" />
          <path d="M16 4.5a3 3 0 0 1 0 5.8" />
        </IconShell>
      );
    case "mail":
      return (
        <IconShell className={className}>
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="M4 7l8 6 8-6" />
        </IconShell>
      );
    case "phone":
      return (
        <IconShell className={className}>
          <path d="M5 4h4l2 5-3 2c1.5 3 3.5 5 6 6l2-3 5 2v4c0 1-1 2-2 2C9.5 22 2 14.5 2 6c0-1 1-2 2-2h1z" />
        </IconShell>
      );
    case "target":
      return (
        <IconShell className={className}>
          <circle cx="12" cy="12" r="8" />
          <circle cx="12" cy="12" r="4" />
          <path d="M12 12l5-5" />
        </IconShell>
      );
    case "menu":
      return (
        <IconShell className={className}>
          <path d="M4 7h16" />
          <path d="M4 12h16" />
          <path d="M4 17h16" />
        </IconShell>
      );
    case "arrow-right":
      return (
        <IconShell className={className}>
          <path d="M5 12h14" />
          <path d="M13 6l6 6-6 6" />
        </IconShell>
      );
    default:
      return null;
  }
}
