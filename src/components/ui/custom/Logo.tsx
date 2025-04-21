
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  variant?: "default" | "white";
  withText?: boolean;
}

export function Logo({ className, variant = "default", withText = true }: LogoProps) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <div className="w-10 h-10 rounded-md tnp-gradient flex items-center justify-center text-white font-bold font-display">
        KIT
      </div>
      {withText && (
        <div>
          <h1 className={cn("font-display font-bold leading-tight text-primary", 
            variant === "white" && "text-white"
          )}>
            KIT's TNP Portal
          </h1>
          {withText === true && (
            <p className={cn("text-xs text-muted-foreground", 
              variant === "white" && "text-white/70"
            )}>
              Training & Placement Cell
            </p>
          )}
        </div>
      )}
    </div>
  );
}
