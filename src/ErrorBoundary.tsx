import React, { Component, ReactNode } from "react";

interface ErrorBoundaryProps {
  fallback: React.FC<{ error: Error; reset?: () => void }>;
  children: ReactNode;
}

interface ErrorBoundaryState {
  error: Error | null;
}

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { error: null };
  }

  static getDerivedStateFromError(error: Error) {
    return { error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("ErrorBoundary caught an error:", error, errorInfo);
  }

  render() {
    const { error } = this.state;
    const { fallback: Fallback, children } = this.props;

    return error ? <Fallback error={error} reset={() => this.setState({ error: null })} /> : children;
  }
}
