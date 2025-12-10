"use client";

import { Spinner } from "@/components/ui/spinner";
import { cn } from "@/lib/utils";

interface FullPageLoaderProps {
  message?: string;
  submessage?: string;
  show?: boolean;
  className?: string;
}

export function FullPageLoader({
  message = "جاري التحميل...",
  submessage,
  show = true,
  className,
}: FullPageLoaderProps) {
  if (!show) return null;

  return (
    <div
      className={cn(
        "fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm",
        className
      )}
    >
      <div className="flex flex-col items-center gap-6 animate-in fade-in-0 zoom-in-95 duration-300">
        {/* Purple gradient ring spinner */}
        <div className="relative">
          {/* Outer glow ring */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary via-purple-500 to-primary blur-xl opacity-50 animate-pulse" />

          {/* Main spinner container */}
          <div className="relative">
            <Spinner className="h-16 w-16 text-primary" />

            {/* Accent ring */}
            <div
              className="absolute inset-0 rounded-full border-4 border-primary/20 animate-ping"
              style={{ animationDuration: "2s" }}
            />
          </div>
        </div>

        {/* Loading text */}
        <div className="space-y-2 text-center">
          <h3 className="text-lg font-semibold text-foreground animate-pulse">
            {message}
          </h3>
          {submessage && (
            <p className="text-sm text-muted-foreground max-w-xs">
              {submessage}
            </p>
          )}
        </div>

        {/* Loading dots animation */}
        <div className="flex gap-1.5">
          <div
            className="h-2 w-2 rounded-full bg-primary animate-bounce"
            style={{ animationDelay: "0ms" }}
          />
          <div
            className="h-2 w-2 rounded-full bg-primary animate-bounce"
            style={{ animationDelay: "150ms" }}
          />
          <div
            className="h-2 w-2 rounded-full bg-primary animate-bounce"
            style={{ animationDelay: "300ms" }}
          />
        </div>
      </div>
    </div>
  );
}
