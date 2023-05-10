import React, { ReactNode } from 'react';

import ErrorMessage from './Error';

type Props = {
  fallback: ReactNode;
  children: ReactNode;
};

type State = {
  hasError: boolean;
};

class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  static getDerivedStateFromError(error: Error): State {
    return { hasError: !!error };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    // TODO We can add toast here as well
    console.log(error, info.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return <ErrorMessage />;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
