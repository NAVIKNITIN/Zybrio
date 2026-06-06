"use client";

import { useEffect } from "react";
import { ErrorState } from "@/components/common/error-state";

export default function RootError({
  error,
  reset,
}: {
  readonly error: Error & { digest?: string };
  readonly reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="container-app py-24">
      <ErrorState
        title="Application error"
        message={error.message || "An unexpected error occurred."}
        onRetry={reset}
      />
    </div>
  );
}
