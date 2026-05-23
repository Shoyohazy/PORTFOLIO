// Reusable Loader Component — DotLottie Animation
import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { cn } from "@/lib/utils";

interface LoaderProps {
  /** Show the loader */
  isVisible?: boolean;
  /** Size of the loader: 'sm' | 'md' | 'lg' */
  size?: "sm" | "md" | "lg";
  /** Full-screen overlay mode */
  fullscreen?: boolean;
  /** Custom className for the container */
  className?: string;
}

const sizeMap = {
  sm: "w-16 h-16",
  md: "w-24 h-24",
  lg: "w-32 h-32",
};

export function Loader({
  isVisible = true,
  size = "md",
  fullscreen = false,
  className,
}: LoaderProps) {
  if (!isVisible) return null;

  if (fullscreen) {
    return (
      <div
        className={cn(
          "fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm",
          className,
        )}
      >
        <DotLottieReact
          src="/lottie/loading.lottie"
          loop
          autoplay
          className={cn("drop-shadow-lg", sizeMap[size])}
        />
      </div>
    );
  }

  return (
    <div
      className={cn(
        "flex items-center justify-center",
        sizeMap[size],
        className,
      )}
    >
      <DotLottieReact
        src="/lottie/loading.lottie"
        loop
        autoplay
        className="w-full h-full"
      />
    </div>
  );
}

/**
 * Hook for programmatic loader control
 * @example
 * const { show, hide, isLoading } = useLoader();
 * show(); // Display loader
 * hide(); // Hide loader
 */
export function useLoader() {
  const [isLoading, setIsLoading] = React.useState(false);

  return {
    isLoading,
    show: () => setIsLoading(true),
    hide: () => setIsLoading(false),
    toggle: () => setIsLoading((prev) => !prev),
  };
}
