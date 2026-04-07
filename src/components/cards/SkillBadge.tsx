import { cn } from "@/lib/utils";

interface SkillBadgeProps {
  skill: string;
  variant?: "default" | "primary" | "accent";
  size?: "sm" | "md";
}

export function SkillBadge({ skill, variant = "default", size = "sm" }: SkillBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full font-mono font-medium",
        size === "sm" ? "px-2.5 py-0.5 text-xs" : "px-3 py-1 text-sm",
        variant === "default" && "bg-secondary text-secondary-foreground",
        variant === "primary" && "bg-primary/10 text-primary",
        variant === "accent" && "bg-accent/10 text-accent",
      )}
    >
      {skill}
    </span>
  );
}
