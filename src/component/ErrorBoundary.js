import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
    
    this.setState({
      error: error,
      errorInfo: errorInfo
    });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-dark-900 flex items-center justify-center px-4">
          <div className="max-w-md w-full bg-dark-800/50 backdrop-blur-sm border border-red-500/30 rounded-2xl p-8 text-center">
            <div className="text-red-400 text-6xl mb-6">⚠️</div>
            <h2 className="text-2xl font-bold text-light-50 mb-4">
              Oops! Something went wrong
            </h2>
            <p className="text-light-300 mb-6">
              We are sorry for the inconvenience. Please refresh the page or try again later.
            </p>
            <div className="space-y-3">
              <button
                onClick={() => window.location.reload()}
                className="w-full bg-primary-500 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:bg-primary-600"
              >
                Refresh Page
              </button>
              <button
                onClick={() => this.setState({ hasError: false, error: null, errorInfo: null })}
                className="w-full bg-transparent border border-secondary-500 text-secondary-400 px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:bg-secondary-500 hover:text-white"
              >
                Try Again
              </button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;