import React, { useEffect } from "react";

interface ErrorPageProps {
  error: Error;
  reset?: () => void;
}

export const ErrorPage: React.FC<ErrorPageProps> = ({ error, reset }) => {
  useEffect(() => {
    console.error("Unhandled error:", error);
  }, [error]);

  return (
    <div>
      <h2>An unhandled error occurred!</h2>
      <blockquote>
        <code>{error.message}</code>
      </blockquote>
      {reset && <button onClick={reset}>Try again</button>}
    </div>
  );
};
