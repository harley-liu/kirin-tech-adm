import { Component, type ErrorInfo, type ReactNode } from 'react';

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  error: Error | null;
}

export default class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state: ErrorBoundaryState = { error: null };

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { error };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error('[ErrorBoundary] Uncaught error:', error, info.componentStack);
  }

  render() {
    if (this.state.error) {
      return (
        <div style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '2rem',
          fontFamily: 'system-ui, sans-serif',
          background: '#f9fafb',
        }}>
          <div style={{ maxWidth: 520, textAlign: 'center' }}>
            <h1 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#111827', marginBottom: '0.75rem' }}>
              Something went wrong loading this page
            </h1>
            <p style={{ color: '#6b7280', fontSize: '0.875rem', marginBottom: '1rem' }}>
              This is usually a missing or incorrect environment variable, or a temporary build issue.
              Check the browser console (F12) for the full error.
            </p>
            <pre style={{
              textAlign: 'left',
              background: '#1f2937',
              color: '#f87171',
              padding: '1rem',
              borderRadius: '0.5rem',
              fontSize: '0.75rem',
              overflowX: 'auto',
              whiteSpace: 'pre-wrap',
            }}>
              {this.state.error.message}
            </pre>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}
