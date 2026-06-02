// Telemetry and platform events are completely disabled

type LovableErrorOptions = {
  mechanism?: "manual" | "onerror" | "unhandledrejection" | "react_error_boundary";
  handled?: boolean;
  severity?: "error" | "warning" | "info";
};

type LovableEvents = {
  captureException?: (
      error: unknown,
      context?: Record<string, unknown>,
      options?: LovableErrorOptions,
  ) => void;
};

declare global {
  interface Window {
    __lovableEvents?: LovableEvents;
  }
}

/**
 * Cleaned wrapper for application stability.
 * Deactivated to completely strip reporting telemetry and badge triggers.
 */
export function reportLovableError(error: unknown, context: Record<string, unknown> = {}) {
  // Safe No-Op: Does absolutely nothing when called by React Error Boundaries
  console.log("Local boundary caught error:", error, context);
}