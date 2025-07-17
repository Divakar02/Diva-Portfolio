// ErrorBoundary.jsx
import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  
  componentDidCatch(error, info) {
    console.error("Boundary caught error:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback || <div className="text-red-500">Something went wrong.</div>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
